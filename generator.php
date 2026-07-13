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
    'generate'     => generatePost(),
    'get_saved'    => getSavedPosts(),
    'save_post'    => savePost(),
    'delete_post'  => deletePost(),
    default        => respond(false, 'Invalid action')
};


// ─── GENERATE POST IDEAS VIA GEMINI ──────────────────────────
function generatePost(): void {
    $promptIdea = trim($_POST['prompt_idea'] ?? '');
    $platform   = trim($_POST['platform'] ?? 'Instagram');

    if (!$promptIdea) {
        respond(false, 'Please describe what you are promoting');
    }

    $businessType = $_SESSION['business_type'] ?? 'small business';
    $location     = $_SESSION['location'] ?? 'Japan';
    $language     = languageName($_SESSION['language'] ?? 'en');

    // Build Gemini prompt
    $prompt = "You are a social media copywriter for small businesses in Japan.
The business is a {$businessType} in {$location}.
They want to promote: {$promptIdea}
Platform: {$platform}

Write 3 different post variations. Each should:
- Be engaging and natural (not robotic)
- Include relevant emojis
- Be ready to copy and paste
- Be suitable for a Japanese local business audience
- Be written entirely in {$language}

Format your response exactly like this:
--- Post 1 ---
[post text here]

--- Post 2 ---
[post text here]

--- Post 3 ---
[post text here]";

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
    $generated  = $geminiData['candidates'][0]['content']['parts'][0]['text']
        ?? 'Could not generate posts. Please try again.';

    respond(true, 'OK', [
        'generated_content' => $generated,
        'prompt_idea'       => $promptIdea,
        'platform'          => $platform
    ]);
}


// ─── SAVE A GENERATED POST ────────────────────────────────────
function savePost(): void {
    $promptIdea       = trim($_POST['prompt_idea'] ?? '');
    $generatedContent = trim($_POST['generated_content'] ?? '');
    $platform         = trim($_POST['platform'] ?? 'Instagram');

    if (!$promptIdea || !$generatedContent) {
        respond(false, 'Missing post data');
    }

    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare(
        'INSERT INTO generated_posts (user_id, prompt_idea, generated_content, platform, status)
         VALUES (?, ?, ?, ?, ?)'
    );
    $stmt->execute([$userId, $promptIdea, $generatedContent, $platform, 'Saved']);

    respond(true, 'Post saved!', ['post_id' => $pdo->lastInsertId()]);
}


// ─── GET SAVED POSTS ─────────────────────────────────────────
function getSavedPosts(): void {
    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare(
        'SELECT id, prompt_idea, generated_content, platform, status, created_at
         FROM generated_posts
         WHERE user_id = ?
         ORDER BY created_at DESC
         LIMIT 20'
    );
    $stmt->execute([$userId]);
    $posts = $stmt->fetchAll();

    respond(true, 'OK', ['posts' => $posts]);
}


// ─── DELETE A SAVED POST ──────────────────────────────────────
function deletePost(): void {
    $postId = (int)($_POST['post_id'] ?? 0);
    $userId = $_SESSION['user_id'];

    if (!$postId) {
        respond(false, 'Invalid post');
    }

    $pdo  = getDB();
    $stmt = $pdo->prepare(
        'DELETE FROM generated_posts WHERE id = ? AND user_id = ?'
    );
    $stmt->execute([$postId, $userId]);

    respond(true, 'Post deleted');
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
