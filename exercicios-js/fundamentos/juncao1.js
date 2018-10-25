// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //aqui ele vai somar
imprimirSoma(2) //aqui ele vai dar um NaN poquenão foi definido nada pra b
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //aqui ele vai pegar apenas os 2 primeiro números e resto vai ignorar
imprimirSoma() // aqui vai ser um NaN

// Função com retorno
function soma(a, b = 1) { // se não passar o valor de b por padrão ele vai colocar 1
    return a + b
}
console.log(soma(2, 3)) // aqui ele vai somar
console.log(soma(2)) //aqui ele vai somar 2 com o 1 do b 
console.log(soma()) // aqui ele vai dar um NaN, pois não tem valor pra somar com B