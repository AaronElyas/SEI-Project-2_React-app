import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import FilterPanel from './components/FilterPanel'




const App = () => {



  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App


// To access and use the Listen Notes API key, use:
// process.env.REACT_APP_ListenNotesKey