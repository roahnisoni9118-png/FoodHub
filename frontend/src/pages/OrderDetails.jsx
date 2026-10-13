import './OrderDetails.css'
import {
  CheckCircle,
  Clock3,
  MapPin,
  Package
} from 'lucide-react'

function OrderDetails() {
  return (
    <div className="order-details-page">

      <div className="order-details-container">

        <div className="order-details-header">
          <div>
            <h1>Order Details</h1>
            <p>Order #FH10245</p>
          </div>

          <span className="order-details-status">
            Delivered
          </span>
        </div>


        {/* Restaurant */}
        <section className="order-details-card">

          <h2>Spice Garden</h2>

          <p className="restaurant-location">
            <MapPin size={16} />
            Indiranagar, Bangalore
          </p>

        </section>


        {/* Ordered Items */}
        <section className="order-details-card">

          <h2>Ordered Items</h2>

          <div className="ordered-item">

            <img
              src="/src/assets/images/paneertikka.png"
              alt="Paneer Tikka"
            />

            <div className="ordered-item-info">
              <h3>Paneer Tikka</h3>
              <p>Quantity: 1</p>
            </div>

            <strong>₹220</strong>

          </div>

        </section>


        {/* Order Status */}
        <section className="order-details-card">

          <h2>Order Status</h2>

          <div className="status-timeline">

            <div className="timeline-item completed">

              <div className="timeline-icon">
                <CheckCircle size={20} />
              </div>

              <div>
                <h3>Order Delivered</h3>
                <p>Your order has been delivered successfully.</p>
              </div>

            </div>


            <div className="timeline-item completed">

              <div className="timeline-icon">
                <Package size={20} />
              </div>

              <div>
                <h3>Out for Delivery</h3>
                <p>Your order was on the way.</p>
              </div>

            </div>


            <div className="timeline-item completed">

              <div className="timeline-icon">
                <Clock3 size={20} />
              </div>

              <div>
                <h3>Preparing</h3>
                <p>Restaurant was preparing your order.</p>
              </div>

            </div>


            <div className="timeline-item completed">

              <div className="timeline-icon">
                <CheckCircle size={20} />
              </div>

              <div>
                <h3>Order Placed</h3>
                <p>Your order was successfully placed.</p>
              </div>

            </div>

          </div>

        </section>


        {/* Delivery Address */}
        <section className="order-details-card">

          <h2>Delivery Address</h2>

          <div className="delivery-address-details">

            <MapPin size={20} />

            <div>
              <h3>Home</h3>
              <p>
                123, Gomti Nagar, Lucknow,
                Uttar Pradesh
              </p>
            </div>

          </div>

        </section>


        {/* Bill */}
        <section className="order-details-card bill-details">

          <h2>Bill Details</h2>

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

          <div className="bill-total">
            <span>Total Paid</span>
            <span>₹280</span>
          </div>

        </section>

      </div>

    </div>
  )
}

export default OrderDetails