function semana() {
     let n = Number(window.prompt("Informe um número de 1 á 7"));
        if (isNaN(n) || (n < 1 || n > 7)) {
            alert("Número inválido");
        } else {
            switch (n) {
                case 1:
                    alert("Domingo");
                    break;
                case 2:
                    alert("Segunda-Feira");
                    break;
                case 3:
                    alert("Terça-Feira");
                    break;
                case 4:
                    alert("Quarta-Feira");
                    break;
                case 5:
                    alert("Quinta-Feira");
                    break;
                case 6:
                    alert("Sexta-Feira");
                    break;
                case 7:
                    alert("Sábado");
                    break;
            }
        }
}