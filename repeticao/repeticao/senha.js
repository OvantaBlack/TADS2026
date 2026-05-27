function senha() {

    let senha = window.prompt("Defina uma senha");

    let tentativa = window.prompt("Digite a senha");

    while (tentativa !== senha) {
        alert("Senha incorreta, tente novamente");
        tentativa = window.prompt("Digite a senha novamente");
    }

    alert("Acesso concedido!");
}