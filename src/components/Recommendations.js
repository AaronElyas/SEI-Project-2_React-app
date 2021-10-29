import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'

const Recommendations = () => { // fomData is a key on the props object, so we are taking the formData property and deconstructing it to get only the podcasts property

  const location = useLocation()
  const history = useHistory()
  const [podcasts, setPodcasts] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        // eslint-disable-next-line no-undef
        const { data } = await axios.get(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${location.state.genres}&page=2&publisher_region=${location.state.countries}&language=${location.state.languages}&sort=listen_score&safe_mode=${location.state.excludeExplicitContent}`,
          {
            headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
          })
        setPodcasts(data.podcasts)
      } catch (err) {
        setErrors(true)
      }
    }
    getData()
  }, [])


  return (

    <section className="section">
      <div className="container">
        {podcasts.length ?
          <>
            <div>
              <h1 className="is-size-3 has-text-centered has-text-weight-bold mb-5">Your Podcast Recommendations</h1>
            </div>
            <div className="columns is-multiline">
              {podcasts.map(podcast => {
                return (
                  <div key={podcast.id} className="column is-one-quarter-desktop is-one-third-tablet">
                    <div className="card card-cursor" onClick={() => history.push(`/podcastshow/${podcast.id}`)}>
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
          </>
          :
          <h2 className="title has-text-centered">
            {errors ? 'Sorry, something went wrong!' : 'Loading...'}
          </h2>
        }
      </div>
    </section>

  )

}

export default Recommendations