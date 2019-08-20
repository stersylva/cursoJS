const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) { // x representa o indice do array
    if (x == 5) {
        break
    }
    console.log(`${x}, ${nums[x]}`)
}
console.log('terminou aqui')

for (y in nums) {
    if (y == 5) { 
        continue // não vai imprimir quando o indice for igual a 5
    }
    console.log(`${y}, ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`) // não usar
    }
}