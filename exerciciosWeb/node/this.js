console.log(this === global)
console.log(this === module)

console.log(this === module.exports) // dentro de um modulo o this é igual ao module.exports
console.log(this === exports)

function logThis() {
    console.log('Dentro da função')
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this === global) // dentro de uma função o this é igual a global
}
logThis()