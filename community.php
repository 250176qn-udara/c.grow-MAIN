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
    'get_posts'  => getPosts(),
    'create_post' => createPost(),
    'like_post'  => likePost(),
    default      => respond(false, 'Invalid action')
};


// ─── GET POSTS ────────────────────────────────────────────────
function getPosts(): void {
    $pdo = getDB();

    $stmt = $pdo->query(
        'SELECT 
            cp.id,
            cp.content,
            cp.likes_count,
            cp.replies_count,
            cp.created_at,
            u.owner_name,
            u.business_type,
            u.location
         FROM community_posts cp
         JOIN users u ON cp.user_id = u.id
         ORDER BY cp.created_at DESC
         LIMIT 20'
    );

    $posts = $stmt->fetchAll();

    // Format time ago
    foreach ($posts as &$post) {
        $post['time_ago'] = timeAgo($post['created_at']);
        // Initials from owner_name
        $words = explode(' ', $post['owner_name']);
        $post['initials'] = strtoupper(substr($words[0], 0, 1) . (isset($words[1]) ? substr($words[1], 0, 1) : ''));
    }

    respond(true, 'OK', ['posts' => $posts]);
}


// ─── CREATE POST ──────────────────────────────────────────────
function createPost(): void {
    $content = trim($_POST['content'] ?? '');

    if (!$content) {
        respond(false, 'Post content cannot be empty');
    }

    if (strlen($content) > 1000) {
        respond(false, 'Post is too long (max 1000 characters)');
    }

    $pdo    = getDB();
    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare(
        'INSERT INTO community_posts (user_id, content) VALUES (?, ?)'
    );
    $stmt->execute([$userId, $content]);

    $newId = $pdo->lastInsertId();

    respond(true, 'Post shared!', ['post_id' => $newId]);
}


// ─── LIKE POST ────────────────────────────────────────────────
function likePost(): void {
    $postId = (int)($_POST['post_id'] ?? 0);

    if (!$postId) {
        respond(false, 'Invalid post');
    }

    $pdo = getDB();

    $stmt = $pdo->prepare(
        'UPDATE community_posts SET likes_count = likes_count + 1 WHERE id = ?'
    );
    $stmt->execute([$postId]);

    // Return updated count
    $stmt = $pdo->prepare('SELECT likes_count FROM community_posts WHERE id = ?');
    $stmt->execute([$postId]);
    $row = $stmt->fetch();

    respond(true, 'Liked!', ['likes_count' => $row['likes_count']]);
}


// ─── HELPERS ─────────────────────────────────────────────────
function timeAgo(string $datetime): string {
    $diff = time() - strtotime($datetime);

    if ($diff < 60)     return 'Just now';
    if ($diff < 3600)   return floor($diff / 60) . ' min ago';
    if ($diff < 86400)  return floor($diff / 3600) . ' hours ago';
    if ($diff < 604800) return floor($diff / 86400) . ' days ago';

    return date('M j', strtotime($datetime));
}

function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
