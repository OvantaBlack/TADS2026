function transposta() {

    let matriz = [
        [1, 2, 3],
        [4, 5, 6]
    ];

    let novaMatriz = [];

    for (let j = 0; j < matriz[0].length; j++) {

        novaMatriz.push([]);

        for (let i = 0; i < matriz.length; i++) {

            novaMatriz[j].push(
                matriz[i][j]
            );
        }
    }

    alert(JSON.stringify(novaMatriz));
}