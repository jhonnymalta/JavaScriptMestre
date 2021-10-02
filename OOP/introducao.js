function Animal(tipo) {
    this.tipo = tipo
}

Animal.prototype.obterTipo = function () {

    return this.tipo
}

let dog = new Animal("mamifero");
let cat = new Animal("mamifero");
let cobra = new Animal("reptil");

