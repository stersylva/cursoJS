let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // vai dar verdadeiro, porque ele vai execultar a comparação antes de decrementar
console.log(num1 === num2) // vai dar false porque ele já executou a linha 9