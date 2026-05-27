function caixa() {

    let total = 0;
    let preco;

    while (true) {

        preco = Number(window.prompt(
            "Digite o preço do produto (0 para finalizar)"
        ));

        if (isNaN(preco)) {
            alert("Digite apenas números!");
            continue;
        }

        if (preco === 0) {
            break;
        }

        total += preco;
    }

    alert(`Total da compra: R$ ${total}`);
}