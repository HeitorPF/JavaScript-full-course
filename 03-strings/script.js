console.log('\n3a. Create the text ‘My name is: ’ as a string.')
console.log('My name is:')

console.log('\n3b. Create your name as a string (for example: \'Simon\').')
console.log('Heitor')

console.log('\n3c. Using concatenation, add the 2 strings from 3a and 3b together to create the text:')
console.log('My name is: ' + 'Heitor')

console.log('\n3d. At a restaurant, you order 1 coffee ($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation, create the text:')
console.log('Total cost: $' + (5 + 3))

console.log('\n3e. Do the same thing as 3d, but use a template string and interpolation.')
console.log(`Total cost: $${(5 + 3)}`)

console.log('\n3f. Display the text from 3e in a popup using alert(...);')
//alert(`Total cost: $${(5 + 3)}`)

console.log('\n3g. You order 1 coffee ($5.99) and 1 bagel ($2.95). Using math, calculate the total cost, and using concatenation, create the text: ‘Total cost: $___’ (hint: calculate in cents to avoid inaccuracies)')
console.log('Total cost: $' + (599 + 295) / 100)

console.log('\n3h. Do the same thing as 3g, but use a template string and interpolation.')
console.log(`Total cost: $${(599 + 295) / 100}`)

console.log('\n3i. Display the text from 3h in a popup.')
//alert(`Total cost: $${(599 + 295) / 100}`)

console.log('\n3j. Using a multi-line string, create the text from 3h and add a line of text underneath: ‘Thank you, come again!’. Display both lines in a popup.')
console.log(`Total cost: $${(599 + 295) / 100}
Thank you, come again!`)

//Challenge Exercises
//Setup: in the Amazon project, update the cart to 2 basketballs ($20.95 each) with $4.99 shipping, and 2 t-shirts ($7.99 each) with $4.99 shipping.

console.log('\n3k. Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88).')
console.log(`Items(${2 + 2}) $${(799 * 2 + 2095 * 2) / 100}`)

console.log('\n3l. Create second line of text: ‘Shipping & handling: $9.98’ (use math).')
console.log(`Shipping & handling: $${(499 + 499) / 100}`)

console.log('\n3m. Create third line: ‘Total before tax: $67.86’ (use math).')
console.log(`Total before tax: $${(799 * 2 + 2095 * 2 + 499 + 499) / 100}`)

console.log('\n3n. Create fourth line of text:‘Estimated tax (10%): $6.79’ (use math and Math.round(...) to calculate the exact number).')
console.log(`Estimated tax (10%): $${Math.round((799 * 2 + 2095 * 2 + 499 + 499) / 10) / 100}`)

//Finish: change the cart back to 1 basketball, 1 t-shirt (both free shipping).