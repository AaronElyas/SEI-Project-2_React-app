import React from 'react'
// import NavBar from './NavBar'

const Recommendations = ({ formData: { podcasts } }) => { // fomData is a key on the props object, so we are taking the formData property and deconstructing it to get only the podcasts property

  console.log(podcasts)

  return (
    <section className="section">
      <div className="container">
        <div>
          <h1 className="is-size-3 has-text-centered has-text-weight-bold">Your podcast recommendations</h1>
        </div>
        <div className="columns is-multiline">
          {podcasts.map(podcast => {
            return (
              <div key={podcast.id} className="column is-one-quarter-desktop is-one-third-tablet">
                <div className="card">
                  <div className="card-image">
                    <figure className="image image-is-1by1">
                      <img src={podcast.image} alt={podcast.title}></img>
                    </figure>
                  </div>
                  <div className="card-content">
                    <h3 className="has-text-weight-bold">{podcast.title}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )

}

export default Recommendations