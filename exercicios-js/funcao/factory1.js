//Factory simples
//Uma função factory é uma função que retorna um objeto

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())