import { Link } from 'react-router-dom'
import { Search, User, Heart, ShoppingCart } from 'lucide-react'
import logo from '../../assets/images/logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-brand">
        <Link to="/"><img src={logo} alt="FoodHub"/></Link>
      </div>

      <div className="navbar-search">
        <Search size={22} />
        <input
          type="text"
          placeholder="Search for restaurants or food..."
        />
      </div>
      <div className="navbar-links">
        <div className='nav-action'>
        <Link to="/wishlist" className='nav-icon-link'><Heart size={21}/>
            <span>Wishlist</span>
        </Link>

        <Link to="/cart" className='nav-icon-link'><ShoppingCart size={21}/>
          <span>Cart</span>
        </Link>
         </div>

        <Link to="/login" className="login-link">
          <User size={21} />
          <span>Login</span>
        </Link>

        <Link to="/register" className="register-btn">
          Register
        </Link>

      </div>

    </nav>
  )
}

export default Navbar