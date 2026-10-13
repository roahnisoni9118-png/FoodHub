import './Orders.css'
import { Clock3, MapPin, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Orders() {
  return (
    <div className="orders-page">

      <div className="orders-container">

        <h1>My Orders</h1>

        {/* Order 1 */}
        <div className="order-card">

          <div className="order-header">

            <div>
              <h2>Spice Garden</h2>
              <p>Order #FH10245</p>
            </div>

            <span className="order-status delivered">
              Delivered
            </span>

          </div>


          <div className="order-content">

            <img
              src="/src/assets/images/paneertikka.png"
              alt="Paneer Tikka"
            />

            <div className="order-info">

              <h3>Paneer Tikka</h3>

              <p>
                1 item
              </p>

              <div className="order-meta">
                <span>
                  <Clock3 size={15} />
                  30 Sep 2026
                </span>

                <span>
                  ₹220
                </span>
              </div>

            </div>

          </div>


          <div className="order-footer">

            <span>
              <MapPin size={15} />
              Delivered to Home
            </span>

            <Link to="/order/1">
              View Details
              <ChevronRight size={16} />
            </Link>

          </div>

        </div>


        {/* Order 2 */}
        <div className="order-card">

          <div className="order-header">

            <div>
              <h2>Pizza Palace</h2>
              <p>Order #FH10231</p>
            </div>

            <span className="order-status preparing">
              Preparing
            </span>

          </div>


          <div className="order-content">

            <div className="order-placeholder">
              🍕
            </div>

            <div className="order-info">

              <h3>Margherita Pizza</h3>

              <p>
                1 item
              </p>

              <div className="order-meta">
                <span>
                  <Clock3 size={15} />
                  1 Oct 2026
                </span>

                <span>
                  ₹299
                </span>
              </div>

            </div>

          </div>


          <div className="order-footer">

            <span>
              <MapPin size={15} />
              Delivering to Home
            </span>

            <Link to="/order/2">
              Track Order
              <ChevronRight size={16} />
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Orders