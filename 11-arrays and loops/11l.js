function minMax(nums) {
  let min = undefined
  let max = undefined
  for(let i = 0; i < nums.length; i++) {
    if(i === 0) {
      min = nums[0]
      max = nums[0]
    }
    else {
      if(nums[i] > max) {
        max = nums[i]
      }
      if(nums[i] < min) {
        min = nums[i]
      }
    }
  }

  return {
    max: max,
    min: min
  }
}

const array1 = [1, -3, 5]
const array2 = [-2, 3, -5, 7, 10]

console.log(array1)
console.log(minMax(array1))
console.log(array2)
console.log(minMax(array2))