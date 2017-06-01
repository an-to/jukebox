import React from 'react'
import {connect} from 'react-redux'
import {fetchTracks} from '../actions'

let SearchBar = ({dispatch}) => (
  <button
    onClick={() => dispatch(fetchTracks('bad blood'))}
    >Fetch Tracks</button>
)

SearchBar = connect()(SearchBar)

export default SearchBar
