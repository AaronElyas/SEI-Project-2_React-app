import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RandomPodcast = () => {

  const [singlePod, setSinglePod] = useState(null)

  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://listen-api.listennotes.com/api/v2/just_listen',
          {
            headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
          })
        setSinglePod(data)
      } catch (err) {
        setErrors(true)
      }
    }
    getData()
  }, [])

  return (

    <section className="section">
      <div className="container">
        {singlePod ?
          <div>
            <h2 className="title has-text-centered">{singlePod.podcast.title}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image is-1by1">
                  <img src={singlePod.image} alt={singlePod.title}></img>
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">🎙 {singlePod.podcast.publisher}</h4>
                <p className="is-size-5"><span className="has-text-weight-bold">Suggested Episode:</span> {singlePod.title}</p>
                <hr />
                <p>{singlePod.description}</p>
                <hr />
              </div>
            </div>
          </div>
          :
          <h2 className="title has-text-centered">
            {errors ? 'Sorry, something went wrong!' : 'Loading...'}
          </h2>
        }
      </div>
    </section >

  )

}

export default RandomPodcast