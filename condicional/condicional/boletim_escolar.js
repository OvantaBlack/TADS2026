function boletim() {
     let n1 = Number(window.prompt("Insira sua primeira nota"));
        if (isNaN(n1)) {
            alert("Informe um número válido!");
        } else {
        let n2 = Number(window.prompt("Insira sua segunda nota"));
        if (isNaN(n2)) {
            alert("Informe um número válido!");
        } else {
        let nt = (n1 + n2) / 2;

        if (nt >= 7) {
            alert("Você foi aprovado");
        } else if (nt >= 5) {
            alert("Você está em recuperação");
        } else {
            alert("Você foi reprovado");
        }
        }
    }
}