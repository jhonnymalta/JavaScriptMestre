let arr = [1, 2, 3, 4, 5]


// modifica o valor original do array e retorna o seu novo tamanho
let teste = arr.push(11, 13, true, "ola mundo")
console.log(teste)
console.log(arr)


//remove o ultimo indece e retorna o ultimo elemento
let ultimo = arr.pop()
console.log(ultimo)
console.log(arr)


// remove o primeiro elemento

let primeiro = arr.shift()
console.log(primeiro)
console.log(arr)

// inclui no final do array
// retorna o indice
let test2 = arr.unshift(5, 6)
console.log(test2)
console.log(arr)

// retorna o valor dos indices removidos a partir do indice passado
let test3 = arr.splice(2)
console.log(test3)
console.log(arr)