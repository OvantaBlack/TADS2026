function identidade() {

    let n = Number(
        window.prompt("Digite o tamanho da matriz")
    );

    if (isNaN(n) || n <= 0) {
        alert("Digite um número válido!");
        return;
    }

    let matriz = [];

    for (let i = 0; i < n; i++) {

        matriz.push([]);

        for (let j = 0; j < n; j++) {

            if (i === j) {
                matriz[i].push(1);
            } else {
                matriz[i].push(0);
            }
        }
    }

    alert(JSON.stringify(matriz));
}