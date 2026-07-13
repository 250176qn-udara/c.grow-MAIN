<?php

require_once 'db.php';

header('Content-Type: application/json');
session_start();

$action = $_POST['action'] ?? '';

match($action) {
    'register' => handleRegister(),
    'login'    => handleLogin(),
    'logout'   => handleLogout(),
    default    => respond(false, 'Invalid action')
};


// ─── REGISTER ────────────────────────────────────────────────
function handleRegister(): void {
    $owner_name    = trim($_POST['owner_name'] ?? '');
    $email         = trim($_POST['email'] ?? '');
    $password      = $_POST['password'] ?? '';
    $business_type = trim($_POST['business_type'] ?? '');
    $location      = trim($_POST['location'] ?? '');
    $language      = trim($_POST['language'] ?? 'en');

    // Validation
    if (!$owner_name || !$email || !$password || !$business_type || !$location) {
        respond(false, 'All fields are required');
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        respond(false, 'Invalid email address');
    }

    if (strlen($password) < 6) {
        respond(false, 'Password must be at least 6 characters');
    }

    $pdo = getDB();

    // Check if email already exists
    $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ?');
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        respond(false, 'Email is already registered');
    }

    // Save new user
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare(
        'INSERT INTO users (email, password_hash, owner_name, business_type, location)
         VALUES (?, ?, ?, ?, ?)'
    );
    $stmt->execute([$email, $hash, $owner_name, $business_type, $location]);

    $userId = $pdo->lastInsertId();

    // Start session
    $_SESSION['user_id']       = $userId;
    $_SESSION['user_name']     = $owner_name;
    $_SESSION['user_email']    = $email;
    $_SESSION['business_type'] = $business_type;
    $_SESSION['location']      = $location;
    $_SESSION['language']      = $language;

    respond(true, 'Account created!', [
        'user' => [
            'id'            => $userId,
            'owner_name'    => $owner_name,
            'email'         => $email,
            'business_type' => $business_type,
            'location'      => $location
        ]
    ]);
}


// ─── LOGIN ───────────────────────────────────────────────────
function handleLogin(): void {
    $email    = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $language = trim($_POST['language'] ?? 'en');

    if (!$email || !$password) {
        respond(false, 'Email and password are required');
    }

    $pdo = getDB();

    $stmt = $pdo->prepare(
        'SELECT id, owner_name, email, password_hash, business_type, location
         FROM users WHERE email = ?'
    );
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    // Verify password
    if (!$user || !password_verify($password, $user['password_hash'])) {
        respond(false, 'Invalid email or password');
    }

    // Start session
    $_SESSION['user_id']       = $user['id'];
    $_SESSION['user_name']     = $user['owner_name'];
    $_SESSION['user_email']    = $user['email'];
    $_SESSION['business_type'] = $user['business_type'];
    $_SESSION['location']      = $user['location'];
    $_SESSION['language']      = $language;

    respond(true, 'Login successful', [
        'user' => [
            'id'            => $user['id'],
            'owner_name'    => $user['owner_name'],
            'email'         => $user['email'],
            'business_type' => $user['business_type'],
            'location'      => $user['location']
        ]
    ]);
}


// ─── LOGOUT ──────────────────────────────────────────────────
function handleLogout(): void {
    session_destroy();
    respond(true, 'Logged out');
}


// ─── HELPER ──────────────────────────────────────────────────
function respond(bool $success, string $message, array $data = []): never {
    echo json_encode(['success' => $success, 'message' => $message, ...$data]);
    exit;
}