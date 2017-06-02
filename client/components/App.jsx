import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import ListPlaylists from './ListPlaylists'
import SearchContainer from '../containers/SearchContainer'
import ShowPlaylist from './ShowPlaylist'

const App = () => (
  <div className='app'>
    <Header />
    <SearchContainer />
    <Router>
      <span>
        <Route exact path='/' component={ListPlaylists} />
        <Route path='/playlist/:id' component={ShowPlaylist} />
      </span>
    </Router>
  </div>
)

export default App
