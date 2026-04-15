function temperatura() {
let c = Number(window.prompt("Informe a temperatura (°C)"));
        if (isNaN(c)) {
            alert("Valor inválido");
        } else {
           let f = (c * 9/5 + 32)
           window.alert(`A sua temperatura em Fahrenheit será de: ${f}`)
        }
    }