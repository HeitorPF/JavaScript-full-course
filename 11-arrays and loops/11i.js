function addNum(array, num) {
  const array2 = []

  for(let i=0; i < array.length; i++) {
    array2.push(array[i] + num)
  }

  return array2
}

const array1 = [1, 2, 3]
const array2 = addNum(array1, 3)


console.log(array2)