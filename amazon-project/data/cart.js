export let cart

loadFromStorage()

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'))

  if(!cart){
    cart = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2'
      }
    ]
  }
}

function saveToStorage(){
  if(cart.length === 0){
    localStorage.removeItem('cart')
  }
  else{
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}

export function addToCart(productId, quantity){
  let matchingItem
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem
    }
  })

  if(matchingItem) {
    matchingItem.quantity += quantity
  }
  else {
    cart.push({
      productId: productId,
      quantity: quantity,
      deliveryOptionId: '1'
    })
  }

  saveToStorage()
}

export function removeFromCart(productId){
  const newCart = []

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem)
    }
  })

  cart = newCart
  saveToStorage()
  
}

export function calculateCartQuantity(){
  let cartQuantity = 0
  cart.forEach((CartItem) => {
    cartQuantity += CartItem.quantity
  })
  return cartQuantity
}

export function updateQuantity(productId, newQuantity){
  cart.forEach((cartItem) => {
    if(cartItem.productId === productId){
      cartItem.quantity = newQuantity
    }
  })
  saveToStorage()
}

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem
    }
  })
  matchingItem.deliveryOptionId = deliveryOptionId
  saveToStorage()
}

export async function loadCartFetch() {
  const req = await fetch('https://supersimplebackend.dev/cart')
  const text = await req.text()

  console.log(text)
  return text
}

export function loadCart(fun) {
  const xhr = new XMLHttpRequest()

  xhr.addEventListener('load', () => {
    console.log(xhr.response)
    fun()
  })
  
  xhr.open('GET', 'https://supersimplebackend.dev/cart')
  xhr.send()
}