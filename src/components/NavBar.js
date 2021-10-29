import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  // const [path, setPath] = useState(null)

  // useEffect(() => {
  //   console.log(window.location.pathname)
  //   setPath(window.location.pathname)
  // }, [])


  return (
    <nav className="navbar is-link">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title is-flex is-align-content-center">
            <Link to="/" className="ear-emoji has-text-white">👂 Poddy</Link>
          </span>
        </div>
        <div className="navbar-end">
          {window.location.pathname === '/randompodcast' ?
            <div></div>
            : < div className="navbar-item">
              <Link to="/randompodcast"><button type='button' className='button is-fullwidth is-rounded is-warning has-text-weight-bold'>Find a random podcast!</button></Link>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar