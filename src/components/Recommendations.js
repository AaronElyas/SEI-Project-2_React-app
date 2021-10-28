import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'

const Recommendations = () => { // fomData is a key on the props object, so we are taking the formData property and deconstructing it to get only the podcasts property

  const location = useLocation()
  const history = useHistory()
  const [podcasts, setPodcasts] = useState([])

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
        console.log(err)
      }
    }
    getData()
    // const getData = async () => {
    //   try {
    //     const { data } = await axios.get(props.recommendationsURL,
    //       {
    //         headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
    //       })
    //     console.log(data)
    //     setPodcasts(data)
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    // getData()
  }, [])

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   try {
  //     const { data } = await axios.get(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${genre}&page=2&publisher_region=${country}&language=${language}&sort=listen_score&safe_mode=${excludeExplicitContent}`,
  //       {
  //         headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
  //       })
  //     console.log(data.podcasts)
  //     history.push('/recommendations')
  //     setFormData(data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const handleClick = (event) => {
  //   console.log(event.target.value)
  //   history.push(`/podcastshow/${event.target.dataset.id}`)
  // }


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
                <div className="card" onClick={() => history.push(`/podcastshow/${podcast.id}`)}>
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