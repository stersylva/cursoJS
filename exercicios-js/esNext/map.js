const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angula', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chamesVariadas = new Map([
    [function () { }, 'Funcao'],
    [{}, 'objeto'],
    [123, 'Numero']
])

chamesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chamesVariadas.has(123))
chamesVariadas.delete(123)
console.log(chamesVariadas.has(123))
console.log(chamesVariadas.size)