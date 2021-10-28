import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'

const GenreRecommendations = () => {

  const location = useLocation()
  const history = useHistory()

  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    console.log(location)
    const getData = async () => {
      try {
        // eslint-disable-next-line no-undef
        const { data } = await axios.get(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${location.state}&page=2&publisher_region=us&sort=listen_score&safe_mode=0`,
          {
            headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
          })
        setPodcasts(data.podcasts)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <section className="section">
      <div className="container">
        <div>
          <h1 className="is-size-3 has-text-centered has-text-weight-bold mb-5">Top Recommendations in Genre</h1>
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
      </div>
    </section>
  )


}

export default GenreRecommendations