function arraySwap(array) {
  const array2 = []
  for(let i=0; i < array.length; i++) {
    array2.push(array[i])
  }
  array[0] = array2[array2.length - 1]
  array[array2.length - 1] = array2[0]
}

const array1 = [1, 20, 22, 24, 5]
const array2 = ['hi', 'hello', 'good']


console.log(array1)
arraySwap(array1)
console.log(array1)

console.log(array2)
arraySwap(array2)
console.log(array2)