import React from 'react'
import Header from './Header'
import SearchContainer from '../containers/SearchContainer'
import Content from './Content'

const App = () => (
  <div className='app'>
    <Header />
    <SearchContainer />
    <Content />
  </div>
)

export default App
