class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}
class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l)) 
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => { // ele vai acrecentar dentro valorConsolidado todos os valores do cicloFinanceiro
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('Luz', -4000)

const contas = new CicloFinanceiro(06, 2018)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())