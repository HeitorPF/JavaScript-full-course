for(let i = 1; i <=20; i++) {
  let div3 = i%3 ? false : true
  let div5 = i%5 ? false : true

  div3 ? div5 ? console.log('FizzBuzz') : console.log('fizz') : div5 ? console.log('Buzz') : console.log(i)

  // if(div3) {
  //   if(div5) {
  //     console.log('FizzBuzz')
  //     continue
  //   }
  //   else{
  //     console.log('Fizz')
  //   }
  // }
  // else if(div5) {
  //   console.log('Buzz')
  // }
  // else {
  //   console.log(i)
  // }
}