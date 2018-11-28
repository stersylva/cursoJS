class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa('ster')
p1.falar()

function pessoa (nome) {
    nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}
const p2 = new pessoa('Ster')
p2.falar()