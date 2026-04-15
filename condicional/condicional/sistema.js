function sistema() {
      let h = Number(window.prompt("Que horas são (apenas números inteiros de 0 a 23)"));
        if (isNaN(h)) {
            alert("Informe apenas números");
        } else {
            if (h < 0 || h > 23) {
                alert("Hora inválida!");
            } else if (h >= 0 && h <=11) {
                alert("Bom Dia!");
            } else if (h >= 12 && h <=17) {
                alert("Boa Tarde!");
            } else if (h >= 18 && h <=23) {
            alert("Boa Noite!");
            }
            }
}