import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test Suit: formatCurrency()')


console.log('Normal test')
if(formatCurrency(2095) === '20.95') {
  console.log('passed')
}
else {
  console.log('failed')
}


console.log('Test with 0')
if(formatCurrency(0) === '0.00') {
  console.log('passed')
}
else {
  console.log('failed')
}


console.log('round up')
if(formatCurrency(2000.5) === '20.01') {
  console.log('passed')
}
else {
  console.log('failed')
}


console.log('Round down')
if(formatCurrency(2000.4) === '20.00') {
  console.log('passed')
}
else {
  console.log('failed')
}