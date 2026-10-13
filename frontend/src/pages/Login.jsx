import './Login.css'
import { Mail, Lock, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="auth-page">

      <div className="auth-form">

        <h2>Login</h2>

        <p className="auth-subtitle">
          Enter your details to continue
        </p>

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
              placeholder="Enter your password"
            />

            <Eye size={18} className="password-icon" />
          </div>
        </div>


        {/* Options */}
        <div className="login-options">

          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <Link to="/forgot-password">
            Forgot Password?
          </Link>

        </div>


        {/* Login */}
        <button className="auth-btn">
          Login
        </button>


        {/* Register */}
        <p className="auth-switch">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </div>
  )
}

export default Login