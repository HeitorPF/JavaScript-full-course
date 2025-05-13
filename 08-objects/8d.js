const product1 = {
  nome: 'Basketball',
  price: 2095
}

const product2 = {
  nome: 'tennis ball',
  price: 1095
}

function comparePrice(product1, product2) {
  if(product1.price < product2.price)
    return product1
  else if(product2.price < product1.price)
    return product2
  else
    return 0
  
}

console.log(comparePrice(product1, product2))