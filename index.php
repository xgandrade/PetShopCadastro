<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pet Shop I have a dream</title>
	<link rel="shortcut icon" type="imagex/png" href="./assets/icon/dog.ico">
    <link rel="stylesheet" href="./assets/css/login/login.css">
    <link rel="stylesheet" href="./assets/css/base/base.css">
</head>
<div class="login">
	<h1>Login</h1>
    <br>
    <form action="./formulario.html" method="post">
    	<input type="text" name="u" placeholder="nome" required/>
        <input type="password" name="p" placeholder="senha" required/>
        <button type="submit" onclick="afterLogin()" class="btn btn-primary btn-block btn-large">Let me in.</button>
    </form>
    <script src="./js/forms.js" type="module"></script>
    <script src="./js/app.js" type="module"></script>
</div>