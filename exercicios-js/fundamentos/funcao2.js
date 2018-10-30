// Armazenando uma funcao em um variavel
const imprimirsoma = function (a, b) { // funcao anonima
    console.log(a + b)
}

imprimirsoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 6))

//retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 5))