function cinema() {

    let matriz = [];

    for (let i = 0; i < 5; i++) {

        matriz.push([]);

        for (let j = 0; j < 5; j++) {
            matriz[i].push("Livre");
        }
    }

    while (true) {

        let linha = Number(
            window.prompt(
                "Digite a linha (-1 para sair)"
            )
        );

        let coluna = Number(
            window.prompt(
                "Digite a coluna (-1 para sair)"
            )
        );

        if (linha < 0 || coluna < 0) {
            break;
        }

        if (matriz[linha][coluna] === "Livre") {

            matriz[linha][coluna] = "Ocupada";

            alert("Reserva feita!");
        } else {
            alert("Poltrona ocupada!");
        }
    }

    alert(JSON.stringify(matriz));
}