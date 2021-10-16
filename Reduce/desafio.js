const carrinho = [
    { nome: 'Caneta', qtde: '10', preco: 7.99, requerido: true },
    { nome: 'Post-it', qtde: '2', preco: 3.70, requerido: false },
    { nome: 'Mochila', qtde: '1', preco: 450.30, requerido: true },
    { nome: 'Notebook', qtde: '1', preco: 3299.99, requerido: false },
    { nome: 'Borraca', qtde: '5', preco: 1.99, requerido: true },
]

//Desafio
//Requerido na lista 
//Obter total por item
//valor total da compra

const requerido = item => item.requerido;
const totalPorItem = item => item.qtde * item.preco;
const mediaCompra = (acumulado, prox) => acumulado + prox;

const resultado = carrinho.filter(requerido).map(totalPorItem).reduce(mediaCompra)

console.log(resultado)
