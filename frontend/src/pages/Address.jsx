import './Address.css'
import { MapPin, Home, Briefcase, Pencil, Trash2, Plus } from 'lucide-react'

function Address() {
  return (
    <div className="address-page">

      <div className="address-container">

        {/* Header */}
        <div className="address-header">
          <div>
            <h1>My Addresses</h1>
            <p>Manage your saved delivery addresses</p>
          </div>

          <button className="add-address-btn">
            <Plus size={17} />
            Add New Address
          </button>
        </div>


        {/* Address Cards */}
        <div className="address-list">

          {/* Home Address */}
          <div className="saved-address-card">

            <div className="saved-address-top">

              <div className="address-type">
                <div className="address-type-icon">
                  <Home size={20} />
                </div>

                <div>
                  <h2>Home</h2>
                  <span>Default Address</span>
                </div>
              </div>

              <div className="address-actions">
                <button>
                  <Pencil size={16} />
                </button>

                <button>
                  <Trash2 size={16} />
                </button>
              </div>

            </div>


            <div className="saved-address-details">

              <p>
                Roshni Soni
              </p>

              <p>
                123, Gomti Nagar, Lucknow,
                Uttar Pradesh - 226010
              </p>

              <p>
                +91 98765 43210
              </p>

            </div>

          </div>


          {/* Work Address */}
          <div className="saved-address-card">

            <div className="saved-address-top">

              <div className="address-type">
                <div className="address-type-icon">
                  <Briefcase size={20} />
                </div>

                <div>
                  <h2>Work</h2>
                </div>
              </div>

              <div className="address-actions">
                <button>
                  <Pencil size={16} />
                </button>

                <button>
                  <Trash2 size={16} />
                </button>
              </div>

            </div>


            <div className="saved-address-details">

              <p>
                Roshni Soni
              </p>

              <p>
                45, Gomti Nagar Extension, Lucknow,
                Uttar Pradesh - 226010
              </p>

              <p>
                +91 98765 43210
              </p>

            </div>

          </div>


          {/* Add Address Card */}
          <button className="add-address-card">

            <div className="add-address-icon">
              <MapPin size={22} />
            </div>

            <div>
              <h2>Add New Address</h2>
              <p>Add another delivery address</p>
            </div>

            <Plus size={20} />

          </button>

        </div>

      </div>

    </div>
  )
}

export default Address