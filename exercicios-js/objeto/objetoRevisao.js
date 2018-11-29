const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

//console.log(produto)

delete produto.preco
delete produto['marca do produto']

//console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 3000,
    proprietario: {
        nome: 'ster',
        idade: 56,
        endereco: {
            logradouro: 'rua do sol',
            numero: 200
        }
    },
    condutores: [{
        nome: 'junio',
        idade: 29
    }, {
        nome: 'paula',
        idade: 35
    }],
    calcularValorSeguro: function() {

    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'rua lua'

console.log(carro)

delete carro.condutores

console.log(carro)