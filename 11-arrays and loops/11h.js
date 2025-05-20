function addOne(array) {
  const array2 = []

  for(let i=0; i < array.length; i++) {
    array2.push(array[i] + 1)
  }

  return array2
}

const array1 = [1, 2, 3]
const array2 = addOne(array1)


console.log(array2)