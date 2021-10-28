import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import NavBar from './NavBar'

const Recommendations = (props) => { // fomData is a key on the props object, so we are taking the formData property and deconstructing it to get only the podcasts property

  console.log(props)

  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(props.recommendationsURL,
          {
            headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
          })
        console.log(data)
        setPodcasts(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
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