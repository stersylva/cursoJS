const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(8)
imprimirResultado(4)
imprimirResultado('Epa') // aqui vai dar false e vai cair no else