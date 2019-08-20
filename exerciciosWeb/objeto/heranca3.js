const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai) // filha é herança de pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { 
        value: 'Bia',
        writable: false,
        enumerable: true 
    }
})
console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha1.corCabelo}`)

console.log(Object.keys(filha1)) // lista as chaves de filha1
console.log(Object.keys(filha2)) 

for(let key in filha2) {
    console.log(key)
}

for (let key in filha2) { // aqui ele vai trazer os elementos dele e vai trazer a herança
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`por herança ${key}`)
}
