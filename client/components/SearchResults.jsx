import React from 'react'
import {connect} from 'react-redux'


let SearchResults = (props) => (
  <div className='searchResults'>
      Search Result
    {props.searchResults.map( (result) =>

      <div>{result.title}</div>

     )}
  </div>
)
const mapState2Props = (state) => {
    return {
        searchResults: state.searchResults
    }
}

SearchResults = connect(mapState2Props)(SearchResults)
export default SearchResults
