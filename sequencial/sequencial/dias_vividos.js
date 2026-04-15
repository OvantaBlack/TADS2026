function diasVividos() {
    let idade = Number(prompt("Digite sua idade"));

    if (isNaN(idade) || idade <= 0) {
        alert("Idade inválida");
    } else {
        let dias = idade * 365;
        alert("Você viveu aproximadamente " + dias + " dias");
    }
}