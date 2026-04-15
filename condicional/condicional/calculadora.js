function calculadora() {
    let n1 = Number(window.prompt("Informe um número"));
        if (isNaN(n1)) {
            alert("Número inválido");
        } else {
            let n2 = Number(window.prompt("Informe outro número"));
            if (isNaN(n2)) {
                alert("Número inválido");
            } else {
                let op = window.prompt("Informe a operação(+, -, *, /)");

                switch (op) {
                    case "+":
                        let soma = (n1 + n2);
                        alert(`o resultado é: ${soma}`);
                        break;
                    case "-":
                        let sub = (n1 - n2);
                        alert(`o resultado é: ${sub}`);
                        break;
                    case "*":
                        let mult = (n1 * n2);
                        alert(`o resultado é: ${mult}`);
                        break;
                    case "/":
                        if (n2 === 0) {
                            alert("Impossível dividir por zero!");
                        } else {
                            let div = (n1 / n2);
                            alert(`o resultado é: ${div}`);
                        } break;

                        default:
                            alert("Operação inválida!");
                        
                }
        }
    }
}