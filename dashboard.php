<?php

require_once 'db.php';

header('Content-Type: application/json');
session_start();

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    die(json_encode(['success' => false, 'message' => 'Not logged in']));
}

$userId = $_SESSION['user_id'];
$pdo    = getDB();

// ── 1. User info ──────────────────────────────────────────────
$stmt = $pdo->prepare('SELECT owner_name, business_type, location FROM users WHERE id = ?');
$stmt->execute([$userId]);
$user = $stmt->fetch();

// ── 2. Checklist progress (today) ────────────────────────────
$stmt = $pdo->prepare(
    'SELECT
        COUNT(*) as total,
        SUM(is_completed) as completed
     FROM user_checklist_progress
     WHERE user_id = ?'
);
$stmt->execute([$userId]);
$checklist = $stmt->fetch();
$checklistPct = $checklist['total'] > 0
    ? round(($checklist['completed'] / $checklist['total']) * 100)
    : 0;

// ── 3. Active goals ───────────────────────────────────────────
// Auto-expire passed deadlines first
$pdo->prepare(
    "UPDATE goals SET status='expired'
     WHERE user_id = ? AND deadline < CURDATE() AND status = 'active'"
)->execute([$userId]);

$pdo->prepare(
    "UPDATE goals SET status='completed'
     WHERE user_id = ? AND current_value >= target_value AND status = 'active'"
)->execute([$userId]);

$stmt = $pdo->prepare(
    'SELECT id, goal_title, current_value, target_value, unit, deadline,
            ROUND((current_value / target_value) * 100) as pct,
            DATEDIFF(deadline, CURDATE()) as days_left
     FROM goals
     WHERE user_id = ? AND status = "active"
     ORDER BY deadline ASC
     LIMIT 3'
);
$stmt->execute([$userId]);
$goals = $stmt->fetchAll();

// ── 4. Quick stats ────────────────────────────────────────────
$thisMonth  = date('Y-m-01');
$monthEnd   = date('Y-m-t');

$stmt = $pdo->prepare('SELECT COUNT(*) FROM generated_posts WHERE user_id = ? AND created_at >= ?');
$stmt->execute([$userId, $thisMonth]);
$postsThisMonth = $stmt->fetchColumn();

$stmt = $pdo->prepare('SELECT COUNT(*) FROM community_posts WHERE user_id = ? AND created_at >= ?');
$stmt->execute([$userId, $thisMonth]);
$communityThisMonth = $stmt->fetchColumn();

$stmt = $pdo->prepare('SELECT COUNT(*) FROM goals WHERE user_id = ? AND status = "completed"');
$stmt->execute([$userId]);
$goalsCompleted = $stmt->fetchColumn();

// ── 5. Greeting based on time ─────────────────────────────────
$hour = (int)date('H');
$greeting = match(true) {
    $hour < 12 => 'Good morning',
    $hour < 17 => 'Good afternoon',
    default    => 'Good evening',
};

echo json_encode([
    'success'            => true,
    'greeting'           => $greeting,
    'user'               => $user,
    'checklist_pct'      => $checklistPct,
    'checklist_done'     => (int)$checklist['completed'],
    'checklist_total'    => (int)$checklist['total'],
    'goals'              => $goals,
    'posts_this_month'   => (int)$postsThisMonth,
    'community_this_month' => (int)$communityThisMonth,
    'goals_completed'    => (int)$goalsCompleted,
]);
