const stringArray1 = ['hello', 'worlf', 'search', 'good', 'search']
let wordIndex = -1
for(let i = 0; i < stringArray1.length; i++) {
  if(stringArray1[i] === 'search') {
    wordIndex = i
    break
  }
}
console.log(wordIndex)

