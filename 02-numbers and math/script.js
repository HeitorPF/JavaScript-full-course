console.log('\n2a. At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. Use JavaScript to calculate the cost of the order.')
console.log(10 + 3 * 8 + 5)

console.log('\n2b. You’re at a restaurant with 2 friends (3 people in total) and make the same order as 2a. Calculate how much each person pays.')
console.log((10 + 3 * 8 + 5) / 3)

console.log('\n2c. Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).')
console.log((1850 + 2 * 750) / 100)


console.log('\n2d. Calculate a 10% tax for the total in exercise 2c.')
console.log(((1850 + 2 * 750) / 100) * 0.1)

console.log('\n2e. Calculate a 20% tax for the total in 2c (remember that 1% = 1 / 100, so 20% = 20 / 100 = 0.2).')
console.log(((1850 + 2 * 750) / 100) * 0.2)

//Setup: in the Amazon project, go to the home page and add a toaster ($18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster.
//Choose $4.99 shipping for the toaster.

console.log('\n2f. Calculate the cost of the products (before shipping and taxes).')
//Hint: calculate in cents to avoid inaccuracies.
console.log((799 + 1899 + 2095) / 100)

console.log('\n2g. Calculate the Total before tax.')
console.log((799 + 1899 + 2095 + 499) / 100)

console.log('\n2h. Calculate the 10% tax exactly.')
//Hint: use Math.round()
console.log(Math.round((799 + 1899 + 2095 + 499) * 0.1) / 100)

console.log('\n2i. Calculate Order total at the bottom.')
console.log(Math.round((799 + 1899 + 2095 + 499) * 1.1) / 100)

//Finish: after finishing 2i remove the toaster from your cart.

console.log('\n2j. Let’s say we want to always round a number down (2.8 => 2) \nUsing Google or an A.I. tool, search for the code to do this.')
console.log('Using Math.floor()')

console.log('\n2k. Let’s always round a number up (2.2 => 3). Search how to do this.')
console.log('Using Math.ceil()')

//Challenge Exercises
//We’ll use JavaScript to convert temperatures from Celsius (ºC) to Fahrenheit (ºF). The formula is:

//Fahrenheit = (Celsius * 9 / 5) + 32

//Celsius = (Fahrenheit - 32) * 5 / 9

console.log('\n2l. The temperature is 25ºC. Calculate the temperature in Fahrenheit. (77)')
console.log((25 * 9 / 5) + 32)

console.log('\n2m. The temperature is 86ºF. Calculate the temperature in Celsius. (30)')
console.log((86 - 32) * 5 / 9)

console.log('\n2n. The temperature is -5ºC. Calculate the temperature in Fahrenheit. (23)')
console.log((-5 * 9 / 5) + 32)