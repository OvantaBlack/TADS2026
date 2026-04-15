function dirigir() {
     let an = Number(window.prompt("Qual seu ano de nascimento?"));
        let at = Number(window.prompt("Qual o ano atual?"));
        let id = (at - an);
        if (id < 0) {
            alert("Idade inválida");
        } else if (id < 18) {
            alert("Menor de idade");
        } else {
            alert("Maior de idade e apto a tirar a Carteira Nacional de Habilitação (CNH)");
        }
}