console.log(uniqueArray(['green', 'red', 'blue', 'red']))
console.log(uniqueArray(['red', 'green', 'green', 'red']))

function findIndex(array, word) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === word) {
      return i
    }
  }
  return -1
}

function uniqueArray(array) {
  const uniqueArray = []
  for(let i = 0; i < array.length; i++) {
    if(findIndex(uniqueArray, array[i]) === -1) {
      uniqueArray.push(array[i])
    }
  }

  return uniqueArray
}