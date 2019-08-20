// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

//Template Scring
const produto = 'iPad'
console.log(`${produto} é caro`)

//Destructuring
const [l, e, ...tras] = "cod3r"
console.log(l,e,tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome:'Ster', idade: 30}
console.log(idade, nome)