console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

//sempre que for atribuir um objeto a ser exportado tem que atribuir ao module.exports

exports = {
    nome: 'teste'
}

console.log(module.exports)