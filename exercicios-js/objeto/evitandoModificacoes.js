//Object.preventExtensions não permite adicionar mas itens no objeto
const produto = Object.preventExtensions({ 
    nome: 'Qualque',
    preco: 1.99,
    tag: 'promocao'
})
console.log('Extensśvel', Object.isExtensible(produto)) //isExtensible verifica se o objeto tem o preventExtensions

produto.nome = 'Borracha', // vai alterar o nome
produto.descricao = 'teste', // não vai entrar no objeto
delete produto.tag // vai excluir a tag

console.log(produto)

//Object.seal não permite excluir nem adicionar mais elementos no objeto
const pessoa = { nome: 'Juliana', idade: 24}
Object.seal(pessoa)

console.log('Selado', Object.isSealed(pessoa)) // diz se o objeto está selado

pessoa.altura = 1.55,
delete pessoa.idade
pessoa.nome = 'Paula'

console.log(pessoa)