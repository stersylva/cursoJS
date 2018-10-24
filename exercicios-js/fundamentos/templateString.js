const nome = 'Rebeca'
const concatenacao = 'olá ' + nome + '!';
const template = `
    Ola
    ${nome}!`
console.log(concatenacao, template);

//expressoes
console.log(`1 + 1 = ${1 + 1}`) // ele vai exibir a string e vai somar apenas o que está dentro ${}

const up = texto => texto.toUpperCase() // a função toUpperCase vai coloar todos os caracters em maiusculo
console.log(`Ei... ${up('cuidado')}!`) 