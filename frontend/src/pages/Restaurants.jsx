import './Restaurants.css'
import { Star, Clock3, Wallet, Heart, MapPin } from 'lucide-react'

function Restaurants() {
  return (
    <div>

      {/* Restaurant Hero */}
      <section className="restaurants-hero">
        <div className="restaurants-hero-content">
          <h1>All Restaurants</h1>
          <span>
            Explore the best restaurants and discover your next favorite meal.
          </span>
        </div>
      </section>


      {/* Restaurant Content */}
      <section className="restaurant-content">

        {/* Filter Sidebar */}
        <aside className="filter-sidebar">

          <h2>Filters</h2>

          <div className="filter-group">
            <h3>Cuisine</h3>

            <label>
              <input type="checkbox" />
              Indian
            </label>

            <label>
              <input type="checkbox" />
              Chinese
            </label>

            <label>
              <input type="checkbox" />
              Italian
            </label>

            <label>
              <input type="checkbox" />
              Fast Food
            </label>
          </div>


          <div className="filter-group">
            <h3>Rating</h3>

            <label>
              <input type="radio" name="rating" />
              4★ & above
            </label>

            <label>
              <input type="radio" name="rating" />
              3★ & above
            </label>

            <label>
              <input type="radio" name="rating" />
              2★ & above
            </label>
          </div>


          <div className="filter-group">
            <h3>Price Range</h3>

            <label>
              <input type="radio" name="price" />
              Under ₹200
            </label>

            <label>
              <input type="radio" name="price" />
              ₹200 - ₹400
            </label>

            <label>
              <input type="radio" name="price" />
              ₹400 - ₹600
            </label>

            <label>
              <input type="radio" name="price" />
              Above ₹600
            </label>
          </div>


          <div className="filter-group">
            <h3>Food Type</h3>

            <label>
              <input type="checkbox" />
              Veg
            </label>

            <label>
              <input type="checkbox" />
              Non-Veg
            </label>
          </div>


          <div className="filter-group">
            <h3>Delivery Time</h3>

            <label>
              <input type="radio" name="delivery" />
              Under 30 min
            </label>

            <label>
              <input type="radio" name="delivery" />
              30 - 45 mins
            </label>

            <label>
              <input type="radio" name="delivery" />
              45+ mins
            </label>
          </div>

        </aside>


        {/* Restaurant List */}
        <div className="restaurant-list">

          {/* Spice Garden */}
          <div className="restaurant-card">

            <div className="restaurant-image">
              <img
                src="/src/assets/images/spicegarden.png"
                alt="Spice Garden"
              />

              <Heart className="favorite-icon" size={23} />

              <div className="rating-badge">
                <Star size={14} />
                <span>4.5</span>
                <small>(1.2k+)</small>
              </div>
            </div>

            <div className="restaurant-info">

              <h3>Spice Garden</h3>

              <p className="restaurant-cuisine">
                Indian • North Indian • Chinese
              </p>

              <div className="restaurant-details">

                <span>
                  <Clock3 size={15} />
                  30-40 mins
                </span>

                <span>
                  <Wallet size={15} />
                  ₹300 for two
                </span>

              </div>

              <div className="restaurant-location">
                <MapPin size={15} />
                <span>Indiranagar, Bangalore</span>
              </div>

              <button className="view-restaurants-btn">
                View Restaurant
              </button>

            </div>

          </div>


          {/* Pizza Palace */}
          <div className="restaurant-card">

            <div className="restaurant-image">
              <div className="rating-badge">
                <Star size={14} />
                <span>4.4</span>
                <small>(1.6k+)</small>
              </div>

              <Heart className="favorite-icon" size={23} />
            </div>

            <div className="restaurant-info">

              <h3>Pizza Palace</h3>

              <p className="restaurant-cuisine">
                Italian • Pizza • Fast Food
              </p>

              <div className="restaurant-details">

                <span>
                  <Clock3 size={15} />
                  30-45 mins
                </span>

                <span>
                  <Wallet size={15} />
                  ₹400 for two
                </span>

              </div>

              <div className="restaurant-location">
                <MapPin size={15} />
                <span>Whitefield, Bangalore</span>
              </div>

              <button className="view-restaurants-btn">
                View Restaurant
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Restaurants