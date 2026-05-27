function somaMatriz() {

    let matriz = [
        [1, 5, 2],
        [8, 4, 3],
        [7, 6, 9]
    ];

    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {

        for (let j = 0; j < matriz[i].length; j++) {

            soma += matriz[i][j];
        }
    }

    alert(`Soma total: ${soma}`);
}