<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Conecte ao banco de dados SQLite
    $db = new SQLite3('users.db');

    // Consulta para verificar o login
    $query = $db->prepare("SELECT * FROM usuarios WHERE email = :email AND senha = :senha");
    $query->bindValue(':email', $email, SQLITE3_TEXT);
    $query->bindValue(':senha', $senha, SQLITE3_TEXT);

    $result = $query->execute();

    if ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        // O usuário está autenticado
        echo "Login bem-sucedido! Bem-vindo, " . $row['nome'];
    } else {
        echo "Login falhou. Verifique suas credenciais.";
    }
}
?>