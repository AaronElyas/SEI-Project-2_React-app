import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {

  const location = useLocation()
  // const [path, setPath] = useState(null)

  useEffect(() => {

  }, [location.pathname])

  return (
    <nav className="navbar is-link">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title is-flex is-align-content-center">
            <Link to="/" className="ear-emoji has-text-white">👂 Poddy</Link>
          </span>
        </div>
        <div className="navbar-end">
          {location.pathname !== '/randompodcast' && // If both sides of the AND operator are true, this will execute, otherwise if one or more is false(y), everything inside the curly braces will not happen. Here, the second part will always be truthy, so whether it renders or not is dependent on the first part being truthy.
            < div className="navbar-item">
              <Link to="/randompodcast"><button type='button' className='button is-fullwidth is-rounded is-warning has-text-weight-bold'>Find a random podcast!</button></Link>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar