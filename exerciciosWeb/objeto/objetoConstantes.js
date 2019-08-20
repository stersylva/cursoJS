// pessoa -> 123 -> {...}
const pessoa = { nome: 'pedro'} // a constante pessoa aponta pra um endereço de memoria 123 e esse enderço de memoria aponta pra pedro
pessoa.nome = 'jose' // pedro pode ser mudado, mas pessoa não
console.log(pessoa)

Object.freeze(pessoa) //quando coloca a função Freeze ela congela o endereço e o que o endereço aponta

pessoa.nome = 'maria'
console.log(pessoa) // ele vai imprimir josé porque o endereço e o que o endereço está apontando está congelado

// o objeto se torna constante vc não consegue mais excluir, adicionar, mudar, não consegue fazer mais nada

// para criar um objeto do tipo constante
const pessoaConstante = Object.freeze({ nome: 'João'})
console.log(pessoaConstante)