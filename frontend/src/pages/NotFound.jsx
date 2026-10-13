import './NotFound.css'
import { Home, ArrowLeft } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="not-found-page">

      <div className="not-found-content">

        <div className="not-found-number">
          404
        </div>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you're looking for doesn't exist
          or may have been moved.
        </p>

        <div className="not-found-actions">

          <Link to="/" className="home-btn">
            <Home size={17} />
            Go to Home
          </Link>

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={17} />
            Go Back
          </button>

        </div>

      </div>

    </div>
  )
}

export default NotFound