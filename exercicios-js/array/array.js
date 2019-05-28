console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Paula', 'Mateus']
console.log(aprovados)

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//vai dar undefined

aprovados[3] = 'Bruna'
aprovados.push('ster') // o push adiciona itens no final do array
console.log(aprovados.length) //o length traz o tamanho do array

aprovados[9] = 'Julia'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

aprovados.sort() // vai ordenar os itens do array e altera o array
console.log(aprovados) 

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos' , 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // nesse caso ele vai excluir o carlos e adicionar o Elemento1 e o Elemento2
console.log(aprovados)
//o 1º elemento e o inidice o 2º é a quantidade de elementos que vc quer excluir a partir daquele indice e o 3º são os itens que serão adicionado.

