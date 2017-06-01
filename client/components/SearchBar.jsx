import React from 'react'

class SearchBar extends React.Component {
  render () {
    return (
      <div className='container searchBarWrapper'>
        <div className='row searchBarRow'>
          <input className='searchInput' type='text' placeholder='Search for songs' />
          <button className='searchSubmit'>Go</button>
        </div>
      </div>
    )
  }
}

export default SearchBar
