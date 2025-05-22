const add = function() {
  console.log(2+3)
}

runTwice(function() {console.log('12b')})
runTwice(add)

function runTwice(fun){
  fun()
  fun()
}