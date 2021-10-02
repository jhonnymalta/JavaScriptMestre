class Animal {
    constructor(tipo) {
        this.tipo = tipo
    }

    obterTipo() {
        return this.tipo
    }


}

let cachorro = new Animal("mamifero");
let gato = new Animal("mamifero");