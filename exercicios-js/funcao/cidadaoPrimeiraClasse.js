//função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() { }

//Armazenar em uma variavel
const fun2 = function() { }

//Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3)) // vai pegar a 1ª função do array

//Armazenar dentro de um atributo de um objeto
const objeto = {}
objeto.falar = function() { return 'Opa'}
console.log(objeto.falar())

//Passar como parametro
function run(fun) {
    fun()
}
run(function () {console.log('Executando...') })

//Uma função pode retornar/conter uma outra função
function soma( a, b ) {
    return function(c){
        console.log( a + b + c)
    }
}
soma(2, 3)(4) // chamar literalmente
const outraFormaDeChamar = soma (2, 3) // essa é uma outra forma de chamar uma função dentro da outra
outraFormaDeChamar(4)