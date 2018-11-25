const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
// nota >= 7 é uma expressão regular que se for verdaddeira vai retornar Aprovado se for false retorna Reprovado

console.log(resultado(7.1))
console.log(resultado(5))