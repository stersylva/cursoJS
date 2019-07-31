for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
} // in mostra o indice do array

for (let assuto of assuntosEcma) {
    console.log(assuto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assuto of assuntosMap) {
    console.log(assuto)
} // of mostra tudo o que está no array

for (let chave of assuntosMap.keys()) {
    console.log(chave)
} // of + keys mostra todas as chaves do array

for ( let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}