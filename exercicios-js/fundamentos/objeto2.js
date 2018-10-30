console.log(typeof Object) //função
console.log(typeof new Object) //objeto

const Cliente = function() {}
console.log(typeof Cliente) //função
console.log(typeof new Cliente) //se instanciar vira objeto

class Produto {}// ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto()) //objeto