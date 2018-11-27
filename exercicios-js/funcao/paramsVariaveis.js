function soma() {
    let soma = 0
    for (i in arguments) {//arguments é um array interno de uma função ele pega todos os elementos
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "teste")) // ele vai somar os dois primeiro indices e vai concatenar o ultimo
console.log(soma('a', 'b', 'c')) // como a variavel soma já foi inicializada com 0 ele vai exibir o 0 e concatenar as letras
