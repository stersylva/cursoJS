function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min //Math é um biblioteca matematica, random() traz números aleatórios
    return Math.floor(valor) //floor aredonda pra baixo
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi, ${opcao}.`)
}