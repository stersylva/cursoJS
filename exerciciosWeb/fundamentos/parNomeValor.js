//par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de apres nome/valor
const cliente = {
    nome: "Ster",
    idade: 29,
    peso: 60,
    endereco: {
        rua: "do sol",
        numero: 27
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)