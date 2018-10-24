let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // quando se nega 2x força ao java stript trazer uma conversão para verdadeiro ou false

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!1)
console.log(!!-1);
console.log(!!' ') // setiver espaço ele resolve se tiver vazia não
console.log(!![]) //array
console.log(!!{}) //objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0) //o 0 resolve pra false
console.log(!!'') //uma string vazia ele resolve pra false VAZIA NÃO SISGNIFICA SEM ESPAÇO
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || ' ')) //ele vai retornar true porque as ' ' com espaço é true essa espreção usa o OU

let nome = ''
console.log(nome || 'desconhecido'); // porque a variavel nome é vazio