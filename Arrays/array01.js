const meuArray = [1, 5, "ola", true]


let algumaNumero = meuArray.some(function (el) {
    return typeof el === "number"
})

console.log(algumaNumero)

let todosNumeros = meuArray.every(function (el) {
    return typeof el === "number"
})

console.log(todosNumeros);

let filtro = meuArray.filter(function (el, i, _arr) {


})

console.log(filtro)

let mapa = meuArray.map(function (el, i, _arr) {
    return el + " olha eu aqui!"
})

console.log(mapa)