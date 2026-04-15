 function par_ou_impar() {
 let n = Number(window.prompt("Informe um número"));
        if (isNaN(n)) {
            alert("Apenas números são permitidos!");
        } if (n % 2 == 0) {
            window.alert(`O seu número é par`);
        } else {
            window.alert("O seu número é ímpar");
        }
    }