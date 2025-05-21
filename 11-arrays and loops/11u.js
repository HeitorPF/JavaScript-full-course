
const foods = ['egg', 'apple', 'egg', 'egg', 'ham']
console.log(removeEgg(foods))
console.log(foods)


function removeEgg(foods) {
  const foodsNoEgg = foods.reverse().slice()
  let eggs = []
  for(let i = 0; i < foodsNoEgg.length; i++) {
    if(foodsNoEgg[i] === 'egg') {
      eggs.push(i)
    }
  }
  
  for(let i = 0; i < eggs.length - 1; i++) {
    eggs[i] -= i
    foodsNoEgg.splice(eggs[i], 1)
  }
  return foodsNoEgg.reverse()
}