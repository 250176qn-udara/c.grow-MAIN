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
    'get_events'   => getEvents(),
    'create_event' => createEvent(),
    'toggle_done'  => toggleDone(),
    'delete_event' => deleteEvent(),
    default        => respond(false, 'Invalid action')
};


// ─── GET EVENTS FOR A GIVEN MONTH ──────────────────────────────
function getEvents(): void {
    $pdo       = getDB();
    $userId    = $_SESSION['user_id'];
    $monthYear = $_GET['month'] ?? date('Y-m'); // e.g. "2026-07"

    $stmt = $pdo->prepare(
        "SELECT id, title, event_date, event_time, notes, is_done
         FROM calendar_events
         WHERE user_id = ? AND DATE_FORMAT(event_date, '%Y-%m') = ?
         ORDER BY event_date ASC, event_time ASC"
    );
    $stmt->execute([$userId, $monthYear]);
    $events = $stmt->fetchAll();

    respond(true, 'OK', ['events' => $events]);
}


// ─── CREATE EVENT ───────────────────────────────────────────────
function createEvent(): void {
    $title     = trim($_POST['title'] ?? '');
    $eventDate = trim($_POST['event_date'] ?? '');
    $eventTime = trim($_POST['event_time'] ?? '');
    $notes     = trim($_POST['notes'] ?? '');

    if (!$title || !$eventDate) {
        respond(false, 'Title and date are required');
    }

    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare(
        'INSERT INTO calendar_events (user_id, title, event_date, event_time, notes)
         VALUES (?, ?, ?, ?, ?)'
    );
    $stmt->execute([$userId, $title, $eventDate, $eventTime ?: null, $notes]);

    respond(true, 'Event added!', ['event_id' => $pdo->lastInsertId()]);
}


// ─── TOGGLE DONE / NOT DONE ─────────────────────────────────────
function toggleDone(): void {
    $eventId = (int)($_POST['event_id'] ?? 0);
    $isDone  = (int)($_POST['is_done'] ?? 1);
    $userId  = $_SESSION['user_id'];

    if (!$eventId) respond(false, 'Invalid event');

    $pdo  = getDB();
    $stmt = $pdo->prepare('UPDATE calendar_events SET is_done = ? WHERE id = ? AND user_id = ?');
    $stmt->execute([$isDone, $eventId, $userId]);

    respond(true, 'Updated');
}


// ─── DELETE EVENT ────────────────────────────────────────────────
function deleteEvent(): void {
    $eventId = (int)($_POST['event_id'] ?? 0);
    $userId  = $_SESSION['user_id'];

    if (!$eventId) respond(false, 'Invalid event');

    $pdo  = getDB();
    $stmt = $pdo->prepare('DELETE FROM calendar_events WHERE id = ? AND user_id = ?');
    $stmt->execute([$eventId, $userId]);

    respond(true, 'Event deleted');
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
