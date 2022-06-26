const pilotos = ['Vettel', 'Alonso', 'Raikkoken', 'Massa']
pilotos.pop()// remove o ultimo!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

const algunPilotos = pilotos.slice(2) // novo array
console.log(algunPilotos)

const algunPilotos2 = pilotos.slice(1, 4)
console.log(algunPilotos)