<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Conecte ao banco de dados SQLite
    $db = new SQLite3('users.db');

    // Verifique se o email já está em uso
    $check_query = $db->prepare("SELECT * FROM usuarios WHERE email = :email");
    $check_query->bindValue(':email', $email, SQLITE3_TEXT);
    $check_result = $check_query->execute();

    if ($check_result->fetchArray()) {
        echo "O e-mail já está em uso. Escolha outro.";
    } else {
        // Insira o novo usuário no banco de dados
        $insert_query = $db->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha)");
        $insert_query->bindValue(':nome', $nome, SQLITE3_TEXT);
        $insert_query->bindValue(':email', $email, SQLITE3_TEXT);
        $insert_query->bindValue(':senha', $senha, SQLITE3_TEXT);

        if ($insert_query->execute()) {
            echo "Registro bem-sucedido! Faça o login agora.";
        } else {
            echo "Falha no registro. Tente novamente.";
        }
    }
}
?>