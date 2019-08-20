console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() { // o reverse vai reverter os dados de um string 
    return this.split('').reverse().join('') //o split vai colocar tudo num array e o join vai juntar tudo
}

console.log('Ster'.reverse())

Array.prototype.first = function() { //first pega o 1º elemento de um array
    return this[0]
}
console.log([1, 2, 3].first())
console.log(['a', 'b', 'c'].first())

//não fazer isso
String.prototype.toString = function() { // o metodo tostring já existe no prototype fazendo isso vc vai está sobre escrevendo ele
    return 'Lascou tudo'
}
console.log('teste'.reverse())