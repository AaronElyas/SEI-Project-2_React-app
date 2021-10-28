import React from 'react'

const PodcastShow = ({ data }) => {



  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">Podcast Title</div>
      </div>
      <div className="card-image">
        <figure className="image image-is-1by1">
          {/* <img src={podcast.image} alt={podcast.title}></img> */}
        </figure>
      </div>
      <div className="card-content">
        <h3 className="has-text-weight-bold">Publisher</h3>
      </div>
    </div>
  )

}

export default PodcastShow