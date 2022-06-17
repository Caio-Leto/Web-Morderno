function tratarErroElancar(erro) {
    // throw new Error('..')
    // throw 18
    // throw true
    // throw 'mensagem
    throw {
        nomme: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() +'!!!')
    } catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('Final')
    }
}
const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)