function removeEgg(foods) {
  let countEgg = 0
  return foods.filter((value) => {
    if(value == 'egg' && countEgg<2){
      countEgg++
      return false
    }
    return true
})
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']))