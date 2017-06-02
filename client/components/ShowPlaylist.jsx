import React from 'react'

import {connect} from 'react-redux'
import {fetchPlaylistTracks} from '../actions/index'

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
    return this.props.playlistTracks.map((track) => {
      return (<div className='row contentList' key={track.id}>
         <div className='nine columns'>
           <h4 className='playlistTitle'>{track.name}</h4>
         </div>
         <div className='three columns'>
           <div className='description'>{track.user_name}</div>
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
  console.log(state)
  return {
    playlistTracks: state.showPlaylist
  }
}

ShowPlaylist = connect(mapState2Props)(ShowPlaylist)

export default ShowPlaylist
