const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { 
    console.log(operacao(a, b))
}
imprimirResultado(3 , 4) // como eu não passei o 3º paramentro ele vai pegar a função soma, como 3º parametro
imprimirResultado(3, 4, soma) // não vai fazer diferença se passar o 3º paramentro soma ou não pois ele já pega da função anonima a cima
imprimirResultado(3, 4, function (x, y) {
    return x - y // ele vai esquecer a função soma e vai executar a função anonima passada por paramentro
}) 
imprimirResultado(3, 4, (x, y) => x * y) // função arrow passada dentro de um função anonima

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}
pessoa.falar()