const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // o 2 dentro do toString converte em binario sem o 2 converte em string
console.log(typeof media)
console.log(typeof Number) //Number com N maiuculo é uma função number com n minusculo é um tipo do dado no caso de valor numerico