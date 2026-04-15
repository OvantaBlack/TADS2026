function triangulo() {
     let l1 = Number(window.prompt("Informe o primeiro lado"));
        if (isNaN(l1)) {
            alert("Inválido");
        } else {
            let l2 = Number(window.prompt("Informe o segundo lado"));
            if (isNaN(l2)) {
                alert("Inválido");
            } else {
                let l3 = Number(window.prompt("Informe o terceiro lado"));
                if (isNaN(l3)) {
                    alert("Inválido");
                } else {
                    if (l1 + l2 > l3 &&
                        l1 + l3 > l2 &&
                        l2 + l3 > l1) {
                            if (l1 === l2 && l2 === l3) {
                                alert("Seu triângula é Equilátero");
                            } else if (l1 === l2 || l1 === l3 || l2 === l3) {
                                alert("Seu triângulo é Isósceles");
                            } else {
                                alert("Seu triângulo é Escaleno");
                            }
                } else {
                    alert("Não forma triângulo");
                }
            }
        }
    }
}