<?php

require_once 'db.php';

header('Content-Type: application/json');
session_start();

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    die(json_encode(['success' => false, 'message' => 'Not logged in']));
}

$userId    = $_SESSION['user_id'];
$monthYear = $_GET['month'] ?? date('Y-m');
$pdo       = getDB();

// Parse month
[$year, $month] = explode('-', $monthYear);
$startDate = "{$year}-{$month}-01";
$endDate   = date('Y-m-t', strtotime($startDate)); // last day of month

// ── 1. Checklist completion rate ──────────────────────────────
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

// ── 2. Posts generated this month ────────────────────────────
$stmt = $pdo->prepare(
    'SELECT COUNT(*) as count FROM generated_posts
     WHERE user_id = ? AND created_at BETWEEN ? AND ?'
);
$stmt->execute([$userId, $startDate, $endDate . ' 23:59:59']);
$postsGenerated = $stmt->fetch()['count'];

// ── 3. Community posts this month ────────────────────────────
$stmt = $pdo->prepare(
    'SELECT COUNT(*) as count FROM community_posts
     WHERE user_id = ? AND created_at BETWEEN ? AND ?'
);
$stmt->execute([$userId, $startDate, $endDate . ' 23:59:59']);
$communityPosts = $stmt->fetch()['count'];

// ── 4. Goals summary ─────────────────────────────────────────
$stmt = $pdo->prepare(
    'SELECT
        COUNT(*) as total,
        SUM(status = "completed") as completed,
        SUM(status = "active") as active,
        SUM(status = "expired") as expired
     FROM goals WHERE user_id = ?'
);
$stmt->execute([$userId]);
$goals = $stmt->fetch();

// ── 5. AI Advisor messages this month ────────────────────────
$stmt = $pdo->prepare(
    'SELECT COUNT(*) as count FROM advisor_messages
     WHERE user_id = ? AND sender = "user"
     AND created_at BETWEEN ? AND ?'
);
$stmt->execute([$userId, $startDate, $endDate . ' 23:59:59']);
$advisorMessages = $stmt->fetch()['count'];

// ── 6. Budget spent this month ───────────────────────────────
$stmt = $pdo->prepare(
    'SELECT COALESCE(SUM(amount), 0) as spent,
            MAX(monthly_budget) as budget
     FROM budget_entries
     WHERE user_id = ? AND month_year = ?'
);
$stmt->execute([$userId, $monthYear]);
$budget = $stmt->fetch();

// ── 7. Active goals with progress ────────────────────────────
$stmt = $pdo->prepare(
    'SELECT goal_title, current_value, target_value, unit,
            ROUND((current_value/target_value)*100) as pct
     FROM goals
     WHERE user_id = ? AND status = "active"
     ORDER BY pct DESC LIMIT 3'
);
$stmt->execute([$userId]);
$activeGoals = $stmt->fetchAll();

// ── 8. Overall score (0-100) ──────────────────────────────────
// Weighted: checklist 40%, posts generated 20%, community 20%, advisor 20%
$postScore     = min(100, $postsGenerated * 20);  // 5 posts = 100
$communityScore = min(100, $communityPosts * 25); // 4 posts = 100
$advisorScore  = min(100, $advisorMessages * 10); // 10 messages = 100
$overallScore  = round(($checklistPct * 0.4) + ($postScore * 0.2) + ($communityScore * 0.2) + ($advisorScore * 0.2));

// Grade
$grade = match(true) {
    $overallScore >= 90 => ['label' => 'S', 'color' => '#f3b15e', 'msg' => 'Outstanding! You are a marketing pro.'],
    $overallScore >= 75 => ['label' => 'A', 'color' => '#34c98e', 'msg' => 'Excellent work! Keep up the momentum.'],
    $overallScore >= 60 => ['label' => 'B', 'color' => '#6fa8f5', 'msg' => 'Good progress. A little more consistency will get you to A.'],
    $overallScore >= 40 => ['label' => 'C', 'color' => '#b39ce8', 'msg' => 'Getting started. Try to use the tools more regularly.'],
    default             => ['label' => 'D', 'color' => '#f88c8c', 'msg' => 'Just getting started — every small step counts!'],
};

echo json_encode([
    'success'         => true,
    'month'           => date('F Y', strtotime($startDate)),
    'checklist_pct'   => $checklistPct,
    'posts_generated' => (int)$postsGenerated,
    'community_posts' => (int)$communityPosts,
    'advisor_messages'=> (int)$advisorMessages,
    'goals'           => $goals,
    'active_goals'    => $activeGoals,
    'budget_spent'    => (float)$budget['spent'],
    'budget_limit'    => (float)$budget['budget'],
    'overall_score'   => $overallScore,
    'grade'           => $grade,
]);
