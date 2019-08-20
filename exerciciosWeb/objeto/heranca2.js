// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' // não faça isso

const avo = {
    attr1: 'A'
}
const pai = { 
    __proto__: avo,
    attr2: 'B',
    attr3: '3'
}
const filho = { 
    __proto__: pai,
    attr3: 'C'
}
console.log(filho.attr0) // ele vai retornar '0', porque o filho recebe a herança do avo que recebe do Object.propotype
console.log(filho.attr1, filho.attr2, filho.attr3) // o attr3 vai retornar 'c', porque já tem no filho

const carro = {
    velAtual: 0,
    velMaxi: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMaxi) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMaxi
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMaxi}km/h`
    }
}
const ferrari = {
    Modelo: 'F40',
    velMaxi: 324 //shadowing
}
const volvo = {
    Modelo: 'v40',
    status() {
        return `${this.Modelo}: ${super.status()}` // o super referencia o metodo que está no propotipo
    }
}

Object.setPrototypeOf(ferrari, carro) // nesse momento estou dizendo que ferrari herda os atributos de carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) //ele vai mostrar apenas os atributos de ferrari
console.log(volvo) //ele vai mostrar apenas os atributos de volvo

volvo.acelerarMais(200)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

