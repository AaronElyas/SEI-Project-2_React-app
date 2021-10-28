import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

const ShowGenres = () => {

  const [genreData, setGenreData] = useState([])
  const history = useHistory()

  const imageArray = ['💰', '🏘', '🎥', 'assets/tech.jpg', 'assets/crime.jpg', 'assets/arts.jpg', '/assets/business.jpg',
    '/assets/comedy.jpg', '/assets/education.jpg', '/assets/fiction.jpg', '/assets/gov.jpg', '/assets/fitness.jpg', '/assets/history.jpg', '/assets/fam.jpg',
    '/assets/leisure.jpg', '/assets/music.jpg', '/assets/news.jpg', '/assets/religion.jpg', '/assets/science.jpg', '/assets/culture.jpg', '/assets/sports.jpg']

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: { genres } } = await axios.get('https://listen-api.listennotes.com/api/v2/genres?top_level_only=1', {
          headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
        })
        setGenreData(genres)
        console.log(genres)
      } catch {
        console.warn('failure to get API data')
      }
    }
    getData()
  }, [])

  // const handleClick = (event) => {
  //   console.log(event.target.value)
  //   history.push(`/podcastshow/${event.target.value}`)
  // }


  return (
    genreData.map((item, index) => {
      return (
        <div key={item.id} className="column is-one-third-desktop is-one-half-tablet">
          <Link to={{ pathname: '/genrerecommendations', state: item.id }}>
            <div className="card">
              <div className="card-image">
                <span role="img" aria-label="logo" className="title is-flex is-justify-content-center">
                  <p className='emoji'>{imageArray[index]}</p>
                </span>
              </div>
              <div className='card-footer'>
                <h3 className='card-footer-item has-text-weight-bold'>{item.name}</h3>
              </div>
            </div>
          </Link >
        </div>
      )
    })
  )
}

export default ShowGenres

// value={item.id} onClick={handleClick}