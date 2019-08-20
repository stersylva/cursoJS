const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { // o forEach tem um for dentro dela e a função passada por parametro é uma callback
    console.log(`${indice}) ${nome}`) // o callback é executada a cada indice do array
})

// usando o forEach com o callback sendo uma arrow
aprovados.forEach(nome => (console.log(`${nome}`)))

//usando o forEach com uma função armazenada em uma variavel
const exibirAprovados = (aprovado => (console.log(`${aprovado}`)))

aprovados.forEach(exibirAprovados)
