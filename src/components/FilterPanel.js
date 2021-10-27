import React from 'react'

const FilterPanel = () => {

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

  return (
    <form className='column is-half is-offset-one-quarter box'>
      <h2>Tailored Recommendations</h2>
      <div className='field'>
        <label className='label'>Genre</label>
        <div className='control'>
          <select className='select is-fullwidth'>
            <option>All</option>
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
          <select className='select is-fullwidth'>
            <option>All</option>
            <option>AR - Argentina</option>
            <option>AU - Australia</option>
            <option>BR - Brazil</option>
            <option>CA - Canada</option>
            <option>CN - China</option>
            <option>DE - Germany</option>
            <option>DK - Denmark</option>
            <option>EG - Egypt</option>
            <option>ES - Spain</option>
            <option>FR - France</option>
            <option>GB - United Kingdom</option>
            <option>GH - Ghana</option>
            <option>GR - Greece</option>
            <option>HK - Hong Kong</option>
            <option>ID - Indonesia</option>
            <option>IL - Ireland</option>
            <option>IN - India</option>
            <option>IT - Italy</option>
            <option>JP - Japan</option>
            <option>KR - South Korea</option>
            <option>LT - Lithuania</option>
            <option>MX - Mexico</option>
            <option>MY - Malaysia</option>
            <option>NG - Nigeria</option>
            <option>NL - Netherlands</option>
            <option>NZ - New Zealand</option>
            <option>PH - Philippines</option>
            <option>RU - Russia</option>
            <option>SE - Sweden</option>
            <option>TJ - Tajikistan</option>
            <option>TR - Turkey</option>
            <option>UA - Ukraine</option>
            <option>US - United States</option>
            <option>VN - Vietnam</option>
            <option>ZA - South Africa</option>
            <option>ZW - Zimbabwe</option>
          </select>
        </div>
        {/* {errors.origin && <p className='help is-danger'>{errors.origin}</p>} */}
      </div>
      <div className='field'>
        <label className='label'>Languages</label>
        <div className='control'>
          <select className='select is-fullwidth'>
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
        <label className='label'>Tasting Notes</label>
        <div className='control'>
          <select className='select is-fullwidth'>
            <option>All</option>
            <option value='144'>Personal Finance</option>
            <option value='151'>Locally Focused</option>
          </select>
        </div>
        {/* {errors.tastingNotes && <p className='help is-danger'>{errors.tastingNotes}</p>} */}
      </div>
      <div className='field'>
        <button type='submit' className='button is-fullwidth is-warning'>Button</button>
      </div>
    </form >
  )

}

export default FilterPanel