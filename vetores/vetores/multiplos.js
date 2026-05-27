function multiplos() {

    let multiplos = [];

    let n = Number(window.prompt("Informe um número inteiro"));
    if (isNaN(n)) {
        alert("Informe apenas números!");
    }

    let q = Number(window.prompt("Informe a quantidades de múltiplos desejada"));
    if (isNaN(q)) {
        alert("Informe apenas números!");
    }

    for (let i = 0; i < q; i++) {
        let multiplo = n * (i + 1);
        multiplos.push(multiplo);
    }

    alert(multiplos);
}