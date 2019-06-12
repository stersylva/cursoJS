const sequence = {
    _id: 1, 
    get id() { return this._id++}
}

const produtos = {} // um objeto de chaves e valor

function salvaProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto // a chave é o id e o valor é o produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos) // vai retornar o objeto produto setado na linha 6 como objeto vazio, mas já foi preenchido na outra função
}

function deleteProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvaProduto, getProduto, getProdutos, deleteProduto }