function toggleGaming(id) {
  const gamingButtonElement = document.querySelector(`#${id}`)
  if(gamingButtonElement.classList.contains('is-toggled')){
    gamingButtonElement.classList.remove('is-toggled')
  }
  else {
    gamingButtonElement.classList.add('is-toggled')
  }
}