import './RestaurantDashboard.css'
import {
  ShoppingBag,
  IndianRupee,
  Clock3,
  Utensils,
  TrendingUp,
  Eye
} from 'lucide-react'

function RestaurantDashboard() {
  return (
    <div className="restaurant-dashboard">

      <div className="dashboard-container">

        {/* Header */}
        <div className="dashboard-header">

          <div>
            <h1>Restaurant Dashboard</h1>
            <p>Welcome back, Spice Garden</p>
          </div>

          <span className="restaurant-open-status">
            ● Open
          </span>

        </div>


        {/* Stats */}
        <div className="dashboard-stats">

          <div className="stat-card">
            <div className="stat-icon orange">
              <ShoppingBag size={22} />
            </div>

            <div>
              <span>Total Orders</span>
              <h2>128</h2>
              <p>+12% this month</p>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon green">
              <IndianRupee size={22} />
            </div>

            <div>
              <span>Total Revenue</span>
              <h2>₹28,450</h2>
              <p>+8% this month</p>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon yellow">
              <Clock3 size={22} />
            </div>

            <div>
              <span>Pending Orders</span>
              <h2>6</h2>
              <p>Needs attention</p>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon blue">
              <Utensils size={22} />
            </div>

            <div>
              <span>Menu Items</span>
              <h2>42</h2>
              <p>Active items</p>
            </div>
          </div>

        </div>


        {/* Main Content */}
        <div className="dashboard-grid">

          {/* Recent Orders */}
          <section className="dashboard-card recent-orders">

            <div className="card-header">
              <h2>Recent Orders</h2>

              <button>
                View All
                <Eye size={15} />
              </button>
            </div>


            <div className="dashboard-order">

              <div>
                <h3>Order #FH10246</h3>
                <p>Paneer Tikka × 2</p>
              </div>

              <div className="dashboard-order-right">
                <strong>₹440</strong>
                <span className="pending">Pending</span>
              </div>

            </div>


            <div className="dashboard-order">

              <div>
                <h3>Order #FH10245</h3>
                <p>Butter Chicken × 1</p>
              </div>

              <div className="dashboard-order-right">
                <strong>₹280</strong>
                <span className="preparing">Preparing</span>
              </div>

            </div>


            <div className="dashboard-order">

              <div>
                <h3>Order #FH10244</h3>
                <p>Veg Biryani × 2</p>
              </div>

              <div className="dashboard-order-right">
                <strong>₹360</strong>
                <span className="delivered">Delivered</span>
              </div>

            </div>


            <div className="dashboard-order">

              <div>
                <h3>Order #FH10243</h3>
                <p>Paneer Tikka × 1</p>
              </div>

              <div className="dashboard-order-right">
                <strong>₹220</strong>
                <span className="delivered">Delivered</span>
              </div>

            </div>

          </section>


          {/* Quick Actions */}
          <section className="dashboard-card quick-actions">

            <h2>Quick Actions</h2>

            <button>
              <Utensils size={19} />
              <div>
                <strong>Manage Menu</strong>
                <span>Add or update food items</span>
              </div>
            </button>


            <button>
              <ShoppingBag size={19} />
              <div>
                <strong>Manage Orders</strong>
                <span>View and update orders</span>
              </div>
            </button>


            <button>
              <TrendingUp size={19} />
              <div>
                <strong>View Analytics</strong>
                <span>Check restaurant performance</span>
              </div>
            </button>

          </section>

        </div>

      </div>

    </div>
  )
}

export default RestaurantDashboard