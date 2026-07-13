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
    'create_persona' => createPersona(),
    'get_personas'   => getPersonas(),
    'delete_persona' => deletePersona(),
    default          => respond(false, 'Invalid action')
};


// ─── CREATE PERSONA: AI expands input into structured data ───
function createPersona(): void {
    $name        = trim($_POST['persona_name'] ?? '');
    $description = trim($_POST['description'] ?? '');

    if (!$description) {
        respond(false, 'Please describe your ideal customer');
    }

    $businessType = $_SESSION['business_type'] ?? 'small business';
    $location     = $_SESSION['location'] ?? 'Japan';
    $language     = languageName($_SESSION['language'] ?? 'en');

    $nameInstruction = $name
        ? "The persona's name is: {$name}."
        : "Invent a realistic Japanese first name for this persona.";

    $prompt = "You are a marketing strategist building a customer persona for a {$businessType} in {$location}.

Customer description: {$description}
{$nameInstruction}

All text field values in the JSON (occupation, needs, channels, pain_point, motivator) must be written in {$language}. Keep the JSON keys themselves in English.

Return ONLY valid JSON (no markdown, no code fences, no extra text) with this exact structure:
{
  \"name\": \"string\",
  \"age\": number,
  \"occupation\": \"string (specific job title)\",
  \"needs\": \"3 short needs separated by ' | '\",
  \"channels\": \"2-3 preferred marketing channels separated by ' | ' (e.g. Instagram, LINE, Google Search)\",
  \"pain_point\": \"one specific pain point, max 12 words\",
  \"motivator\": \"one specific thing that makes them buy, max 12 words\"
}";

    $payload = json_encode([
        'contents' => [
            ['role' => 'user', 'parts' => [['text' => $prompt]]]
        ],
        'generationConfig' => [
            'response_mime_type' => 'application/json'
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
    $rawText    = $geminiData['candidates'][0]['content']['parts'][0]['text'] ?? null;

    if ($rawText === null) {
        $errMsg = $geminiData['error']['message'] ?? json_encode($geminiData);
        respond(false, 'Gemini API error: ' . $errMsg);
    }

    // Clean up in case Gemini wraps in code fences despite instructions
    $rawText = preg_replace('/^```json\s*|\s*```$/', '', trim($rawText));
    $persona = json_decode($rawText, true);

    if (!$persona || !isset($persona['name'])) {
        respond(false, 'AI returned an unexpected format. Please try again.');
    }

    // Save to DB
    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare(
        'INSERT INTO personas (user_id, persona_name, age, occupation, details, needs, channels, pain_point, motivator)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([
        $userId,
        $persona['name'],
        (int)$persona['age'],
        $persona['occupation'],
        $description, // original user input stored in 'details'
        $persona['needs'],
        $persona['channels'],
        $persona['pain_point'],
        $persona['motivator']
    ]);

    $persona['id'] = $pdo->lastInsertId();

    respond(true, 'Persona created!', ['persona' => $persona]);
}


// ─── GET ALL PERSONAS (private to this user) ─────────────────
function getPersonas(): void {
    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare(
        'SELECT id, persona_name AS name, age, occupation, needs, channels, pain_point, motivator, created_at
         FROM personas
         WHERE user_id = ?
         ORDER BY created_at DESC'
    );
    $stmt->execute([$userId]);
    $personas = $stmt->fetchAll();

    respond(true, 'OK', ['personas' => $personas]);
}


// ─── DELETE PERSONA ───────────────────────────────────────────
function deletePersona(): void {
    $personaId = (int)($_POST['persona_id'] ?? 0);
    $userId    = $_SESSION['user_id'];

    if (!$personaId) {
        respond(false, 'Invalid persona');
    }

    $pdo  = getDB();
    $stmt = $pdo->prepare('DELETE FROM personas WHERE id = ? AND user_id = ?');
    $stmt->execute([$personaId, $userId]);

    respond(true, 'Persona deleted');
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
