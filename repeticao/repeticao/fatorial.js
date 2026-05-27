function fatorial() {

    let n = Number(window.prompt("Digite um número inteiro"));

    if (isNaN(n) || n < 0) {
        alert("Digite um número válido!");
        return;
    }

    let resultado = 1;

    for (let i = n; i >= 1; i--) {
        resultado *= i;
    }

    alert(`Fatorial de ${n}: ${resultado}`);
}