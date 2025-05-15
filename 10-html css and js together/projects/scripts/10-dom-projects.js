console.log(window)

function handleCostKeyDown(event) {
  if(event.key === 'Enter') {
      CalculateTotal()
  }
}

function Subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button')

  if(buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText = 'Subscribed'
    buttonElement.classList.toggle('is-subscribed')
  }
  else {
    buttonElement.innerText = 'Subscribe'
    buttonElement.classList.toggle('is-subscribed')
  }
}

function CalculateTotal() {
  const inputElement = document.querySelector('.js-cost-input')
  let cost = Number(inputElement.value)
  
  if(cost < 40) {
    cost += 10
  }

  document.querySelector('.js-total-cost').innerHTML = `$${cost}`
}