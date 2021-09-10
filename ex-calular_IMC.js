

function calcularIMC(peso, altura) {

    if (peso === undefined || altura === undefined) {
        throw console.error("É preciso 2 parametros peso e altura.");
    }

    return peso / (altura * altura)
}
function classificaIMC(img) {
    if (imc < 16.9) {
        return ' Muito Abaixo do peso'
    } else if (imc < 18.4) {
        return 'Abaixo do peso'
    } else if (imc < 24.9) {
        return 'Peso Normal'
    } else if (imc < 29.9) {
        return 'Acima do Peso'
    } else if (imc < 34.9) {
        return ' Obesidade Grau 1'
    } else if (imc < 40) {
        return 'Obesidade Grau 2'
    } else {
        return ' Obesidade Grau 3'
    }
}


let imc = calcularIMC(76, 1.74)
console.log(imc)
console.log(classificaIMC(imc))



// IMC
/**
 * Muito Abaixo do peso   16 a 16,9 kg/m2
 * Abaixo do peso         17 a 18,4 kg/m2
 * Peso Normal            18,5 a 24,9 kg/m2
 * Acima do Peso          25  a 29,9 kg/m2
 * Obesidade Grau 1       30 a 34,9 kg/m2
 * Obesidade Grau 2       35 a 40 kg/m2
 * Obesidade Grau 3       maior que 40kg/m2
 */