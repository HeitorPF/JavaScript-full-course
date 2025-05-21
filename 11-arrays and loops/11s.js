console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham', 'egg']))


function removeEgg(foods) { // this function let only the last egg in the array
  const foodsNoEgg = []
  let eggs = []
  for(let i = 0; i < foods.length; i++) {
    foodsNoEgg.push(foods[i])
    if(foods[i] === 'egg') {
      eggs.push(i)
    }
  }

  for(let i = 0; i < eggs.length - 1; i++) {
    eggs[i] -= i
    foodsNoEgg.splice(eggs[i], 1)
  }
  return foodsNoEgg
}