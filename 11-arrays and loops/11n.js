function countWords(words) {
  const obj = {}
  count = 0
  for(let x = 0; x < words.length; x++) {
    count = 0
    for(let y = 0; y < words.length; y++){
      if(words[x] === words[y]) {
        count ++
        obj[words[y]] = count
      }
    }
  }
  
  return obj
}

array1 = ['apple', 'grape', 'apple', 'apple']

console.log(countWords(array1))