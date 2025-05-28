function isWeekend(date){
  if(date === 'Saturday' || date === 'Sunday'){
    document.querySelector('.js-15e').innerHTML = date
  }
  else {
    document.querySelector('.js-15e').innerHTML = 'is not weekend'
  }
}

export default isWeekend 