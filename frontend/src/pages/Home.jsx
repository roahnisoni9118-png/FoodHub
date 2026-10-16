import './Home.css'
import pizzaImage from '../assets/images/pizza.png'
import burgerImage from '../assets/images/burger.png'
import chineseImage from '../assets/images/chinese.png'
import indianImage from '../assets/images/indian.png'
import dessertsImage from '../assets/images/desserts.png'
import beveragesImage from '../assets/images/beverages.png'
import pizzaPalaceImage from '../assets/images/pizza-palace.png'
import spiceGardenImage from '../assets/images/spice-garden.png'
import urbanBitesImage from '../assets/images/urban-bites.png'
import { Search, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>
            Delicious Food
            <span> Delivered</span> To Your Door
          </h1>

          <p>Great Food, Good Mood</p>

          <div className="hero-search">
            <Search size={21} />

            <input
              type="text"
              placeholder="Search for restaurants or food..."
            />

            <button>Search</button>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <section className="categories">

        <div className="section-heading">
          <div>
            <h2>Popular Categories</h2>
            <p>Explore our wide range of delicious food categories</p>
          </div>

          <Link to="/categories" className="view-all">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="category-list">

          <div className="category-card">
            <div className="category-image">
              <img src={pizzaImage} alt="Pizza" />
            </div>
            <h3>Pizza</h3>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src={burgerImage} alt="Burger" />
            </div>
            <h3>Burger</h3>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src={chineseImage} alt="Chinese food" />
            </div>
            <h3>Chinese</h3>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src={indianImage} alt="Indian food" />
            </div>
            <h3>Indian</h3>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src={dessertsImage} alt="Desserts" />
            </div>
            <h3>Desserts</h3>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src={beveragesImage} alt="Beverages" />
            </div>
            <h3>Beverages</h3>
          </div>

        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="restaurants">

        <div className="section-heading">
          <div>
            <h2>Popular Restaurants</h2>
            <p>Discover the best restaurants near you</p>
          </div>

          <Link to="/restaurants" className="view-all">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="restaurant-list">

          <div className="restaurant-card">
            <div className="restaurant-image">
              <img src={spiceGardenImage} alt="Spice Garden restaurant" />
            </div>
            <div className="restaurant-info">
              <h3>Spice Garden</h3>
              <p>Indian • North Indian</p>
              <span>⭐ 4.5</span>
            </div>
          </div>

          <div className="restaurant-card">
            <div className="restaurant-image">
              <img src={pizzaPalaceImage} alt="Pizza Palace restaurant" />
            </div>

            <div className="restaurant-info">
              <h3>Pizza Palace</h3>
              <p>Italian • Pizza</p>
              <span>⭐ 4.4</span>
            </div>
          </div>

          <div className="restaurant-card">
            <div className="restaurant-image">
              <img src={urbanBitesImage} alt="Urban Bites restaurant" />
            </div>

            <div className="restaurant-info">
              <h3>Urban Bites</h3>
              <p>Fast Food • Burgers</p>
              <span>⭐ 4.6</span>
            </div>
          </div>

        </div>
      </section>

      {/* Top Food Items */}
      <section className="food-items">

        <div className="section-heading">
          <div>
            <h2>Top Food Items</h2>
            <p>Explore our most loved dishes</p>
          </div>

          <Link to="/foods" className="view-all">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="food-list">

          <div className="food-card">

            <div className="food-info">
              <h3>Chicken Biryani</h3>
              <p>Royal Kitchen</p>
              <span>₹249</span>
            </div>
          </div>

          <div className="food-card">

            <div className="food-info">
              <h3>Margherita Pizza</h3>
              <p>Pizza Palace</p>
              <span>₹199</span>
            </div>
          </div>

          <div className="food-card">

            <div className="food-info">
              <h3>Cheese Burger</h3>
              <p>Urban Bites</p>
              <span>₹149</span>
            </div>
          </div>

          <div className="food-card">

            <div className="food-info">
              <h3>Paneer Tikka</h3>
              <p>Spice Garden</p>
              <span>₹229</span>
            </div>
          </div>

        </div>
      </section>

      {/* Special Offers */}
      <section className="offers">
        <div className="offer-banner">

          <div className="offer-content">
            <div className="offer-icon">%</div>

            <div>
              <h3>Exclusive Offers</h3>
              <h2>For You!</h2>
              <p>Get up to 50% OFF on your favorite meals</p>
            </div>
          </div>

          <button className="offer-button">
            Order Now →
          </button>

          <div className="offer-image"></div>
        </div>
      </section>

      {/* Why Choose FoodHub */}
      <section className="why-foodhub">
        <h2>Why Choose FoodHub?</h2>

        <div className="why-list">

          <div className="why-card">
            <div className="why-icon">🚀</div>
            <h3>Fast Delivery</h3>
            <p>
              Get your favorite food delivered quickly to your doorstep.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🛡️</div>
            <h3>Safe & Secure</h3>
            <p>
              Your orders and payments are handled with complete security.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🍽️</div>
            <h3>Best Restaurants</h3>
            <p>
              Discover delicious food from top restaurants around you.
            </p>
          </div>

        </div>
      </section>

      {/* Customer Reviews */}
      <section className="reviews">
        <h2>What Our Customers Say</h2>

        <div className="review-list">

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "Amazing food and super fast delivery. I loved the experience!"
            </p>
            <h3>Priya Sharma</h3>
            <span>FoodHub Customer</span>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "Great variety of restaurants and the ordering process is very easy."
            </p>
            <h3>Rahul Verma</h3>
            <span>FoodHub Customer</span>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★☆</div>
            <p>
              "Good food, good prices and a smooth delivery experience."
            </p>
            <h3>Ananya Singh</h3>
            <span>FoodHub Customer</span>
          </div>

        </div>
      </section>

      {/* App Promotion */}
      <section className="app-promo">
        <div className="app-promo-content">
          <h2>Get the FoodHub App</h2>

          <p>
            Order your favorite food anytime, anywhere with the FoodHub app.
          </p>

          <div className="app-buttons">
            <button>Google Play</button>
            <button>App Store</button>
          </div>
        </div>

        <div className="app-promo-image"></div>
      </section>

    </div>
  )
}

export default Home
