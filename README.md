# SEI Project 2: Poddy

## Contents
* [Deployed Project Link](https://github.com/sapphire-p/SEI-Project-2_React-app#deployed-project-link)
* [The Brief](https://github.com/sapphire-p/SEI-Project-2_React-app#the-brief)
* [Overview and Concept](https://github.com/sapphire-p/SEI-Project-2_React-app#overview-and-concept)
* [Code Installation](https://github.com/sapphire-p/SEI-Project-2_React-app#code-installation)
* [Technologies Used](https://github.com/sapphire-p/SEI-Project-2_React-app#technologies-used)
* [Planning](https://github.com/sapphire-p/SEI-Project-2_React-app#planning)
* [Development Process](https://github.com/sapphire-p/SEI-Project-2_React-app#tdevelopment-process)
* [Challenges](https://github.com/sapphire-p/SEI-Project-2_React-app#challenges)
* [Wins](https://github.com/sapphire-p/SEI-Project-2_React-app#wins)
* [Future Improvements](https://github.com/sapphire-p/SEI-Project-2_React-app#future-improvements)
* [Key Learnings](https://github.com/sapphire-p/SEI-Project-2_React-app#key-learnings)

## Deployed Project Link

Poddy is a ‘podcast buddy’ - a React app that consumes the [Listen Notes API](https://www.listennotes.com/api/docs/) and provides personalised podcast recommendations to aid audio discovery.

I pair-coded this project with [Matthew Baxendale](https://github.com/mbaxendale22) as part of a 48-hour hackathon challenge.

**This project has been deployed online using Netlify and can be viewed [HERE](https://sei-project-2-react-app-poddy.netlify.app/).**

## The Brief

* **Build a React application** that consumes a **public API**
* **Include several different components**
* **Use a router appropriately**
* **Deploy the project online** so it is accessible to the public
* **Timeframe:** 48 hours

## Overview and Concept

Matthew and I created a podcast recommendation app using React and an external API called Listen Notes. We gained experience making API requests using Axios, testing our routes using Insomnia, configuring a router correctly using React Router DOM, passing data between React components and displaying it effectively using JavaScript, Bulma and CSS.

App features include:
* Ability to discover the top 20 podcasts within 21 different genre categories
* Filter functionality for podcast recommendations by genre, country, language, and with the option to exclude explicit content
* Random podcast recommendation feature
* Individual podcast show page with information on that podcast
* A bright, engaging and accessible UI that makes use of emoji icons and showcases the cover artwork of podcast producers

---

<p align="center">
<img width="700" src="https://user-images.githubusercontent.com/84339614/148825717-d4ae82d7-b026-47a9-850c-082d5ef4d47f.png" alt="app homepage">
</p>

---

<p align="center">
  <img src="https://user-images.githubusercontent.com/84339614/148825738-189d2b0d-20b6-4cf4-9224-584806160e9a.png" height="300" alt="app filter recommendations">
  <img src="https://user-images.githubusercontent.com/84339614/148825734-1ed4044a-6d22-481d-9a2f-88281ce2fadb.png" height="300" alt="app random podcast episode">
</p>

---

<p align="center">
<img width="700" src="https://user-images.githubusercontent.com/84339614/148825746-c00bc96b-8590-4262-9e74-3c493056b501.png" alt="app podcast show page">
</p>

---

## Code Installation

If you would like to explore the code on your local machine, please clone or download this repo then run the following Terminal commands:

* Install all dependencies (using Yarn package manager): `yarn`
* Start the server to run the program in your local environment: `yarn start`

## Technologies Used

* React.js
* React Router DOM
* JavaScript (ES6)
* HTML5
* CSS
* Bulma
* Axios
* Yarn
* Insomnia
* Git / GitHub
* Listen Notes API
* Netlify (deployment)

## Planning

After identifying a shared love of podcasts, Matthew and I went searching for a good podcast API. We found one called Listen Notes that we could gain free access to by subscribing and receiving an API Key.

Once we had the Key, we tested out several different requests in Insomnia to confirm that the API would be a good fit for our project and return usable data that we could display.

![5_Insomnia-Project-2_screenshot](https://user-images.githubusercontent.com/84339614/148827153-973c552b-713d-4534-8c76-a710a6c72cd6.png)

Since time was of the essence in this 48-hour hackathon, we quickly put together some wireframe diagrams on paper, detailing the features and layout of our app and planning the API requests required for each component.

<p align="center">
<img width="350" src="https://user-images.githubusercontent.com/84339614/148827900-c807b715-afd4-43c6-a37b-acf584b2a02b.png" alt="wireframe homepage">
<img width="350" src="https://user-images.githubusercontent.com/84339614/148828032-2c0d598a-70ac-41cb-9e07-ce76321d1eaf.png" alt="wireframe recommendations page">
</p>

<p align="center">
<img width="550" src="https://user-images.githubusercontent.com/84339614/148828032-2c0d598a-70ac-41cb-9e07-ce76321d1eaf.png" alt="wireframe recommendations page">
</p>

<p align="center">
<img width="350" src="https://user-images.githubusercontent.com/84339614/148828150-5f696338-4e48-468c-bd9f-a7e3bbee77db.png" alt="wireframe podcast show">
</p>


## Development Process

Once we had stored the key required to make our API requests in an environment file and used .gitignore to ensure it would not be pushed to GitHub, we began to build out the components.

We wanted our Homepage to have a two-column structure, with clickable podcast genre cards on the right, and a filter panel for more tailored podcast recommendations on the left.

For the genre cards, we created a separate ShowGenres component that we imported into the Homepage component. In the code snippet below from ShowGenres, the Axios request to GET all of the podcast genres data is inside a useEffect that executes when this component is first rendered, and the data received in the response is stored in a piece of state called genreData:

```
 useEffect(() => {
   const getData = async () => {
     try {
       const { data: { genres } } = await axios.get('https://listen-api.listennotes.com/api/v2/genres?top_level_only=1', {
         headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
       })
       setGenreData(genres)
     } catch {
       setErrors(true)
     }
   }
   getData()
 }, [])
```

Then in the return specifying what to render, if the genres data has successfully been received from the API with no errors, the map array method is applied to the genreData in order to display the information for each genre - namely its name and the emoji that corresponds with its ID (as defined in the emojisObject elsewhere in the ShowGenres component):

```
return (
   <>
     {
       genreData.length ?
         genreData.map((item) => {
           return (
             <div key={item.id} className="column is-one-third-desktop is-one-half-tablet">
               <Link to={{ pathname: '/genrerecommendations', state: item.id }}>
                 <div className="card">
                   <div id="emoji-background" className="card-image">
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
           )
         })
         :
         <h2 className="title has-text-centered">
           {errors ? 'Sorry, something went wrong!' : 'Loading...'}
         </h2>
     }
   </>
 )
```

As we built out the other components, such as PodcastShow and RandomPodcast, we followed a similar structure to the above example: making the relevant API request via a useEffect, storing the data to state, then rendering only the desired information by mapping through the piece of state with the data and using dot notation to access only the parts needed. We used Bulma CSS framework classes to display the data in a visually pleasing and accessible way.

The filter that appears on the Homepage was probably the biggest challenge of this project, since due to the limitations of our free plan access to the Listen Notes API, we could not simply make a request to get all of the podcast data, then filter it according to the criteria the user selected via the form.

Instead, the user’s filter selections (such as podcast country, language, genre and so on) inform the actual parameters of the URL endpoint that the request is made to, as this is what the API requires for requests for the top podcasts matching those criteria.

To achieve this, in the Homepage component, the handleChange function is used to update the value of the formData piece of state every time the user makes a selection on the filter panel:

```
 const handleChange = (event) => {
   const newFormData = { ...formData, [event.target.name]: event.target.value }
   setFormData(newFormData)
 }
```

The ‘Find podcasts!’ button on the filter panel is in fact a link (styled as a button) to the /recommendations route that passes the formData to the Recommendations component as a piece of state on the location object:

```
<Link to={{ pathname: '/recommendations', state: formData }} className='button is-fullwidth is-link is-rounded has-text-weight-bold mb-3'>Find podcasts!</Link>
```

Then in the Recommendations component, React’s useLocation Hook is used to access the location object: `const location = useLocation()` and through string interpolation and dot notation the user’s filter selections can be accessed from the piece of state stored on the location object, to make the API request to the correct endpoint:

```
 useEffect(() => {
   const getData = async () => {
     try {
       const { data } = await axios.get(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${location.state.genres}&page=2&publisher_region=${location.state.countries}&language=${location.state.languages}&sort=listen_score&safe_mode=${location.state.excludeExplicitContent}`,
         {
           headers: { 'X-ListenAPI-Key': process.env.REACT_APP_ListenNotesKey },
         })
       setPodcasts(data.podcasts)
     } catch (err) {
       setErrors(true)
     }
   }
   getData()
 }, [])
```

In solving this problem we found another way to pass data between components besides using props, and gained experience using React Hooks.


## Challenges

* **API data limitations** - the API appeared to offer a huge range of different country and language options - so many that we could not include them all. However, after some investigation, we realised that many countries and languages yielded no results, with most of the podcasts being US-based and English language. As a result, a number of filter settings return no results, and there are also occasional errors in the data, with some podcast descriptions containing unwanted HTML markup. These are unfortunate limitations of the API that we were working with, though luckily the impact on user experience is small.
* **API request limitations** - as we were using the free plan of the Listen Notes API, some fields were not available to us and we could not access the entirety of the data in one go, with limits on how many results we could receive back from each GET request. In order to manage this, we set our app up to request and display 20 podcasts at a time, which had the positive consequence of keeping loading times down and not overwhelming the user with too much information in one go, giving the impression of a more curated selection.


## Wins

* **Pair coding** - it was rewarding to practice pair coding, which enabled us to bounce ideas off each other and solve problems in partnership. Having an extra pair of eyes on the code also helps when overcoming errors!
* **Making the most of the API**  - we implemented 5 different requests to our chosen API to receive a variety of different kinds of data back, including all podcast genre categories, best podcasts lists, individual podcast information, and random podcast data. We made effective use of Insomnia to test each request and view the structure of the data sent back in the response, to determine how to access the fields we wanted to use in our React components.
* **React Hooks** - we increased our understanding of key React Hooks, including useState, useEffect, useHistory and useLocation.


## Future Improvements

* Ability to search for podcasts as well as filtering
* Improved display when there are no results that match the criteria - blank at present
* Additional ‘You might like’ feature on the Podcast Show page, with recommendations of similar podcasts
* Improved responsive design on Homepage


## Key Learnings

* **React** - building this app gave me an appreciation of React, in particular its efficient way of rendering only what is needed using the virtual DOM, and its organised structure. I became more familiar with passing data between components and establishing routes using React Router DOM.
* **Reading API documentation** - when selecting the API that we would use for this project, we discovered so many interesting and publicly accessible options, and different styles of documentation. This made me excited about using external APIs in future projects.

