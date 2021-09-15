
const testeArrow = () => {
    console.log("Arrow Function TesteArrow");
    return "fn arrow"
}


// quando so tiver um parametro não precisamos colocar os parenteses e nem
// a palavra return. Podemos fazer tudo em uma única linha.
const testeArrow2 = str => `Fn Arrow - ${str}`

const t1 = testeArrow()
const t2 = testeArrow2("Eu sou a lenda");

console.log(t1)
console.log(t2)