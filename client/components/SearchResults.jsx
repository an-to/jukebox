import React from 'react'
import {connect} from 'react-redux'


let SearchResults = (props) => {
  let classes = 'searchResults'
  if (props.displaySongs === '') {
    classes = 'searchResults hidden'
  }
  return (
    <div className={classes}>
      {props.searchResults.map((result) =>
       <div className="track row" key={result.id}>
           <div className="trackDescription ten columns">
               <a href={result.permalink_url}><span>{result.title}</span></a>
           </div>
           <div className="trackAction two columns">
               <a href='#'>Add</a>
           </div>
       </div>
        )}
    </div>
  )
}

const mapState2Props = (state) => {
    return {
        searchResults: state.searchResults
    }
}

SearchResults = connect(mapState2Props)(SearchResults)
export default SearchResults
