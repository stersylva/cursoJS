const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Preço legal'] = 0.40 //evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
} // isso é um um objeto não é um json


'{"nome": "Camissa Polo", "preço":  "50.00"}' // isso é um json não é um objeto

console.log(prod2);