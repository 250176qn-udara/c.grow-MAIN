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
    'get_targets'    => getTargets(),
    'create_target'  => createTarget(),
    'update_status'  => updateStatus(),
    'update_notes'   => updateNotes(),
    'delete_target'  => deleteTarget(),
    default          => respond(false, 'Invalid action')
};


// ─── GET ALL TARGETS (optionally filtered by status) ──────────
function getTargets(): void {
    $pdo    = getDB();
    $userId = $_SESSION['user_id'];
    $status = $_GET['status'] ?? '';

    if ($status && $status !== 'all') {
        $stmt = $pdo->prepare(
            'SELECT * FROM target_customers
             WHERE user_id = ? AND status = ?
             ORDER BY created_at DESC'
        );
        $stmt->execute([$userId, $status]);
    } else {
        $stmt = $pdo->prepare(
            'SELECT * FROM target_customers
             WHERE user_id = ?
             ORDER BY created_at DESC'
        );
        $stmt->execute([$userId]);
    }
    $targets = $stmt->fetchAll();

    // Quick counts per status, for the summary chips in the UI
    $stmt = $pdo->prepare(
        'SELECT status, COUNT(*) as count FROM target_customers
         WHERE user_id = ? GROUP BY status'
    );
    $stmt->execute([$userId]);
    $counts = [];
    foreach ($stmt->fetchAll() as $row) {
        $counts[$row['status']] = (int)$row['count'];
    }

    respond(true, 'OK', ['targets' => $targets, 'counts' => $counts]);
}


// ─── CREATE A NEW TARGET ───────────────────────────────────────
function createTarget(): void {
    $businessName = trim($_POST['business_name'] ?? '');
    $contactName  = trim($_POST['contact_name'] ?? '');
    $businessType = trim($_POST['business_type'] ?? '');
    $location     = trim($_POST['location'] ?? '');
    $contactInfo  = trim($_POST['contact_info'] ?? '');
    $notes        = trim($_POST['notes'] ?? '');

    if (!$businessName) {
        respond(false, 'Business name is required');
    }

    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare(
        'INSERT INTO target_customers
            (user_id, business_name, contact_name, business_type, location, contact_info, notes)
         VALUES (?, ?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([$userId, $businessName, $contactName, $businessType, $location, $contactInfo, $notes]);

    respond(true, 'Target added!', ['target_id' => $pdo->lastInsertId()]);
}


// ─── UPDATE STATUS (e.g. moved from "contacted" to "in_talks") ─
function updateStatus(): void {
    $targetId = (int)($_POST['target_id'] ?? 0);
    $status   = trim($_POST['status'] ?? '');
    $userId   = $_SESSION['user_id'];

    $validStatuses = ['not_contacted', 'contacted', 'in_talks', 'converted', 'not_interested'];
    if (!$targetId || !in_array($status, $validStatuses, true)) {
        respond(false, 'Invalid request');
    }

    $pdo  = getDB();
    $stmt = $pdo->prepare(
        'UPDATE target_customers SET status = ? WHERE id = ? AND user_id = ?'
    );
    $stmt->execute([$status, $targetId, $userId]);

    respond(true, 'Status updated');
}


// ─── UPDATE NOTES ───────────────────────────────────────────────
function updateNotes(): void {
    $targetId = (int)($_POST['target_id'] ?? 0);
    $notes    = trim($_POST['notes'] ?? '');
    $userId   = $_SESSION['user_id'];

    if (!$targetId) respond(false, 'Invalid target');

    $pdo  = getDB();
    $stmt = $pdo->prepare(
        'UPDATE target_customers SET notes = ? WHERE id = ? AND user_id = ?'
    );
    $stmt->execute([$notes, $targetId, $userId]);

    respond(true, 'Notes saved');
}


// ─── DELETE TARGET ──────────────────────────────────────────────
function deleteTarget(): void {
    $targetId = (int)($_POST['target_id'] ?? 0);
    $userId   = $_SESSION['user_id'];

    if (!$targetId) respond(false, 'Invalid target');

    $pdo  = getDB();
    $stmt = $pdo->prepare('DELETE FROM target_customers WHERE id = ? AND user_id = ?');
    $stmt->execute([$targetId, $userId]);

    respond(true, 'Target removed');
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
