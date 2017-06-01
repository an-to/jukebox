
import React from 'react'
import {connect} from 'react-redux'

import SearchBar from '../components/SearchBar'

const SearchBar = (props) => (
    <div className='SearchBar'>
      <p className="welcome"></p>
      <Content data={props.searchResults}/>
    </div>
)
function mapState2Props(state) {
  return {
    searchResults: state.searchResults
  }
}

export default connect(mapState2Props)(SearchBar)
