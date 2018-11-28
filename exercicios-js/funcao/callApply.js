function getPreco( imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
console.log(getPreco()) // aqui vai dar um NaN porque o this da função get preço é global
console.log(produto.getPreco()) //aqui vai dar certo
console.log(getPreco.call(produto))

const carro = {
    preco: 3000,
    desc: 0.20
}
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))// os parametros tem que estar dentro de um array

