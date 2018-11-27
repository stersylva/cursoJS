//estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1())
console.log(soma1(3)) // so o a vai receber 3 os outros parametros vão receber 1
console.log(soma1(1,2,3))
console.log(soma1(0, 0, 0)) //como o 0 é false esse console vai cair na segunda expressão atribuindo o valor 1
console.log('terminou aqui')

//estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //se a for estritamente diferente de undefined ele retorna a, se não, ele retorna 1
    b = 1 in arguments ? b : 1 // se o indice b for igual 1 pegue o valor de b, se não, pegue o valor 1
    c = isNaN(c) ? 1 : c //se o valor não for um número ele retorna 1 se for ele retorna c 
    // o isNan retorna true se o valor não for um número 
    return a + b + c
}
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))
console.log('fim')

//valor padrao do es2015
function soma3(a=1, b=1, c=1) {
    return a + b + c
}
console.log(soma3())
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0))