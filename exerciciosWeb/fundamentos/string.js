const escola = "Cod3r"

console.log(escola.charAt(4)) //mostra a string que está no indice 4
console.log(escola.charAt(5)) // mostra o valor vazio pois não existe o indice 5
console.log(escola.charCodeAt(3)) //mostra o valor dentro da tabela ask ou unicoude
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // vai mostrar a partir do indice 1
console.log(escola.substring(0, 3)) // vai motrar do indice 0 até o 3 sem incluir o 3

console.log('escola '.concat(escola).concat('!')); //o 'escola ' é um literal
console.log('escola ' + escola + '!'); // vai concatenar tbm, o + concatena tbm
console.log(escola.replace(3, 'e')) // ele vai substituir o 3 pela letra e

console.log('Ana,Maria,Paula'.split(',')); //split vai pegar e transforma a string em array e separar por ,
//no split vc tambem pode usar regecks