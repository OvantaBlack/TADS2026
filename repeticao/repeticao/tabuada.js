function tabuada() {

    let n = Number(window.prompt("Digite um número"));

    if (isNaN(n)) {
        alert("Digite apenas números!");
        return;
    }

    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += `${n} x ${i} = ${n * i}\n`;
    }

    alert(resultado);
}