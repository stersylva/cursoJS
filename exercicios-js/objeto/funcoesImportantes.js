const pessoa = {
    nome: 'Rebeca',
    idade: 60,
    peso: 30
}
console.log(Object.keys(pessoa)) // a função keys vai trazer todos os keys do objeto
console.log(Object.values(pessoa)) // vai trazer todos os valores do obejeto pessoa
console.log(Object.entries(pessoa)) // traz um array com todos os elementos do objeto

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 4, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(dest)
Object.freeze(obj)
obj.c = 123
console.log(obj)
