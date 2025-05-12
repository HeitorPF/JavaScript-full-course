let randomNumber = Math.random()
let result = ''
let guess = 'heads'

randomNumber < 0.5 ? result = 'heads': result = 'tails'

console.log(`Coin: ${result}`)

result === guess ? console.log('You win') : console.log('You lose')
