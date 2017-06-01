import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import SearchBar from './SearchBar'
import Content from './Content'
import ShowPlaylist from './ShowPlaylist'

const App = () => (
  <div className='app'>
    <Header />
    <SearchBar />
    <Router>
      <Route path='/' component={Content} />
      <Route path='/playlist/:id' component={ShowPlaylist} />
    </Router>
  </div>
)

export default App
