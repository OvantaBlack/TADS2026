function escalar() {

    let matriz = [
        [1, 2],
        [3, 4]
    ];

    let multiplicador = Number(
        window.prompt("Digite o multiplicador")
    );

    if (isNaN(multiplicador)) {
        alert("Digite apenas números!");
        return;
    }

    let novaMatriz = [];

    for (let i = 0; i < matriz.length; i++) {

        novaMatriz.push([]);

        for (let j = 0; j < matriz[i].length; j++) {

            novaMatriz[i].push(
                matriz[i][j] * multiplicador
            );
        }
    }

    alert(JSON.stringify(novaMatriz));
}