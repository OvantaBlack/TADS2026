function imc() {
       let peso = Number(window.prompt("Informe seu peso (kg)"));
        if (isNaN(peso) || (peso <= 0) ) {
            alert("Inválido");
        } else {
            let altura = Number(window.prompt("Informe sua altura (m)"));
            if (isNaN(altura) || (altura <= 0)) {
                alert("Inválido");
            } else {
                let imc = peso / (altura * altura);

                if (imc < 18.5) {
                    alert(`O seu índice de massa corporal(IMC) é: ${imc.toFixed(2)} (Abaixo do peso)`);
                } else if (imc >= 18.5 && imc < 25 ) {
                    alert(`O seu índice de massa corporal(IMC) é: ${imc.toFixed(2)} (Peso normal)`);
                } else if (imc >= 25 && imc < 30) {
                    alert(`O seu índice de massa corporal(IMC) é: ${imc.toFixed(2)} (Sobrepeso)`);
                } else {
                    alert(`O seu índice de massa corporal(IMC) é: ${imc.toFixed(2)} (Obesidade)`);
                }
            }
        } 
}