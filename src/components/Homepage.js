import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShowGenres from './ShowGenres'

const Homepage = () => {

  const [formData, setFormData] = useState({ genres: 144 })

  const languages = [
    'All languages',
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

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    // console.log(newFormData)
    setFormData(newFormData)
  }

  // console.log('location passes the state', formData)

  return (
    <>
      <section>
        <section className="columns is-one-third is-flex is-align-content-flex-start">
          <section className="column is-one-third">
            <div className="container">
              <form id='filter-form' className='column is-half is-offset-one-quarter box p-5 has-background-warning'>
                <div>
                  <h2 className="is-size-5 has-text-centered has-text-weight-bold p-2">Get Tailored Podcast Recommendations</h2>
                </div>
                <div className='field pt-4 px-5'>
                  <label className='label'>Genre</label>
                  <div className='control'>
                    <select id='select1' name='genres' className='select is-fullwidth has-text-weight-bold' onChange={handleChange}>
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
                </div>
                <div className='field pt-2 px-5'>
                  <label className='label'>Country</label>
                  <div className='control'>
                    <select id='select2' name='countries' className='select is-fullwidth has-text-weight-bold' onChange={handleChange}>
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
                </div>
                <div className='field pt-2 px-5'>
                  <label className='label'>Languages</label>
                  <div className='control'>
                    <select id='select3' name='languages' className='select is-fullwidth has-text-weight-bold' onChange={handleChange}>
                      {languages.map(language => {
                        return (
                          <option key={language}>{language}</option>
                        )
                      })}
                    </select>
                  </div>
                </div>
                <div className='field pt-2 px-5'>
                  <label className='label'>Exclude explicit content</label>
                  <div className='control'>
                    <select id='select4' name='excludeExplicitContent' className='select is-fullwidth has-text-weight-bold' onChange={handleChange}>
                      <option value='1'>Yes</option>
                      <option value='0'>No</option>
                    </select>
                  </div>
                </div>
                <div className='field pt-3 px-5'>
                  <Link to={{ pathname: '/recommendations', state: formData }} className='button is-fullwidth is-link is-rounded has-text-weight-bold mb-3'>Find podcasts!</Link>
                </div>
              </form >
            </div>
          </section>
          <section className="column is-two-thirds">
            <section className="section">
              <div className="container">
                <div>
                  <h1 className="is-size-3 has-text-centered has-text-weight-bold mb-5">Discover Podcasts by Genre</h1>
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
