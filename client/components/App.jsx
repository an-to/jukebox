import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import SearchContainer from '../containers/SearchContainer'
import Content from './Content'
import ShowPlaylist from './ShowPlaylist'

const App = () => (
  <div className='app'>
    <Header />
    <SearchContainer />
    <Router>
      <span>
        <Route path='/' component={Content} />
        <Route path='/playlist/:id' component={ShowPlaylist} />
      </span>
    </Router>
  </div>
)

export default App
