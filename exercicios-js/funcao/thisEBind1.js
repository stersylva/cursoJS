const pessoa = {
    saudacao:'Bom dia',
    falar() {
        console.log(this.saudacao) // nesse caso o this é o objeto pessoa
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO(orientação a objeto)

const falarDePessoa = pessoa.falar.bind(pessoa) // bind é resposavel por amarar o dono da execurção
falarDePessoa()

