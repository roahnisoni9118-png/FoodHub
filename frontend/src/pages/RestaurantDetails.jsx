import './RestaurantDetails.css'
import { Star, Clock3, Wallet, MapPin, Heart, ArrowLeft } from 'lucide-react'

function RestaurantDetails() {
  return (
    <div className="restaurant-detail-page">

      {/* Restaurant Banner */}
      <section className="restaurant-detail-banner">
        <img
          className="restaurant-detail-image"
          src="/src/assets/images/spicegarden.png"
          alt="Spice Garden"
        />

        <button className="back-btn">
          <ArrowLeft size={20} />
        </button>

        <button className="detail-favorite-btn">
          <Heart size={21} />
        </button>
      </section>


      {/* Restaurant Information */}
      <section className="restaurant-info-header">

        <div className="restaurant-title-section">

          <h1>Spice Garden</h1>

          <div className="restaurant-rating">
            <Star size={16} />
            <span>4.5</span>
            <small>(1.2k+)</small>
          </div>

        </div>


        <p className="restaurant-cuisine">
          Indian • North Indian • Chinese
        </p>


        <div className="restaurant-meta">

          <span>
            <Clock3 size={17} />
            30-40 mins
          </span>

          <span>
            <Wallet size={17} />
            ₹300 for two
          </span>

          <span>
            <MapPin size={17} />
            Indiranagar, Bangalore
          </span>

        </div>


        <button className="view-menu-btn">
          View Menu
        </button>

      </section>


      {/* About Restaurant */}
      <section className="restaurant-about">

        <h2>About Spice Garden</h2>

        <p>
          Spice Garden brings you the authentic taste of India with a modern
          touch. From rich curries to flavorful biryanis, every dish is
          prepared with fresh ingredients and traditional spices.
        </p>

      </section>


      {/* Menu */}
      <section className="restaurant-menu">

        <h2>Food Menu</h2>

        <div className="menu-categories">
          <button className="active">All</button>
          <button>Starters</button>
          <button>Main Course</button>
          <button>Biryani</button>
          <button>Beverages</button>
          <button>Desserts</button>
        </div>


        <div className="menu-items">

          <div className="menu-item">
            <div>
              <h3>Paneer Tikka</h3>
              <p>₹220</p>
              <p className='menu-description'>Grilled cottage cheese with aromatic spices.</p>
            </div>
            <button className='add-btn'>Add</button>
            <img 
            className='food-image'
            src="/src/assets/images/paneertikka.png" 
            alt="Paneer Tikka"
            />
          </div>

          <div className="menu-item">
            <div>
              <h3>Butter Chicken</h3>
              <p>₹280</p>
              <p className='menu-description'>Creamy tomato-based chicken curry.</p>
            </div>
            <button className='add-btn'>Add</button>
            <img 
            className='food-image'
            src="/src/assets/images/butterchicken.png"
            alt="Butter Chicken"
            />
          </div>

        </div>

      </section>

    </div>
  )
}

export default RestaurantDetails