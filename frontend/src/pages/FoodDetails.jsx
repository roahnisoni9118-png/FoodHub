import './FoodDetails.css'
import { Star,Truck,Clock3 } from 'lucide-react'
function FoodDetails() {
  return (
    <div className="food-details-page">

      <div className="food-details-card">

        <div className="food-image-section">
          <img
            src="/src/assets/images/paneertikka.png"
            alt="Paneer Tikka"
          />
        </div>

        <div className="food-info">

          <h1>Paneer Tikka</h1>

          <div className="food-rating">
            <Star size={17} fill="currentColor"/>
            <span>4.5</span>
            <small>(250+ reviews)</small>
          </div>

          <h2>₹220</h2>

          <p className="food-description">
            Delicious and perfectly grilled paneer tikka prepared
            with fresh ingredients and authentic Indian spices.
          </p>

          <p className="restaurant-name">
            From <strong>Spice Garden</strong>
          </p>

          <div className='quantity-section'>
            <span>Quantity</span>
            <div className='quantity-box'>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
          </div>

          <button className="add-to-cart-btn">
            Add to Cart
          </button>
          <div className="delivery-info">
            <div>
                <Truck size={20}/>
                <strong>Free Delivery</strong>
                <span>On orders above ₹499</span>
            </div>

            <div>
                <Clock3 size={20}/>
                <strong>30-40 mins</strong>
                <span>Estimated delivery time</span>
            </div>
          </div>      

        </div>

      </div>

      <section className='related-foods'>
        <h2>You May Also Like</h2>
        <div className='related-food-list'>
            <div className='related-food-card'>
                <img
                src='/src/assets/images/butterchicken.png'
                alt='Butter Chicken'
                />
                <div>
                    <h3>Butter Chicken</h3>
                    <p>₹280</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default FoodDetails