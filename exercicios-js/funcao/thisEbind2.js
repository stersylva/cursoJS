function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { //setInterval é uma função que dispara uma repetição sem fim
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa