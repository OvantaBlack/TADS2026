function maiorTabela() {

    let matriz = [
        [5, 12, 7, 9],
        [20, 3, 15, 8],
        [11, 25, 6, 2],
        [14, 18, 30, 10]
    ];

    let maior = matriz[0][0];

    for (let i = 0; i < matriz.length; i++) {

        for (let j = 0; j < matriz[i].length; j++) {

            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
            }
        }
    }

    alert(`O maior número é: ${maior}`);
}