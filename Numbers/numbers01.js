let numero = 1234567.890

console.log(numero.toFixed(2))
console.log(numero.toFixed(5))

console.log(numero.toPrecision(7))

console.log(numero.toString())
console.log(typeof numero.toString())

console.log(numero.toLocaleString("pt-BR"))
console.log(numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))
