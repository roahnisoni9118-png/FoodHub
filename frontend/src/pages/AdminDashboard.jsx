import './AdminDashboard.css'
import {
  Users,
  Store,
  ShoppingBag,
  IndianRupee,
  UserPlus,
  ClipboardList,
  Utensils,
  TrendingUp
} from 'lucide-react'

function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      <div className="admin-container">

        {/* Header */}
        <div className="admin-header">

          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage and monitor your FoodHub platform</p>
          </div>

          <span className="admin-role">
            Administrator
          </span>

        </div>


        {/* Statistics */}
        <div className="admin-stats">

          <div className="admin-stat-card">
            <div className="admin-stat-icon orange">
              <Users size={22} />
            </div>

            <div>
              <span>Total Users</span>
              <h2>2,450</h2>
              <p>+12% this month</p>
            </div>
          </div>


          <div className="admin-stat-card">
            <div className="admin-stat-icon green">
              <Store size={22} />
            </div>

            <div>
              <span>Restaurants</span>
              <h2>186</h2>
              <p>8 new this month</p>
            </div>
          </div>


          <div className="admin-stat-card">
            <div className="admin-stat-icon blue">
              <ShoppingBag size={22} />
            </div>

            <div>
              <span>Total Orders</span>
              <h2>8,420</h2>
              <p>+18% this month</p>
            </div>
          </div>


          <div className="admin-stat-card">
            <div className="admin-stat-icon purple">
              <IndianRupee size={22} />
            </div>

            <div>
              <span>Total Revenue</span>
              <h2>₹18.6L</h2>
              <p>+15% this month</p>
            </div>
          </div>

        </div>


        {/* Main Grid */}
        <div className="admin-main-grid">

          {/* Recent Orders */}
          <section className="admin-card">

            <div className="admin-card-header">
              <h2>Recent Orders</h2>

              <button>
                View All
              </button>
            </div>


            <div className="admin-order-row">

              <div>
                <h3>#FH10246</h3>
                <p>Spice Garden • Roshni Soni</p>
              </div>

              <strong>₹440</strong>

              <span className="admin-status delivered">
                Delivered
              </span>

            </div>


            <div className="admin-order-row">

              <div>
                <h3>#FH10245</h3>
                <p>Pizza Palace • Rahul Sharma</p>
              </div>

              <strong>₹599</strong>

              <span className="admin-status preparing">
                Preparing
              </span>

            </div>


            <div className="admin-order-row">

              <div>
                <h3>#FH10244</h3>
                <p>Spice Garden • Priya Singh</p>
              </div>

              <strong>₹360</strong>

              <span className="admin-status pending">
                Pending
              </span>

            </div>

          </section>


          {/* Quick Actions */}
          <section className="admin-card">

            <h2>Quick Actions</h2>

            <div className="admin-actions">

              <button>
                <UserPlus size={19} />
                <div>
                  <strong>Manage Users</strong>
                  <span>View registered users</span>
                </div>
              </button>


              <button>
                <Store size={19} />
                <div>
                  <strong>Manage Restaurants</strong>
                  <span>Review restaurant accounts</span>
                </div>
              </button>


              <button>
                <ClipboardList size={19} />
                <div>
                  <strong>Manage Orders</strong>
                  <span>Monitor all orders</span>
                </div>
              </button>


              <button>
                <Utensils size={19} />
                <div>
                  <strong>Manage Categories</strong>
                  <span>Update food categories</span>
                </div>
              </button>

            </div>

          </section>

        </div>


        {/* Platform Overview */}
        <section className="admin-card platform-overview">

          <div className="admin-card-header">
            <div>
              <h2>Platform Overview</h2>
              <p>Current FoodHub activity</p>
            </div>

            <TrendingUp size={22} />
          </div>


          <div className="overview-items">

            <div>
              <span>Active Users</span>
              <strong>1,842</strong>
            </div>

            <div>
              <span>Active Restaurants</span>
              <strong>164</strong>
            </div>

            <div>
              <span>Orders Today</span>
              <strong>324</strong>
            </div>

            <div>
              <span>Today's Revenue</span>
              <strong>₹84,650</strong>
            </div>

          </div>

        </section>

      </div>

    </div>
  )
}

export default AdminDashboard