function addArrays(array1, array2) {
  const array3 = []

  for(let i=0; i < array1.length; i++) {
    array3.push(array1[i] + array2[i])
  }

  return array3
}

const array1 = [1, 1, 2]
const array2 = [1, 1, 3]
const array3 = addArrays(array1, array2)


console.log(array3)