 function salarioDev() {
 let ht = Number(window.prompt("Informe o número de horas trabalhadas no mês"));
            if (isNaN(ht)) {
                alert("Valor inválido");
            } else {
                let vht = Number(window.prompt("Informe o valor recebido por hora trabalhada"));
                if (isNaN(vht)) {
                    alert("Valor inválido");
                } else {
                let sb = (vht * ht);
                let d = (sb * 0.08);
                let sl = (sb - d);
                window.alert(`Salário bruto: R$${sb.toFixed(2)}
                Impostos: R$${d.toFixed(2)}
                Salário Líquido: R$${sl.toFixed(2)}`);
                }
            }
        }