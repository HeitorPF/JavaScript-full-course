let calculation =  JSON.parse(localStorage.getItem('calculation')) || ''
let result
displayCalculation()
console.log(calculation)

function updatecalculation(button) {
  calculation = calculation + button
  displayCalculation()
  localStorage.setItem('calculation', JSON.stringify(calculation))
  return
}

function calculate() {
  calculation =  eval(calculation)
  displayCalculation()
  return
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation
}

function clearCalculation() {
  calculation = ''
  localStorage.removeItem('calculation')
  displayCalculation()
}