import React from 'react'

const PodcastShow = ({ data }) => {



  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title title">Podcast Title</div>
      </div>
      <div className="card-image">
        <figure className="image image-is-1by1">
          {/* <img src={podcast.image} alt={podcast.title}></img> */}
        </figure>
      </div>
      <div className="card-content">
        <div>
          <h3 className="has-text-weight-bold subtitle">Publisher</h3>
        </div>
        <div>
          <p className="mt-4">Description</p>
        </div>
        <div>
          <p className="has-text-weight-bold">Country</p>
        </div>
        <div>
          <p className="has-text-weight-bold">Language</p>
        </div>
      </div>
    </div>
  )

}

export default PodcastShow