function espearPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

//espearPor(2000)
//    .then(() => console.log('Executando promise...'))
//    .then(espearPor)
//    .then(() => console.log('Executando promise...'))
//    .then(espearPor)
//    .then(() => console.log('Executando promise...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    let valor = await retornarValorRapido()

    await espearPor(1500)
    console.log(`Async/Await ${valor}...`)

    await espearPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await espearPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()