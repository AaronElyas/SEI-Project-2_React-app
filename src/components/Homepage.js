import React from 'react'
import NavBar from './NavBar'
import FilterPanel from './FilterPanel'

const Homepage = () => {

  return (
    <>
      <NavBar />
      <section>
        <section className="columns is-one-third is-flex is-align-content-flex-start">
          <section className="column is-one-third">
            <div className="container">
              <FilterPanel />
            </div>
          </section>
          <section className="column is-two-thirds">
            <div className="container">

            </div>
          </section>
        </section>

      </section>

    </>
  )

}

export default Homepage

// Homepage plan

// Make separate NavBar component (child of Homepage) and import in
// Add some basic markup for Filter Panel and Discover By Genre


// Filter Panel

// Set up pieces of state using useState hook
// Add event listeners to dropdown inputs in the Filter Panel Form
// Add event listener to the Filter Panel Form
// Create handleChange function
// Create handleClick function


// Discover By Genre