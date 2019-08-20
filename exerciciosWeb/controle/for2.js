const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { // o i recebe o indice do array
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Paula',
    idade: 29,
    peso: 64
}
for (let teste in pessoa) {
    console.log(`${teste}, ${pessoa[teste]}`)
}