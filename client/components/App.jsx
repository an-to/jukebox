import React from 'react'
import Header from './Header'
import ListPlaylists from './ListPlaylists'
import SearchContainer from '../containers/SearchContainer'

const App = () => (
  <div className='app'>
    <Header />
    <SearchContainer />
    <ListPlaylists />
  </div>
)

export default App
