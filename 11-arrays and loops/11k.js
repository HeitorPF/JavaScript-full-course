function countPositive(array) {
  let count = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] > 0) {
      count ++
    }
  }
  return count
}

const array1 = [1, -3, 5]
const array2 = [-2, 3, -5, 7, 10]

console.log(array1)
console.log(countPositive(array1))

console.log(array2)
console.log(countPositive(array2))