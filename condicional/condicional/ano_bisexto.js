function ano() {
      let ano = Number(window.prompt("Informe um ano"));
        if (isNaN(ano)) {
            alert("Informe um ano válido");
        } else {
            if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
                alert("O ano é bisexto");
            } else {
                alert("O ano não é bisexto");
            }
        }
}