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
    'get_articles' => getArticles(),
    'get_article'  => getArticle(),
    default        => respond(false, 'Invalid action')
};


// ─── GET ALL ARTICLES (list view) ────────────────────────────
function getArticles(): void {
    $pdo      = getDB();
    $category = $_GET['category'] ?? '';

    if ($category && $category !== 'All') {
        $stmt = $pdo->prepare(
            'SELECT id, category, title, summary, emoji
             FROM knowledge_articles
             WHERE category = ?
             ORDER BY sort_order ASC'
        );
        $stmt->execute([$category]);
    } else {
        $stmt = $pdo->query(
            'SELECT id, category, title, summary, emoji
             FROM knowledge_articles
             ORDER BY sort_order ASC'
        );
    }

    $articles = $stmt->fetchAll();
    $cats = $pdo->query('SELECT DISTINCT category FROM knowledge_articles ORDER BY category')->fetchAll(PDO::FETCH_COLUMN);

    respond(true, 'OK', ['articles' => $articles, 'categories' => $cats]);
}


// ─── GET SINGLE ARTICLE (full body) ──────────────────────────
function getArticle(): void {
    $id  = (int)($_GET['id'] ?? 0);
    $pdo = getDB();

    $stmt = $pdo->prepare('SELECT * FROM knowledge_articles WHERE id = ?');
    $stmt->execute([$id]);
    $article = $stmt->fetch();

    if (!$article) respond(false, 'Article not found');

    respond(true, 'OK', ['article' => $article]);
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}
