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
    'get_goals'      => getGoals(),
    'create_goal'    => createGoal(),
    'update_progress'=> updateProgress(),
    'delete_goal'    => deleteGoal(),
    default          => respond(false, 'Invalid action')
};


// ─── GET ALL GOALS ────────────────────────────────────────────
function getGoals(): void {
    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    // Auto-expire passed deadlines
    $pdo->prepare(
        "UPDATE goals SET status='expired'
         WHERE user_id = ? AND deadline < CURDATE() AND status = 'active'"
    )->execute([$userId]);

    // Auto-complete reached targets
    $pdo->prepare(
        "UPDATE goals SET status='completed'
         WHERE user_id = ? AND current_value >= target_value AND status = 'active'"
    )->execute([$userId]);

    $stmt = $pdo->prepare(
        'SELECT * FROM goals WHERE user_id = ?
         ORDER BY FIELD(status,"active","completed","expired"), deadline ASC'
    );
    $stmt->execute([$userId]);
    $goals = $stmt->fetchAll();

    foreach ($goals as &$g) {
        $g['pct']       = $g['target_value'] > 0
            ? min(100, round(($g['current_value'] / $g['target_value']) * 100))
            : 0;
        $g['days_left'] = max(0, (strtotime($g['deadline']) - time()) / 86400);
        $g['days_left'] = (int)ceil($g['days_left']);
    }

    respond(true, 'OK', ['goals' => $goals]);
}


// ─── CREATE GOAL ──────────────────────────────────────────────
function createGoal(): void {
    $title    = trim($_POST['goal_title'] ?? '');
    $target   = (float)($_POST['target_value'] ?? 0);
    $unit     = trim($_POST['unit'] ?? '');
    $deadline = trim($_POST['deadline'] ?? '');

    if (!$title || !$target || !$unit || !$deadline) {
        respond(false, 'Please fill in all fields');
    }

    if (strtotime($deadline) <= time()) {
        respond(false, 'Deadline must be in the future');
    }

    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare(
        'INSERT INTO goals (user_id, goal_title, target_value, unit, deadline)
         VALUES (?, ?, ?, ?, ?)'
    );
    $stmt->execute([$userId, $title, $target, $unit, $deadline]);

    respond(true, 'Goal created!', ['goal_id' => $pdo->lastInsertId()]);
}


// ─── UPDATE PROGRESS ─────────────────────────────────────────
function updateProgress(): void {
    $goalId  = (int)($_POST['goal_id'] ?? 0);
    $current = (float)($_POST['current_value'] ?? 0);
    $userId  = $_SESSION['user_id'];

    if (!$goalId) respond(false, 'Invalid goal');

    $pdo  = getDB();
    $stmt = $pdo->prepare(
        'UPDATE goals SET current_value = ?
         WHERE id = ? AND user_id = ?'
    );
    $stmt->execute([$current, $goalId, $userId]);

    respond(true, 'Progress updated!');
}


// ─── DELETE GOAL ──────────────────────────────────────────────
function deleteGoal(): void {
    $goalId = (int)($_POST['goal_id'] ?? 0);
    $userId = $_SESSION['user_id'];

    if (!$goalId) respond(false, 'Invalid goal');

    $pdo  = getDB();
    $stmt = $pdo->prepare('DELETE FROM goals WHERE id = ? AND user_id = ?');
    $stmt->execute([$goalId, $userId]);

    respond(true, 'Goal deleted');
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
