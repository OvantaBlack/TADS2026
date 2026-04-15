function conversor() {
let nome = window.prompt("Informe seu nome");
        window.alert(`Olá, seja bem-vindo(a) ${nome}`);
        let n = Number(window.prompt("Informe o valor (R$) para a conversão em Dólares"));
        if (isNaN(n)) {
            alert("Valor inválido")
        } else {
            let conversor = (n / 5);

            window.alert(`Seu valor em Dólares será de: $${conversor.toFixed(2)}`);
        }
    }