import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ShowGenres = () => {

  const [genreData, setGenreData] = useState([])

  const emojisObject = {
    144: '💵',
    151: '🏘',
    68: '🎥',
    127: '💻',
    135: '🔎',
    134: '🎼',
    99: '📰',
    69: '🙏',
    107: '🔬',
    122: '🌍',
    77: '🏀',
    93: '💼',
    133: '🎭',
    111: '🎓',
    168: '📚',
    117: '⚖️',
    88: '❤️‍🩹',
    125: '🏛',
    132: '🍼',
    82: '🛀',
    100: '🎨',
  }


  useEffect(() => {
    const getData = async () => {
      try {
        const { data: { genres } } = await axios.get('https://listen-api.listennotes.com/api/v2/genres?top_level_only=1', {
          headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
        })
        console.log(genres)
        setGenreData(genres)
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
    genreData.map((item) => {
      return (
        // <div key={item.id} className="columns is-multiline">
        <div key={item.id} className="column is-one-third-desktop is-one-half-tablet">
          <Link to={{ pathname: '/genrerecommendations', state: item.id }}>
            <div className="card">
              <div className="card-image">
                <span role="img" aria-label="logo" className="title is-flex is-justify-content-center">
                  <p className='emoji'>{emojisObject[item.id]}</p>
                </span>
              </div>
              <div className='card-footer'>
                <h3 className='card-footer-item has-text-weight-bold'>{item.name}</h3>
              </div>
            </div>
          </Link >
        </div>
        // </div>
      )
    })
  )
}

export default ShowGenres

// value={item.id} onClick={handleClick}