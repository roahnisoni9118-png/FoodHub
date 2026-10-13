import './Cart.css'
import { MapPin, Trash2, Minus, Plus } from 'lucide-react'

function Cart() {
  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      <div className="cart-container">

        {/* Cart Items */}
        <div className="cart-items">

          <div className="cart-item">

            <img
              src="/src/assets/images/paneertikka.png"
              alt="Paneer Tikka"
            />

            <div className="cart-item-info">
              <h3>Paneer Tikka</h3>
              <p>Spice Garden</p>
              <span>₹220</span>
            </div>

            {/* Quantity */}
            <div className="cart-quantity">
              <button>
                <Minus size={15} />
              </button>

              <span>1</span>

              <button>
                <Plus size={15} />
              </button>
            </div>

            {/* Remove */}
            <button className="remove-btn">
              <Trash2 size={16} />
              Remove
            </button>

          </div>


          {/* Delivery Address */}
          <div className="delivery-address">

            <div className="address-header">

              <h2>
                <MapPin size={19} />
                Delivery Address
              </h2>

              <button>Change</button>

            </div>

            <div className="address-card">
              <h3>Home</h3>

              <p>
                123, Gomti Nagar, Lucknow, Uttar Pradesh
              </p>
            </div>

          </div>

        </div>


        {/* Bill Summary */}
        <div className="cart-summary">

          <h2>Bill Summary</h2>


          {/* Coupon */}
          <div className="coupon-section">

            <input
              type="text"
              placeholder="Enter coupon code"
            />

            <button>
              Apply
            </button>

          </div>


          {/* Bill Details */}
          <div className="bill-row">
            <span>Item Total</span>
            <span>₹220</span>
          </div>

          <div className="bill-row">
            <span>Delivery Fee</span>
            <span>₹40</span>
          </div>

          <div className="bill-row">
            <span>Taxes & Charges</span>
            <span>₹20</span>
          </div>


          {/* Total */}
          <div className="bill-total">
            <span>Total</span>
            <span>₹280</span>
          </div>


          {/* Checkout */}
          <button className="checkout-btn">
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
  )
}

export default Cart