function falaDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falaDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) //trata um resolve
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // trata o erro