<?php

require_once 'db.php';

header('Content-Type: application/json');
session_start();

// Check login
if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    die(json_encode(['success' => false, 'message' => 'Not logged in']));
}

$action = $_POST['action'] ?? $_GET['action'] ?? '';

match($action) {
    'get_tasks'     => getTasks(),
    'toggle_task'   => toggleTask(),
    default         => respond(false, 'Invalid action')
};


// ─── GET TASKS + USER PROGRESS ───────────────────────────────
function getTasks(): void {
    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    // Get all tasks with this user's completion status
    $stmt = $pdo->prepare(
        'SELECT 
            ct.id,
            ct.task_name,
            ct.description,
            COALESCE(ucp.is_completed, 0) AS is_completed
         FROM checklist_tasks ct
         LEFT JOIN user_checklist_progress ucp
            ON ct.id = ucp.task_id AND ucp.user_id = ?
         ORDER BY ct.id ASC'
    );
    $stmt->execute([$userId]);
    $tasks = $stmt->fetchAll();

    $total     = count($tasks);
    $completed = count(array_filter($tasks, fn($t) => $t['is_completed']));

    respond(true, 'OK', [
        'tasks'     => $tasks,
        'total'     => $total,
        'completed' => $completed
    ]);
}


// ─── TOGGLE TASK COMPLETE / INCOMPLETE ───────────────────────
function toggleTask(): void {
    $taskId      = (int)($_POST['task_id'] ?? 0);
    $isCompleted = (int)($_POST['is_completed'] ?? 0); // 1 or 0

    if (!$taskId) {
        respond(false, 'Invalid task');
    }

    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    // Insert or update progress row
    $stmt = $pdo->prepare(
        'INSERT INTO user_checklist_progress (user_id, task_id, is_completed)
         VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE is_completed = ?, updated_at = NOW()'
    );
    $stmt->execute([$userId, $taskId, $isCompleted, $isCompleted]);

    // Return updated totals
    $stmt = $pdo->prepare(
        'SELECT COUNT(*) as completed
         FROM user_checklist_progress
         WHERE user_id = ? AND is_completed = 1'
    );
    $stmt->execute([$userId]);
    $row = $stmt->fetch();

    $stmt2 = $pdo->query('SELECT COUNT(*) as total FROM checklist_tasks');
    $total = $stmt2->fetch()['total'];

    respond(true, 'Progress saved', [
        'completed' => (int)$row['completed'],
        'total'     => (int)$total
    ]);
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
