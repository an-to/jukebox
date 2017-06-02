import React from 'react'

import {connect} from 'react-redux'
import {fetchPlaylistTracks, setCurrentTrack} from '../actions/index'

class ShowPlaylist extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      playlistTracks: []
    }
  }

  componentDidMount () {
    this.props.dispatch(fetchPlaylistTracks(this.state.id))
  }

  renderSongs() {
    return this.props.playlistTracks.map((result) => {
      return (<div className='row contentList' key={result.id}>
         <div className='seven columns'>
           <h4 className='playlistTitle'>{result.name}</h4>
         </div>
         <div className='three columns'>
           <div className='description'>{result.user_name}</div>
         </div>
         <div className='three columns'>
           <div className='play'><img onClick={() => this.props.dispatch(setCurrentTrack({result}))} src='/images/play-arrow.png' /></div>
         </div>
       </div>)
    })
  }

  render () {
    return (
      <div className='container'>
        {this.renderSongs()}
      </div>
    )
  }
}

const mapState2Props = (state) => {
  return {
    playlistTracks: state.showPlaylist
  }
}

ShowPlaylist = connect(mapState2Props)(ShowPlaylist)

export default ShowPlaylist
