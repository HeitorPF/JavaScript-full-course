import { calculateCartQuantity } from "../../data/cart.js"


export function renderCheckoutHeader() {
  const quantity = calculateCartQuantity()
  document.querySelector('.js-return-to-home-link').innerHTML = `${quantity} items`
}