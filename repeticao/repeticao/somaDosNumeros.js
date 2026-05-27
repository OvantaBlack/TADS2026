function somaNumeros() {

    let n = Number(window.prompt("Digite um número positivo"));

    if (isNaN(n) || n < 1) {
        alert("Digite um número válido!");
        return;
    }

    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma += i;
    }

    alert(`A soma é: ${soma}`);
}