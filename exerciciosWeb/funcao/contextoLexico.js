const valor = 'Global'

function minhaFucao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFucao()
}

exec()