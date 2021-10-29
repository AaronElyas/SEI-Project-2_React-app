import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PodcastShow = () => {

  const { id } = useParams()
  const [singlePod, setSinglePod] = useState(null)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://listen-api.listennotes.com/api/v2/podcasts/${id}?next_episode_pub_date=1479154463000&sort=recent_first`, {
          headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
        })
        setSinglePod(data)
      } catch {
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
            <h2 className="title has-text-centered">{singlePod.title}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image is-1by1">
                  <img src={singlePod.image} alt={singlePod.title}></img>
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">🎙 {singlePod.publisher}</h4>
                <p className="is-size-5	has-text-weight-bold">{singlePod.country}</p>
                <p className="is-size-6">{singlePod.language} language</p>
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

export default PodcastShow