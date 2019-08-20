//console.log(global)

global.minhaApp = Object.freeze({ //o freeze não deixa a variavel nome ser mudada
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})