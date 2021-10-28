import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar is-link">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title is-flex is-align-content-center">
            <Link to="/" className="ear-emoji has-text-white">👂 Poddy</Link>
          </span>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <button type='button' className='button is-fullwidth is-rounded is-warning has-text-weight-bold'>Find a random podcast!</button>
          </div>
          <div className="navbar-item">
            <input type="text" placeholder="Search for podcasts..." className="input is-rounded has-text-weight-bold"></input>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar