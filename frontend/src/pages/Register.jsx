import './Register.css'
import { User, Mail, Lock, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="auth-page">

      <div className="auth-form">

        <h2>Create Account</h2>

        <p className="auth-subtitle">
          Sign up to start ordering delicious food
        </p>


        {/* Full Name */}
        <div className="form-group">

          <label>Full Name</label>

          <div className="input-wrapper">
            <User size={18} />

            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

        </div>


        {/* Email */}
        <div className="form-group">

          <label>Email Address</label>

          <div className="input-wrapper">
            <Mail size={18} />

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

        </div>


        {/* Password */}
        <div className="form-group">

          <label>Password</label>

          <div className="input-wrapper">
            <Lock size={18} />

            <input
              type="password"
              placeholder="Create a password"
            />

            <Eye size={18} className="password-icon" />
          </div>

        </div>


        {/* Confirm Password */}
        <div className="form-group">

          <label>Confirm Password</label>

          <div className="input-wrapper">
            <Lock size={18} />

            <input
              type="password"
              placeholder="Confirm your password"
            />

            <Eye size={18} className="password-icon" />
          </div>

        </div>


        {/* Register */}
        <button className="auth-btn">
          Create Account
        </button>


        {/* Login */}
        <p className="auth-switch">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  )
}

export default Register