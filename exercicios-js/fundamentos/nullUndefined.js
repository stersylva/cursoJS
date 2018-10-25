let valor // não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // não fazer isso
console.log(!!produto.preco) 
//delete produto.preco // deleta valor do produto
console.log(produto)

produto.preco = null // isso é pra dizer de forma implicita esse produto está sem preço
console.log(!!produto.preco)
console.log(produto)
