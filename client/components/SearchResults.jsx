import React from 'react'
import {connect} from 'react-redux'


let SearchResults = (props) => (
  <div className='searchResults'>
    {props.searchResults.map( (result) =>
     <div className="track">
         <div className="trackThumbnail">
             <a href={result.permalink_url}><img src={result.artwork_url}/></a>
         </div>
         <div className="trackDescription">
             <a href={result.permalink_url}><span>{result.title}</span></a>
         </div>
         <div className="trackAction">
             <a href='#'>Add</a>
         </div>
     </div>
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
