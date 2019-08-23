// para ele criar o arquivo package.json npm init -y
//para baixa o express npm i --save express@4.16.3 body-parser@1.18.2 -E

// instalar o nodemon npm i --save-dev nodemon 
// inicializar o servidor node server.js ou nodemon server.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Incluido!!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(3003)