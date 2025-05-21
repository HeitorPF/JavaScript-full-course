console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']))


function removeEgg(foods) {
  const foodsNoEgg = []
  for(let i = 0; i < foods.length; i++) {
    if(foods[i] === 'egg') {
      continue
    }
    foodsNoEgg.push(foods[i])
  }
  return foodsNoEgg
}