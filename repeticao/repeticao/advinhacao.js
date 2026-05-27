function adivinhacao() {

    let numero =
        Math.floor(Math.random() * 10) + 1;

    let tentativa;

    while (tentativa !== numero) {

        tentativa = Number(
            window.prompt(
                "Adivinhe um número entre 1 e 10"
            )
        );

        if (tentativa !== numero) {
            alert("Errou! Tente novamente.");
        }
    }

    alert("Parabéns! Você acertou!");
}