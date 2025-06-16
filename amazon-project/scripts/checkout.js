import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../../18-backend/backend-practice.js'
// import '../data/cart-class.js';

async function loadPage() { // função retorna uma Promise
  try {
    await loadProductsFetch()

    await new Promise((resolve) => {
      loadCart(() => {
        resolve()
      })
    })

  }
  catch(error) {
    console.log('Unexpected error. Please try again later (async):' + error)
  }

  renderOrderSummary()
  renderPaymentSummary()
  renderCheckoutHeader()
}

loadPage()

// Terceira maneira, cria um array de promisses que rodam ao mesmo tempo
// Promise.all([
//   loadProductsFetch(),

  // new Promise((resolve) => {
  //   loadCart(() => {
  //     resolve()
  //   })
//   })

// ]).then(() => {
  // renderOrderSummary()
  // renderPaymentSummary()
  // renderCheckoutHeader()
// })

// Segunda maneira, espera cada promise terminar para ir para proxima
// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve()
//   })

// }).then(() => {
//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve()
//     })
//   })

// }).then(() => {
//   renderOrderSummary()
//   renderPaymentSummary()
//   renderCheckoutHeader()
// })



// primeira maneira, com callbacks. Problema, muito nesting
// loadProducts(() => {
  // loadCart(() => {
    // renderOrderSummary()
    // renderPaymentSummary()
    // renderCheckoutHeader()
  // })

// })
