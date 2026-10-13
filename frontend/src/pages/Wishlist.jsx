import './Wishlist.css'
import { Heart, Star, ShoppingCart, Trash2 } from 'lucide-react'

function Wishlist() {
  return (
    <div className="wishlist-page">

      <div className="wishlist-container">

        <div className="wishlist-header">
          <div>
            <h1>My Wishlist</h1>
            <p>Your saved food items</p>
          </div>

          <span className="wishlist-count">
            2 Items
          </span>
        </div>


        <div className="wishlist-grid">

          {/* Food Item 1 */}
          <div className="wishlist-card">

            <div className="wishlist-image-wrapper">

              <img
                src="/src/assets/images/paneertikka.png"
                alt="Paneer Tikka"
              />

              <button className="wishlist-heart">
                <Heart size={19} fill="currentColor" />
              </button>

            </div>


            <div className="wishlist-info">

              <h2>Paneer Tikka</h2>

              <p className="wishlist-restaurant">
                Spice Garden
              </p>

              <div className="wishlist-meta">

                <span className="wishlist-rating">
                  <Star size={14} fill="currentColor" />
                  4.5
                </span>

                <span>₹220</span>

              </div>


              <div className="wishlist-actions">

                <button className="add-cart-btn">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>

                <button className="delete-wishlist-btn">
                  <Trash2 size={17} />
                </button>

              </div>

            </div>

          </div>


          {/* Food Item 2 */}
          <div className="wishlist-card">

            <div className="wishlist-image-wrapper">

              <img
                src="/src/assets/images/butterchicken.png"
                alt="Butter Chicken"
              />

              <button className="wishlist-heart">
                <Heart size={19} fill="currentColor" />
              </button>

            </div>


            <div className="wishlist-info">

              <h2>Butter Chicken</h2>

              <p className="wishlist-restaurant">
                Spice Garden
              </p>

              <div className="wishlist-meta">

                <span className="wishlist-rating">
                  <Star size={14} fill="currentColor" />
                  4.6
                </span>

                <span>₹280</span>

              </div>


              <div className="wishlist-actions">

                <button className="add-cart-btn">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>

                <button className="delete-wishlist-btn">
                  <Trash2 size={17} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Wishlist