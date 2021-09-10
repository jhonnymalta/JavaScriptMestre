function CalcularMedia() {
    let total = 0
    let qtd = arguments.length;
    for (let i = 0; i < qtd; i++) {
        if (typeof arguments[i] !== "number") {
            throw console.error("Favor inserir somente numeros");
        }
        total += arguments[i];
    }
    return total / qtd

}

console.log(CalcularMedia(2, 4))
console.log(CalcularMedia(2, 4, 6, 1))
console.log(CalcularMedia(2, 4, 9, 2, 5))