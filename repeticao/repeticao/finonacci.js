function fibonacci() {

    let anterior = 0;
    let atual = 1;
    let resultado = "0\n1\n";

    for (let i = 2; i < 10; i++) {
        let proximo = anterior + atual;

        resultado += proximo + "\n";

        anterior = atual;
        atual = proximo;
    }

    alert(resultado);
}