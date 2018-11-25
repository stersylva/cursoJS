function tratarErroELancar(erro) {
    throw new Error('teste');
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("final")
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritando(obj)