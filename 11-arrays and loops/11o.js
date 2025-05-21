const stringArray1 = ['hello', 'worlf', 'search', 'good', 'search']
const stringArray2 = ['not', 'found']
let wordIndex = -1
for(let i = 0; i < stringArray1.length; i++) {
  if(stringArray1[i] === 'search') {
    wordIndex = i
  }
}
console.log(wordIndex)

wordIndex = -1
for(let i = 0; i < stringArray2.length; i++) {
  if(stringArray2[i] === 'search') {
    wordIndex = i
    break
  }
}
console.log(wordIndex)

