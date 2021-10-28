import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import Recommendations from './Recommendations'
import ShowGenres from './ShowGenres'

const Homepage = () => {

  // const [genre, setGenre] = useState('')
  // const [country, setCountry] = useState('us')
  // const [language, setLanguage] = useState('English')
  // const [excludeExplicitContent, setExcludeExplicitContent] = useState('1')
  const [formData, setFormData] = useState({ genres: 144 })
  // const [genreData, setGenreData] = useState([])

  // const [recommendationsURL, setRecommendationsURL] = useState(null)

  // const history = useHistory()

  const languages = [
    'Any language',
    'Afrikaans',
    'Arabic',
    'Bengali',
    'Chinese',
    'Danish',
    'Dutch',
    'English',
    'Farsi',
    'French',
    'Gaelic',
    'German',
    'Greek',
    'Hindi',
    'Indonesian',
    'Irish',
    'Italian',
    'Japanese',
    'Korean',
    'Lithuanian',
    'Malay',
    'Malayalam',
    'Portuguese',
    'Russian',
    'Spanish',
    'Swahili',
    'Swedish',
    'Tamil',
    'Thai',
    'Turkish',
    'Ukranian',
    'Urdu',
    'Vietnamese'
  ]

  // const imageArray = ['💰', '🏘', '🎥', 'assets/tech.jpg', 'assets/crime.jpg', 'assets/arts.jpg', '/assets/business.jpg',
  //   '/assets/comedy.jpg', '/assets/education.jpg', '/assets/fiction.jpg', '/assets/gov.jpg', '/assets/fitness.jpg', '/assets/history.jpg', '/assets/fam.jpg',
  //   '/assets/leisure.jpg', '/assets/music.jpg', '/assets/news.jpg', '/assets/religion.jpg', '/assets/science.jpg', '/assets/culture.jpg', '/assets/sports.jpg']

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    console.log(newFormData)
    setFormData(newFormData)
  }

  console.log('location passes the state', formData)

  /* Genres API request: */
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data: { genres } } = await axios.get('https://listen-api.listennotes.com/api/v2/genres?top_level_only=1', {
  //         headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
  //       })
  //       setGenreData(genres)
  //       console.log(genres)
  //     } catch {
  //       console.warn('failure to get API data')
  //     }
  //   }
  //   getData()
  // }, [])


  // const handleSelect = (event) => {
  //   if (event.target.name === 'genres') {
  //     setGenre(event.target.value)
  //   } else if (event.target.name === 'countries') {
  //     setCountry(event.target.value)
  //   } else if (event.target.name === 'languages') {
  //     setLanguage(event.target.value)
  //   } else {
  //     setExcludeExplicitContent(event.target.value)
  //   }
  // }


  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   setRecommendationsURL(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${genre}&page=2&publisher_region=${country}&language=${language}&sort=listen_score&safe_mode=${excludeExplicitContent}`)
  //   // history.push('/recommendations')
  //   setFormData(true)
  // }


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

  // This commented-out useEffect does work to change the URL path to the Recommendations page:

  // useEffect(() => {
  //   if (recommendationsURL === null) {
  //     return
  //   } else {
  //     history.push('/recommendations')
  //   }
  // }, [recommendationsURL])


  return (
    <>
      <section>
        <section className="columns is-one-third is-flex is-align-content-flex-start">
          <section className="column is-one-third">
            <div className="container">
              <form id='filter-form' className='column is-half is-offset-one-quarter box'>
                <div>
                  <h2>Tailored Recommendations</h2>
                </div>
                <div className='field'>
                  <label className='label'>Genre</label>
                  <div className='control'>
                    <select name='genres' className='select is-fullwidth' onChange={handleChange}>
                      <option value='144'>Personal Finance</option>
                      <option value='151'>Locally Focused</option>
                      <option value='68'>TV & Film</option>
                      <option value='127'>Technology</option>
                      <option value='135'>True Crime</option>
                      <option value='134'>Music</option>
                      <option value='99'>News</option>
                      <option value='69'>Religion & Spirituality</option>
                      <option value='107'>Science</option>
                      <option value='122'>Society & Culture</option>
                      <option value='77'>Sports</option>
                      <option value='93'>Business</option>
                      <option value='133'>Comedy</option>
                      <option value='111'>Education</option>
                      <option value='168'>Fiction</option>
                      <option value='117'>Government</option>
                      <option value='88'>Health & Fitness</option>
                      <option value='125'>History</option>
                      <option value='132'>Kids & Family</option>
                      <option value='82'>Leisure</option>
                      <option value='100'>Arts</option>
                    </select>
                  </div>
                  {/* {errors.name && <p className='help is-danger'>{errors.name}</p>} */}
                </div>
                <div className='field'>
                  <label className='label'>Country</label>
                  <div className='control'>
                    <select name='countries' className='select is-fullwidth' onChange={handleChange}>
                      <option value='us'>All</option>
                      <option value='ar'>AR - Argentina</option>
                      <option value='au'>AU - Australia</option>
                      <option value='br'>BR - Brazil</option>
                      <option value='ca'>CA - Canada</option>
                      <option value='cn'>CN - China</option>
                      <option value='de'>DE - Germany</option>
                      <option value='dk'>DK - Denmark</option>
                      <option value='eg'>EG - Egypt</option>
                      <option value='es'>ES - Spain</option>
                      <option value='fr'>FR - France</option>
                      <option value='gb'>GB - United Kingdom</option>
                      <option value='gh'>GH - Ghana</option>
                      <option value='gr'>GR - Greece</option>
                      <option value='hk'>HK - Hong Kong</option>
                      <option value='id'>ID - Indonesia</option>
                      <option value='il'>IL - Ireland</option>
                      <option value='in'>IN - India</option>
                      <option value='it'>IT - Italy</option>
                      <option value='jp'>JP - Japan</option>
                      <option value='kr'>KR - South Korea</option>
                      <option value='lt'>LT - Lithuania</option>
                      <option value='mx'>MX - Mexico</option>
                      <option value='my'>MY - Malaysia</option>
                      <option value='ng'>NG - Nigeria</option>
                      <option value='nl'>NL - Netherlands</option>
                      <option value='nz'>NZ - New Zealand</option>
                      <option value='ph'>PH - Philippines</option>
                      <option value='ru'>RU - Russia</option>
                      <option value='se'>SE - Sweden</option>
                      <option value='tj'>TJ - Tajikistan</option>
                      <option value='tr'>TR - Turkey</option>
                      <option value='ua'>UA - Ukraine</option>
                      <option value='us'>US - United States</option>
                      <option value='vn'>VN - Vietnam</option>
                      <option value='za'>ZA - South Africa</option>
                      <option value='zw'>ZW - Zimbabwe</option>
                    </select>
                  </div>
                  {/* {errors.origin && <p className='help is-danger'>{errors.origin}</p>} */}
                </div>
                <div className='field'>
                  <label className='label'>Languages</label>
                  <div className='control'>
                    <select name='languages' className='select is-fullwidth' onChange={handleChange}>
                      {languages.map(language => {
                        return (
                          <option key={language}>{language}</option>
                        )
                      })}
                    </select>
                  </div>
                  {/* {errors.image && <p className='help is-danger'>{errors.image}</p>} */}
                </div>
                <div className='field'>
                  <label className='label'>Exclude podcasts with explicit content</label>
                  <div className='control'>
                    <select name='excludeExplicitContent' className='select is-fullwidth' onChange={handleChange}>
                      <option value='1'>Yes</option>
                      <option value='0'>No</option>
                    </select>
                  </div>
                  {/* {errors.tastingNotes && <p className='help is-danger'>{errors.tastingNotes}</p>} */}
                </div>
                <div className='field'>
                  <Link to={{ pathname: '/recommendations', state: formData }} className='button is-fullwidth is-warning'>Find podcasts!</Link>
                  {/* <button type='submit' className='button is-fullwidth is-warning'>Find podcasts!</button> */}
                </div>
              </form >
            </div>
          </section>
          <section className="column is-two-thirds">
            <section className="section">
              <div className="container">
                <div>
                  <h1 className="is-size-3 has-text-centered has-text-weight-bold">Discover Podcasts by Genre</h1>
                </div>
                <div className="columns is-multiline">
                  <ShowGenres />
                </div>
              </div>
            </section>
          </section>
        </section>

      </section>

    </>
  )

}

export default Homepage

// Homepage plan

// Make separate NavBar component (child of Homepage) and import in
// Add some basic markup for Filter Panel and Discover By Genre


// Filter Panel

// Set up pieces of state using useState hook
// Add event listeners to dropdown inputs in the Filter Panel Form
// Add event listener to the Filter Panel Form
// Create handleChange function
// Create handleClick function


// Discover By Genre


// <Recommendations formData={formData}/>