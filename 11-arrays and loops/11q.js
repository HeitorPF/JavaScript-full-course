console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'))
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'))

function findIndex(array, word) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === word) {
      return i
    }
  }
  return -1
}