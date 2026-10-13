import './Profile.css'
import { User, Mail, Phone, MapPin, ShoppingBag, Heart, LogOut, Pencil } from 'lucide-react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-container">

        {/* Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            <User size={42} />
          </div>

          <div className="profile-user-info">
            <h1>Roshni Soni</h1>
            <p>roshni@example.com</p>
          </div>

          <button className="edit-profile-btn">
            <Pencil size={16} />
            Edit Profile
          </button>
        </div>


        {/* Personal Information */}
        <section className="profile-card">

          <h2>Personal Information</h2>

          <div className="profile-details">

            <div className="profile-detail-item">
              <User size={19} />

              <div>
                <span>Full Name</span>
                <p>Roshni Soni</p>
              </div>
            </div>


            <div className="profile-detail-item">
              <Mail size={19} />

              <div>
                <span>Email Address</span>
                <p>roshni@example.com</p>
              </div>
            </div>


            <div className="profile-detail-item">
              <Phone size={19} />

              <div>
                <span>Phone Number</span>
                <p>+91 98765 43210</p>
              </div>
            </div>

          </div>

        </section>


        {/* Account Options */}
        <section className="profile-card">

          <h2>My Account</h2>

          <div className="account-options">

            <Link to="/orders" className="account-option">
              <div className="account-option-icon">
                <ShoppingBag size={20} />
              </div>

              <div>
                <h3>My Orders</h3>
                <p>View your previous and current orders</p>
              </div>
            </Link>


            <Link to="/wishlist" className="account-option">
              <div className="account-option-icon">
                <Heart size={20} />
              </div>

              <div>
                <h3>Wishlist</h3>
                <p>View your saved food and restaurants</p>
              </div>
            </Link>


            <Link to="/address" className="account-option">
              <div className="account-option-icon">
                <MapPin size={20} />
              </div>

              <div>
                <h3>Saved Addresses</h3>
                <p>Manage your delivery addresses</p>
              </div>
            </Link>

          </div>

        </section>


        {/* Logout */}
        <button className="logout-btn">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </div>
  )
}

export default Profile