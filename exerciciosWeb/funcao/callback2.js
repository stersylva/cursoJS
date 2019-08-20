const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem o callback
let notasBaixas = []
for (i in notas) {
    if (notas[i] < 7 ) {
    notasBaixas.push(notas[i]) // metodo push adiciona itens ao final do array
    }
}
console.log(notasBaixas)

//com Callback
const notasBaixas2 = notas.filter(function (nota) { // o filter cria um novo array apenas com os resutados true do callback ou seja do retorno
    return nota < 7
})
console.log(notasBaixas2)

//usando o arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)