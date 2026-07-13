<?php

require_once 'db.php';

header('Content-Type: application/json');
session_start();

// Check login
if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    die(json_encode(['success' => false, 'message' => 'Not logged in']));
}

// ── Gemini API Key ────────────────────────────────────────────
require_once __DIR__ . '/env.php';
define('GEMINI_URL', 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' . GEMINI_API_KEY);

$action = $_POST['action'] ?? $_GET['action'] ?? '';

match($action) {
    'create_story' => createStory(),
    'get_stories'  => getStories(),
    default        => respond(false, 'Invalid action')
};


// ─── CREATE STORY: build prompt, call Gemini, save ───────────
function createStory(): void {
    $achievement  = trim($_POST['achievement'] ?? '');
    $metricValue  = trim($_POST['metric_value'] ?? '');
    $metricUnit   = trim($_POST['metric_unit'] ?? '');
    $timeframe    = trim($_POST['timeframe'] ?? '');

    if (!$achievement || !$metricValue || !$metricUnit || !$timeframe) {
        respond(false, 'Please fill in all fields');
    }

    $businessType = $_SESSION['business_type'] ?? 'small business';
    $location     = $_SESSION['location'] ?? 'Japan';
    $ownerName    = $_SESSION['user_name'] ?? 'A business owner';
    $language     = languageName($_SESSION['language'] ?? 'en');

    // Build Gemini prompt
    $prompt = "Write ONE short, punchy success story (1-2 sentences, max 40 words) for a small business success showcase.

Business owner: {$ownerName}
Business type: {$businessType}
Location: {$location}
Achievement: {$achievement}
Result: {$metricValue}{$metricUnit} improvement
Timeframe: {$timeframe}

Write it in first person, as a testimonial quote. Be specific and authentic, not generic. No quotation marks needed, no markdown, just plain text. Write the entire story in {$language}.";

    $payload = json_encode([
        'contents' => [
            ['role' => 'user', 'parts' => [['text' => $prompt]]]
        ]
    ]);

    $ch = curl_init(GEMINI_URL);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $payload,
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        CURLOPT_TIMEOUT        => 15,
    ]);

    $response  = curl_exec($ch);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($curlError) {
        respond(false, 'Could not reach AI service: ' . $curlError);
    }

    $geminiData = json_decode($response, true);
    $storyText  = $geminiData['candidates'][0]['content']['parts'][0]['text'] ?? null;

    if ($storyText === null) {
        $errMsg = $geminiData['error']['message'] ?? json_encode($geminiData);
        respond(false, 'Gemini API error: ' . $errMsg);
    }

    $storyText = trim($storyText);

    // Save to DB
    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare(
        'INSERT INTO success_stories (user_id, achievement, metric_value, metric_unit, timeframe, story_text)
         VALUES (?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([$userId, $achievement, $metricValue, $metricUnit, $timeframe, $storyText]);

    respond(true, 'Story created!', [
        'story_id'   => $pdo->lastInsertId(),
        'story_text' => $storyText
    ]);
}


// ─── GET ALL STORIES (public, newest first) ──────────────────
function getStories(): void {
    $pdo = getDB();

    $stmt = $pdo->query(
        'SELECT 
            ss.id,
            ss.achievement,
            ss.metric_value,
            ss.metric_unit,
            ss.timeframe,
            ss.story_text,
            ss.created_at,
            u.business_type,
            u.location
         FROM success_stories ss
         JOIN users u ON ss.user_id = u.id
         ORDER BY ss.created_at DESC
         LIMIT 30'
    );
    $stories = $stmt->fetchAll();

    respond(true, 'OK', ['stories' => $stories]);
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
