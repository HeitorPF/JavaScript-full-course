const product1 = {
  nome: 'Basketball',
  price: 2095
}

const product2 = {
  nome: 'tennis ball',
  price: 1095
}

const product3 = {
  nome: 'tennis ball',
  price: 1095
}

function isSameProduct(product1, product2) {
  if(product1.nome === product2.nome && product1.price === product2.price)
    return true
  else
    return false
}

console.log(isSameProduct(product1, product2))
console.log(isSameProduct(product2, product3))