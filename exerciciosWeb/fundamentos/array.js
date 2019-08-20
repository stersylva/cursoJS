const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]);
console.log(valores[4]); // o indice 4 não existe por isso ele dar um undefined

// valores[10] = 10
// console.log(valores) // nesse caso ele vai deixar 6 indices sem nada e vai colocar o 10 no indice 10

valores [4] = 10
console.log(valores);
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()); //o pop exclui o ultimo elemento do array

delete valores[0]
console.log(valores)

console.log(typeof valores)