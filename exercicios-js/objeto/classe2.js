class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome) //quando eu alterar o sobrenome do pai vai alterar o do avo por causa do super
    this.profissao = profissao
    }

}
class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)
