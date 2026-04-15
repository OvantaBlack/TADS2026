function media() {
let nome = prompt("Informe seu nome");
    alert(`Olá, seja bem-vindo! ${nome}`);

    let n1 = Number(prompt("Informe sua primeira nota"));

    if (isNaN(n1)) {
        alert("Primeira nota inválida!");
    } else {

        let n2 = Number(prompt("Informe sua segunda nota"));

        if (isNaN(n2)) {
            alert("Segunda nota inválida!");
        } else {

            let n3 = Number(prompt("Informe sua terceira nota"));

            if (isNaN(n3)) {
                alert("Terceira nota inválida!");
            } else {

                let media = (n1 + n2 + n3) / 3;

                alert(`Aluno: ${nome}\nMédia: ${media}`);

            }
        }
    }
}