import './Footer.css'
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>FoodHub</h2>
          <p>
            Delicious food delivered to your doorstep.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/restaurants">Restaurants</a>
          <a href="/orders">Orders</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Customer Support</h3>
          <a href="/help">Help Center</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 FoodHub. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer