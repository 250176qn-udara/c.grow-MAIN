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
    'get_ideas'    => getIdeas(),
    'save_idea'    => saveIdea(),
    'mark_tried'   => markTried(),
    'unsave_idea'  => unsaveIdea(),
    default        => respond(false, 'Invalid action')
};


// ─── GET ALL IDEAS + USER SAVED STATUS ───────────────────────
function getIdeas(): void {
    $pdo      = getDB();
    $userId   = $_SESSION['user_id'];
    $category = $_GET['category'] ?? '';

    $where = $category && $category !== 'All' ? 'WHERE p.category = ?' : '';
    $params = $category && $category !== 'All' ? [$userId, $userId, $category] : [$userId, $userId];

    $stmt = $pdo->prepare(
        "SELECT
            p.id, p.category, p.title, p.description, p.difficulty, p.emoji,
            COALESCE(usp.id, 0) as is_saved,
            COALESCE(usp.tried, 0) as tried
         FROM promotion_ideas p
         LEFT JOIN user_saved_promotions usp
            ON p.id = usp.promotion_id AND usp.user_id = ?
         $where
         ORDER BY p.category, p.id"
    );

    if ($category && $category !== 'All') {
        $stmt->execute([$userId, $category]);
    } else {
        $stmt->execute([$userId]);
    }

    $ideas = $stmt->fetchAll();

    // Get categories
    $cats = $pdo->query(
        'SELECT DISTINCT category FROM promotion_ideas ORDER BY category'
    )->fetchAll(PDO::FETCH_COLUMN);

    // Count saved + tried
    $stmt = $pdo->prepare(
        'SELECT COUNT(*) as saved, SUM(tried) as tried
         FROM user_saved_promotions WHERE user_id = ?'
    );
    $stmt->execute([$userId]);
    $counts = $stmt->fetch();

    respond(true, 'OK', [
        'ideas'      => $ideas,
        'categories' => $cats,
        'saved'      => (int)$counts['saved'],
        'tried'      => (int)$counts['tried'],
    ]);
}


// ─── SAVE AN IDEA ────────────────────────────────────────────
function saveIdea(): void {
    $ideaId = (int)($_POST['idea_id'] ?? 0);
    $userId = $_SESSION['user_id'];
    if (!$ideaId) respond(false, 'Invalid idea');

    $pdo  = getDB();
    $stmt = $pdo->prepare(
        'INSERT IGNORE INTO user_saved_promotions (user_id, promotion_id)
         VALUES (?, ?)'
    );
    $stmt->execute([$userId, $ideaId]);

    respond(true, 'Saved!');
}


// ─── MARK AS TRIED ───────────────────────────────────────────
function markTried(): void {
    $ideaId = (int)($_POST['idea_id'] ?? 0);
    $tried  = (int)($_POST['tried'] ?? 1);
    $userId = $_SESSION['user_id'];
    if (!$ideaId) respond(false, 'Invalid idea');

    $pdo  = getDB();

    // Upsert — save and mark tried in one step
    $stmt = $pdo->prepare(
        'INSERT INTO user_saved_promotions (user_id, promotion_id, tried)
         VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE tried = ?'
    );
    $stmt->execute([$userId, $ideaId, $tried, $tried]);

    respond(true, $tried ? 'Marked as tried! 🎉' : 'Unmarked');
}


// ─── UNSAVE AN IDEA ──────────────────────────────────────────
function unsaveIdea(): void {
    $ideaId = (int)($_POST['idea_id'] ?? 0);
    $userId = $_SESSION['user_id'];
    if (!$ideaId) respond(false, 'Invalid idea');

    $pdo  = getDB();
    $stmt = $pdo->prepare(
        'DELETE FROM user_saved_promotions WHERE user_id = ? AND promotion_id = ?'
    );
    $stmt->execute([$userId, $ideaId]);

    respond(true, 'Removed');
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
