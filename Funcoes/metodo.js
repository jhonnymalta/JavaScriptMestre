const dog = {
    name: "Rex",
    falar: function () {
        console.log(this.name, "Fala: au au")
    }

}

console.log(dog.falar())