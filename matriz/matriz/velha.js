function velha() {

    let matriz = [
        ["X", "X", "X"],
        ["O", "", "O"],
        ["", "", ""]
    ];

    let vencedor = false;

    for (let i = 0; i < matriz.length; i++) {

        if (
            matriz[i][0] === matriz[i][1] &&
            matriz[i][1] === matriz[i][2] &&
            matriz[i][0] !== ""
        ) {

            alert(
                `Jogador ${matriz[i][0]} venceu!`
            );

            vencedor = true;
        }
    }

    if (!vencedor) {
        alert("Ninguém venceu");
    }
}