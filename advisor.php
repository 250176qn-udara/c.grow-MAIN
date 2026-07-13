<?php

require_once 'db.php';

header('Content-Type: application/json');
session_start();

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    die(json_encode(['success' => false, 'message' => 'Not logged in']));
}

require_once __DIR__ . '/env.php';
define('GEMINI_URL', 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' . GEMINI_API_KEY);

$action = $_POST['action'] ?? $_GET['action'] ?? '';

match($action) {
    'get_history'   => getHistory(),
    'send_message'  => sendMessage(),
    'clear_history' => clearHistory(),
    default         => respond(false, 'Invalid action')
};


// ─── GET CHAT HISTORY ────────────────────────────────────────
function getHistory(): void {
    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare(
        'SELECT sender, message_text, created_at
         FROM advisor_messages
         WHERE user_id = ?
         ORDER BY created_at ASC
         LIMIT 50'
    );
    $stmt->execute([$userId]);
    $messages = $stmt->fetchAll();

    respond(true, 'OK', ['messages' => $messages]);
}


// ─── SEND MESSAGE → GEMINI (with full memory) → SAVE ─────────
function sendMessage(): void {
    $userMessage = trim($_POST['message'] ?? '');
    if (!$userMessage) respond(false, 'Message cannot be empty');

    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    // ── Pull full user context from DB ────────────────────────
    $stmt = $pdo->prepare(
        'SELECT owner_name, business_type, location FROM users WHERE id = ?'
    );
    $stmt->execute([$userId]);
    $user = $stmt->fetch();

    // Checklist progress
    $stmt = $pdo->prepare(
        'SELECT COUNT(*) as total, SUM(is_completed) as done
         FROM user_checklist_progress WHERE user_id = ?'
    );
    $stmt->execute([$userId]);
    $cl = $stmt->fetch();
    $clText = $cl['total'] > 0
        ? "{$cl['done']} of {$cl['total']} daily checklist tasks completed"
        : "no checklist progress yet";

    // Active goals
    $stmt = $pdo->prepare(
        'SELECT goal_title, current_value, target_value, unit, deadline
         FROM goals WHERE user_id = ? AND status = "active"
         ORDER BY deadline ASC LIMIT 5'
    );
    $stmt->execute([$userId]);
    $goals = $stmt->fetchAll();
    $goalsText = count($goals) > 0
        ? implode('; ', array_map(fn($g) =>
            "{$g['goal_title']} ({$g['current_value']}/{$g['target_value']} {$g['unit']}, due {$g['deadline']})",
            $goals))
        : "no active goals set";

    // Posts generated this month
    $stmt = $pdo->prepare(
        'SELECT COUNT(*) FROM generated_posts
         WHERE user_id = ? AND MONTH(created_at) = MONTH(NOW())'
    );
    $stmt->execute([$userId]);
    $postsCount = $stmt->fetchColumn();

    // ── Build rich system prompt ──────────────────────────────
    $systemPrompt = "You are GrowEasy, a dedicated AI marketing advisor for small business owners in Japan.

=== USER PROFILE ===
Name: {$user['owner_name']}
Business type: {$user['business_type']}
Location: {$user['location']}

=== CURRENT PROGRESS ===
Checklist: {$clText}
Active goals: {$goalsText}
Posts generated this month: {$postsCount}

=== YOUR ROLE ===
You know this user personally. Reference their specific business type and location when giving advice.
Give practical, specific, and actionable marketing advice tailored to their situation.
If they have active goals, help them work toward those goals.
If their checklist completion is low, gently encourage daily habits.
Keep responses concise (2-4 sentences or a short bullet list).
Focus on low-cost strategies: Instagram, Google Business, LINE, local community marketing.
Always speak in a warm, encouraging, mentor-like tone — this is a beginner who needs confidence.";

    // ── Save user message ─────────────────────────────────────
    $stmt = $pdo->prepare(
        'INSERT INTO advisor_messages (user_id, sender, message_text) VALUES (?, ?, ?)'
    );
    $stmt->execute([$userId, 'user', $userMessage]);

    // ── Build conversation history for Gemini ─────────────────
    $stmt = $pdo->prepare(
        'SELECT sender, message_text FROM advisor_messages
         WHERE user_id = ?
         ORDER BY created_at DESC LIMIT 12'
    );
    $stmt->execute([$userId]);
    $history = array_reverse($stmt->fetchAll());

    $geminiMessages = [];
    foreach ($history as $msg) {
        $geminiMessages[] = [
            'role'  => $msg['sender'] === 'user' ? 'user' : 'model',
            'parts' => [['text' => $msg['message_text']]]
        ];
    }

    // ── Call Gemini API ───────────────────────────────────────
    $payload = json_encode([
        'system_instruction' => [
            'parts' => [['text' => $systemPrompt]]
        ],
        'contents' => $geminiMessages
    ]);

    $ch = curl_init(GEMINI_URL);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $payload,
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        CURLOPT_TIMEOUT        => 20,
    ]);

    $response  = curl_exec($ch);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($curlError) respond(false, 'Could not reach AI service: ' . $curlError);

    $geminiData = json_decode($response, true);
    $aiReply    = $geminiData['candidates'][0]['content']['parts'][0]['text'] ?? null;

    if ($aiReply === null) {
        $errMsg = $geminiData['error']['message'] ?? json_encode($geminiData);
        respond(false, 'Gemini API error: ' . $errMsg);
    }

    // ── Save AI reply ─────────────────────────────────────────
    $stmt = $pdo->prepare(
        'INSERT INTO advisor_messages (user_id, sender, message_text) VALUES (?, ?, ?)'
    );
    $stmt->execute([$userId, 'ai', $aiReply]);

    respond(true, 'OK', ['reply' => $aiReply]);
}


// ─── CLEAR CHAT HISTORY ──────────────────────────────────────
function clearHistory(): void {
    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    $pdo->prepare('DELETE FROM advisor_messages WHERE user_id = ?')->execute([$userId]);

    respond(true, 'Chat cleared');
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
