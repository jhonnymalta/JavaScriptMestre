//Array
const carrinho = [
    { nome: 'Caneta', qtde: '10', preco: 7.99 },
    { nome: 'Post-it', qtde: '100', preco: 3.70 },
    { nome: 'Mochila', qtde: '25', preco: 450.30 },
    { nome: 'Notebook', qtde: '3', preco: 3299.99 },
    { nome: 'Borraca', qtde: '210', preco: 1.99 },
]

//funcao map para total de cada item
const getTotalItem = item => item.qtde * item.preco;

//funcao reduce para pegar todos os valores e somar crianco um unico
const getTotalCarrinho = (acumulado, prox) => acumulado + prox;

const totalCompra = carrinho.map(getTotalItem).reduce(getTotalCarrinho);

//retorno
console.log(totalCompra)