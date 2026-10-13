import './Checkout.css'
import { MapPin, CreditCard, CheckCircle } from 'lucide-react'

function Checkout() {
  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* LEFT SECTION */}
        <div className="checkout-left">

          {/* Delivery Address */}
          <section className="checkout-card">

            <div className="checkout-section-title">
              <MapPin size={20} />
              <h2>Delivery Address</h2>
            </div>

            <div className="selected-address">

              <div className="address-main">
                <div>
                  <h3>Home</h3>

                  <p>
                    123, Gomti Nagar, Lucknow,
                    Uttar Pradesh
                  </p>
                </div>

                <button className="change-btn">
                  Change
                </button>
              </div>

            </div>

            <button className="add-address-btn">
              + Add New Address
            </button>

          </section>


          {/* Payment Method */}
          <section className="checkout-card">

            <div className="checkout-section-title">
              <CreditCard size={20} />
              <h2>Payment Method</h2>
            </div>

            <div className="payment-options">

              <label className="payment-option selected">

                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />

                <div>
                  <h3>Cash on Delivery</h3>
                  <p>Pay when your order arrives</p>
                </div>

              </label>


              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                />

                <div>
                  <h3>UPI</h3>
                  <p>Pay securely using UPI</p>
                </div>

              </label>


              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                />

                <div>
                  <h3>Credit / Debit Card</h3>
                  <p>Pay using your card</p>
                </div>

              </label>

            </div>

          </section>

        </div>


        {/* RIGHT SECTION */}
        <div className="checkout-right">

          <section className="order-summary">

            <h2>Order Summary</h2>


            {/* Order Item */}
            <div className="checkout-item">

              <img
                src="/src/assets/images/paneertikka.png"
                alt="Paneer Tikka"
              />

              <div className="checkout-item-info">

                <h3>Paneer Tikka</h3>

                <p>Spice Garden</p>

                <span>Qty: 1</span>

              </div>

              <strong>₹220</strong>

            </div>


            {/* Bill */}
            <div className="checkout-bill">

              <div>
                <span>Item Total</span>
                <span>₹220</span>
              </div>

              <div>
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>

              <div>
                <span>Taxes & Charges</span>
                <span>₹20</span>
              </div>

            </div>


            {/* Total */}
            <div className="checkout-total">

              <span>Total</span>
              <span>₹280</span>

            </div>


            {/* Place Order */}
            <button className="place-order-btn">
              <CheckCircle size={18} />
              Place Order
            </button>

            <p className="secure-text">
              Your order details are safe and secure.
            </p>

          </section>

        </div>

      </div>

    </div>
  )
}

export default Checkout