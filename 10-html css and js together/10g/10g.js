function toggleButton(id) {
  const buttonElement = document.querySelector(`#${id}`)
  if(buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.remove('is-toggled')
  }
  else {
    togglePreviousButton()
    buttonElement.classList.add('is-toggled')
  }
}

function togglePreviousButton() {
  const buttonElement = document.querySelector('.is-toggled')
  if(buttonElement) {
    buttonElement.classList.remove('is-toggled')
  }
  
}