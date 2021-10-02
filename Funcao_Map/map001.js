const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia']
const primeiraLetra = texto => texto[0]
console.log(nomes.map(primeiraLetra))


const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Borracha', qtde: 320, preco: 2.00 },
    { nome: 'Caderno', qtde: 300, preco: 19.99 },
    { nome: 'Grampeador', qtde: 20, preco: 17.50 },
    { nome: 'Giz', qtde: 1110, preco: 0.50 }
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
console.log(carrinho.map(getTotal).toString("F2"))