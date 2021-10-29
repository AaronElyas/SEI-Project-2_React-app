import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import PodRecommend from './PodRecommend'

const PodcastShow = () => {

  const { id } = useParams()
  const [singlePod, setSinglePod] = useState(null)
  // const [flip, setFlip] = useState(false)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://listen-api.listennotes.com/api/v2/podcasts/${id}?next_episode_pub_date=1479154463000&sort=recent_first`, {
          headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
        })
        console.log(data)
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

// <div className='is-flex is-flex-direction-column is-align-items-center'>
//   <div className="card">
//     <div className="card-header">
//       <div className="card-header-title title">{singlePod.title}</div>
//     </div>
//     <div className="card-image">
//       <figure className="image is-1by1">
//         <img src={singlePod.image} alt={singlePod.title}></img>
//       </figure>
//     </div>
//     <div className="card-content">
//       <div>
//         <h3 className="has-text-weight-bold subtitle">{singlePod.publisher}</h3>
//       </div>
//       <div>
//         <p className="mt-4">{singlePod.description}</p>
//       </div>
//       <div>
//         <p className="has-text-weight-bold">{singlePod.country}</p>
//       </div>
//       <div>
//         <p className="has-text-weight-bold">{singlePod.language}</p>
//       </div>
//     </div>
//   </div>
{/* <button onClick={() => setFlip(true)} className='has-text-black button is-warning is-rounded mt-4'>Show more like this</button>
    {flip && <PodRecommend id={singlePod.id} />} */}
{/* </div> */ }