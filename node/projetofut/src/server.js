const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./database')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/jogadores', (req, res, next) => {
    res.send(dataBase.getJogadores()) // Converter para JSON
})

app.get('/jogadores/:id', (req, res, next) => {
    res.send(dataBase.getJogador(req.params.id))
})

app.post('/jogadores', (req, res, next) => {
    const jogador = dataBase.salvarJogador({
        nome: req.body.nome,
        numero: req.body.numero
    })
    res.send(jogador) // JSON
})

app.put('/jogadores/:id', (req, res, next) => {
    const jogador = dataBase.salvarJogador({
        id: req.params.id,
        nome: req.body.nome,
        numero: req.body.numero
    })
    res.send(jogador) // JSON
})

app.delete('/jogadores/:id', (req, res, next) => {
    const jogador = dataBase.excluirJogador(req.params.id)
    res.send(jogador) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})