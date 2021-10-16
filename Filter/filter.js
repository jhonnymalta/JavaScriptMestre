//Array
const carrinho = [
    { nome: 'Caneta', qtde: '10', preco: 7.99 },
    { nome: 'Post-it', qtde: '100', preco: 3.70 },
    { nome: 'Mochila', qtde: '25', preco: 450.30 },
    { nome: 'Notebook', qtde: '3', preco: 3299.99 },
    { nome: 'Borraca', qtde: '210', preco: 1.99 },
]
//arrow function para determinar o que ser filtrado no array
const estoqueSeguro = atual => atual.qtde < 50;

//arrow function para modificar item do array usando map
const formatar = item => `${item.nome}: Vai acabar em breve. Favor abastecer estoque.`

//funcao filter e map sobre o array carrinho
let itensCriticos = carrinho.filter(estoqueSeguro).map(formatar)


//resultado
console.log(itensCriticos)