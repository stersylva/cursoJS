let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(b)
console.log(this.c)
console.log(module.exports.c) // this === module.exports
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca
abc = 3 // não fazer isso
console.log(global.abc)
