let arr = [1, 2, 3, 4]
const obj1 = {
    nome: "Maria",
    idade: "28",
    Profissao: "Personal trainer"
}

for (let prop in obj1) {
    //para pegar o valor de cada propriedade
    console.log(obj1[prop])
}

//acessa diretamente o valor do array sem precisar de loop
for (n of arr) {
    console.log(n)
}
