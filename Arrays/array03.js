let arr1 = [10, -1, 25, "jhonatan", false]
let arr2 = [20, -2, 50, "Pedro", true]



//mostra um representação do array em formato de string
console.log(arr1.toString())


//retorna um string separando cada elemento com o valor passado
console.log(arr2.join("<=>"))

// retorna a junção entre dois ou mais arrays
let arr3 = arr1.concat(arr2);
console.log(arr3)