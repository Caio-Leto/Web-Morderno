const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const jogadores = {}

function salvarJogador(jogador) {
    if (!jogador.id) jogador.id = sequence.id
    jogadores[jogador.id] = jogador
    return jogador
}

function getJogador(id) {
    return jogador[id] || {}
}

function getJogadores() {
    return Object.values(jogadores)
}

function excluirJogador(id) {
    const jogador = jogadores[id]
    delete jogadores[id]
    return jogador
}

module.exports = { salvarJogador, getJogador, getJogadores, excluirJogador}