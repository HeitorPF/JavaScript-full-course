let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  ties: 0,
  losses: 0
}

let isAutoPlaying = false
let intervalId

updateScoreElement()

function pickComputerMove() {
  let computerMove = ''
  const randomNumber = Math.random()

  if(randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock'
  } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper'
  } else {
    computerMove = 'scissors'
  }

  return computerMove
}

function playGame(playerMove) {

  const computerMove = pickComputerMove()
  let result = ''
  
  if(playerMove === 'scissors') {
    if(computerMove === 'rock'){
      result = 'You lose'
    } else if(computerMove === 'paper') {
      result = 'You win'
    } else  if(computerMove === 'scissors') {
      result = 'Tie'
    }

  } else if(playerMove === 'paper') {
    if(computerMove === 'rock'){
      result = 'You win'
    } else if(computerMove === 'paper') {
      result = 'Tie'
    } else  if(computerMove === 'scissors') {
      result = 'You lose'
    }

  } else if(playerMove === 'rock') {
    if(computerMove === 'rock'){
      result = 'Tie'
    } else if(computerMove === 'paper') {
      result = 'You lose'
    } else  if(computerMove === 'scissors') {
      result = 'You win'
    }
    
  }
  

  if(result === 'You win') {
    score.wins ++
  }
  else if(result === 'Tie') {
    score.ties ++
  }
  else if(result === 'You lose') {
    score.losses ++
  }

  localStorage.setItem('score', JSON.stringify(score))

  document.querySelector('.js-result').innerHTML = result
  document.querySelector('.js-moves').innerHTML = `
  <div class="move1">
    You <img src="imgs/${playerMove}-emoji.png" alt="${playerMove} move" class="move-icon-result">
  </div>
  <div class="move2"> 
    <img src="imgs/${computerMove}-emoji.png" alt="${computerMove} move" class="move-icon-result"> Computer
  </div>`
  updateScoreElement()
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`
}

function resetScore() {
  score.wins = 0
  score.ties = 0
  score.losses = 0
  localStorage.removeItem('score')
  updateScoreElement()
  document.querySelector('.js-result').innerHTML = ''
  document.querySelector('.js-moves').innerHTML = ''
}

function autoPlay() {
  if(!isAutoPlaying) {
    intervalId = setInterval(function() {
      playGame(pickComputerMove())
    }, 1000)
    isAutoPlaying = true
  } else {
    clearInterval(intervalId)
    isAutoPlaying = false
  }
  
}