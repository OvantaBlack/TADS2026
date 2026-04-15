function caixa() {
     let p = Number(window.prompt("Informe o preço do produto"));
        if (isNaN(p)) {
            alert("Valor Inválido");
        } else {
            let cond = Number(window.prompt("Informe a condição de pagamento: 1- À vista no pix ou cartão; 2- À vista no cartão de Crédito, 3- 2x no cartão, 4- 3x ou mais no cartão"));
            let resultado
            if (isNaN(cond)) {
                alert("Valor Inválido");
            } else {
                switch (cond){
                    case 1:
                        resultado = (p * 0.9);
                        break;
                    case 2:
                        resultado = (p * 0.95);
                        break;
                    case 3:
                        resultado = (p);
                        break;
                    case 4:
                        resultado = (p * 1.1);
                        break;

                    default:
                        alert("Opção inválida!");
                } if (resultado !== undefined) {
                  alert(`O preço final será de: R$ ${resultado.toFixed(2)}`);
            }
         }
    }
}