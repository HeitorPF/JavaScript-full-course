import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../../18-backend/backend-practice.js'
// import '../data/cart-class.js';

loadProducts(() => {
  renderOrderSummary()
  renderPaymentSummary()
  renderCheckoutHeader()
})
