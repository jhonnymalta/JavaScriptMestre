let arr = [2, 2, 3]



// transforma o array original em reverso
console.log(arr.reverse())

// retorna um unico valor
let soma = arr.reduce(function (acumulador, atual) {
    return acumulador + atual
})
console.log(soma)

const nomes = ["Danil", "Karol", "Vivi", "Mario", "Maria"]
let nomesOrdem = nomes.reduce(function (nomes, nomeAtual) {
    let primeiraLetra = nomeAtual[0]
    if (nomes[primeiraLetra]) {
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})
console.log(nomesOrdem)