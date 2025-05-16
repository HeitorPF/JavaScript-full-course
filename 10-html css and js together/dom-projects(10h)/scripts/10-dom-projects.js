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
  let cost = Number(inputElement.value) * 100

  if(cost < 0) {
    document.querySelector('.js-total-cost').innerHTML = `Error: cost cannot be less than $0`
    document.querySelector('.js-total-cost').classList.add('red-color')
  }
  else{
    if(cost < 4000) {
      cost += 1000
    }
    if(document.querySelector('.js-total-cost').classList.contains('red-color')) {
      document.querySelector('.js-total-cost').classList.remove('red-color')
    }
    document.querySelector('.js-total-cost').innerHTML = `$${cost / 100}`
  }
}