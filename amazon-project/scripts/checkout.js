import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
// import '../../18-backend/backend-practice.js'
// import '../data/cart-class.js';

Promise.all([
  loadProductsFetch(),

]).then(() => {
  renderOrderSummary()
  renderPaymentSummary()
  renderCheckoutHeader()
})


// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve()
//   })

// }).then(() => {
//   renderOrderSummary()
//   renderPaymentSummary()
//   renderCheckoutHeader()
// })


// loadProducts(() => {
  // renderOrderSummary()
  // renderPaymentSummary()
  // renderCheckoutHeader()
// })
