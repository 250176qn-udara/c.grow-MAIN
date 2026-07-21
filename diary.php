<?php

require_once 'db.php';

header('Content-Type: application/json');
session_start();

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    die(json_encode(['success' => false, 'message' => 'Not logged in']));
}

$action = $_POST['action'] ?? $_GET['action'] ?? '';

match($action) {
    'get_entries' => getEntries(),
    'get_entry'   => getEntry(),
    'save_entry'  => saveEntry(),
    'delete_entry'=> deleteEntry(),
    default       => respond(false, 'Invalid action')
};


// ─── GET ENTRIES FOR A MONTH (for the diary list/calendar dots) ─
function getEntries(): void {
    $pdo       = getDB();
    $userId    = $_SESSION['user_id'];
    $monthYear = $_GET['month'] ?? date('Y-m'); // e.g. "2026-07"

    $stmt = $pdo->prepare(
        "SELECT id, entry_date, mood, what_worked, what_didnt, notes
         FROM diary_entries
         WHERE user_id = ? AND DATE_FORMAT(entry_date, '%Y-%m') = ?
         ORDER BY entry_date DESC"
    );
    $stmt->execute([$userId, $monthYear]);
    $entries = $stmt->fetchAll();

    respond(true, 'OK', ['entries' => $entries]);
}


// ─── GET A SINGLE DAY'S ENTRY (for today's diary box) ──────────
function getEntry(): void {
    $pdo    = getDB();
    $userId = $_SESSION['user_id'];
    $date   = $_GET['date'] ?? date('Y-m-d');

    $stmt = $pdo->prepare(
        'SELECT id, entry_date, mood, what_worked, what_didnt, notes
         FROM diary_entries WHERE user_id = ? AND entry_date = ?'
    );
    $stmt->execute([$userId, $date]);
    $entry = $stmt->fetch();

    respond(true, 'OK', ['entry' => $entry ?: null]);
}


// ─── CREATE OR UPDATE TODAY'S (OR ANY DATE'S) ENTRY ────────────
function saveEntry(): void {
    $date       = trim($_POST['entry_date'] ?? date('Y-m-d'));
    $mood       = trim($_POST['mood'] ?? 'okay');
    $whatWorked = trim($_POST['what_worked'] ?? '');
    $whatDidnt  = trim($_POST['what_didnt'] ?? '');
    $notes      = trim($_POST['notes'] ?? '');

    $validMoods = ['great', 'good', 'okay', 'tough', 'bad'];
    if (!in_array($mood, $validMoods, true)) $mood = 'okay';

    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    // One entry per day: insert, or update if today's entry already exists
    $stmt = $pdo->prepare(
        'INSERT INTO diary_entries (user_id, entry_date, mood, what_worked, what_didnt, notes)
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
            mood = VALUES(mood),
            what_worked = VALUES(what_worked),
            what_didnt = VALUES(what_didnt),
            notes = VALUES(notes),
            updated_at = NOW()'
    );
    $stmt->execute([$userId, $date, $mood, $whatWorked, $whatDidnt, $notes]);

    respond(true, 'Diary entry saved!');
}


// ─── DELETE AN ENTRY ─────────────────────────────────────────
function deleteEntry(): void {
    $entryId = (int)($_POST['entry_id'] ?? 0);
    $userId  = $_SESSION['user_id'];

    if (!$entryId) respond(false, 'Invalid entry');

    $pdo  = getDB();
    $stmt = $pdo->prepare('DELETE FROM diary_entries WHERE id = ? AND user_id = ?');
    $stmt->execute([$entryId, $userId]);

    respond(true, 'Entry deleted');
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
