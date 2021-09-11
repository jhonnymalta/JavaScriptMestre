let arr = [4, 5, 10, 30, 50, 3, 5]

//qual o indece do elemento dentro do array
console.log(arr.indexOf(30))

// qual o ultimo indice encontrado dentro do array de tal elemento
console.log(arr.lastIndexOf(5))

// existe tal elemento dentro do array?
console.log(arr.includes(51));

//encontra o primeiro valor que satisfaça tal condição
// recebe um funcção para ser a condição
// se nao encontrar nada retorna undefined
console.log(arr.find(function (el) {
    return el > 5
}))

//encontra o primeiro indice de tal valor  que satisfaça tal condição
// se nao encntrar nada retorna -1
console.log(arr.findIndex(function (el) {
    return el > 30
}))
