const pilotos = ['Vettel', 'Alonso', 'Raikkonen', ]
pilotos.pop() // massa quebrou o carro! o pop remove o ultimo indice do array
console.log(pilotos)

pilotos.push('vertappen') //o push adiciona itens no final do array
console.log(pilotos)

pilotos.shift() // remove o 1º
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no indice 0, ou seja no 1º elemento do array
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //não vai remover ninguém e vai adicionar a partir do indice 2
console.log(pilotos)

//remover
pilotos.splice(3, 1) // apartir do indice 3 vai remover 1, ou seja, vai remover o inidice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //apartir do indice 2 ele vai criar um novo array e vai incluir o indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // ele vai gerar um novo array o indice 1 até o 4, mas não vai incluir o 4
console.log(algunsPilotos2)