import React from 'react'
import {connect} from 'react-redux'
import {setCurrentTrack} from '../actions'
import { addSong } from '../api.js'


class SearchResults extends React.Component{
  constructor(props) {
    super(props)
  }

  addSong(result) {
    let playlistId = location.hash.split('/').pop()
    addSong(result, playlistId, console.log)
  }

  render () {

    let classes = 'searchResults'
    let classesAdd = 'addSong hidden'
    if (this.props.displaySongs === '') {
      classes = 'searchResults hidden'
    }

    if (location.hash !== '#/') {
      classesAdd = 'addSong'
    }

    return (
      <div className={classes}>
        {this.props.searchResults.map((result) =>
         <div className="track row" key={result.id}>
             <div className="trackDescription ten columns">
                 <a href={result.permalink_url}><span>{result.title}</span></a>
             </div>
             <div className="trackAction two columns">
               <img onClick={() => this.props.dispatch(setCurrentTrack({result}))} src='/images/play-arrow.png' className="addSong" />
               <button className={classesAdd} onClick={this.addSong.bind(this, result)}>ADD</button>
             </div>
         </div>
          )}
      </div>
    )
  }
}

const mapState2Props = (state) => {
    return {
        searchResults: state.searchResults
    }
}

SearchResults = connect(mapState2Props)(SearchResults)
export default SearchResults
