function idade() {

    let maior = 0;
    let menor = 999;

    for (let i = 1; i <= 5; i++) {

        let idade = Number(
            window.prompt(`Digite a ${i}ª idade`)
        );

        if (idade > maior) {
            maior = idade;
        }

        if (idade < menor) {
            menor = idade;
        }
    }

    alert(`Maior idade: ${maior}
Menor idade: ${menor}`);
}