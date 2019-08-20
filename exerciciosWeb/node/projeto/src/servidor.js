const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDedados = require('./bancoDeDados')


// app.get('/produtos', (req, res, next) => { // testando o middleware é só descomentar 
//     console.log('Middleware')
//     next()
// })

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDedados.getProdutos()) // o send converter para o JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDedados.getProduto(req.params.id)) // o params quer dizer que vem da url
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDedados.salvaProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai converter o nome e o preco para JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDedados.salvaProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, net) => {
    const produto = bancoDedados.deleteProduto(req.params.id)
    res.send(produto)
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})