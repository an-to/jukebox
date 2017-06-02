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
    console.log(this.state.playlistTracks);
  }

  render () {
    return (
      <div>
        {console.log(this.state.playlistTracks)}
        {(this.state.playlistTracks.length > 0) ? this.renderSongs() : console.log('error')}
      </div>
    )
  }
}

const mapState2Props = (state) => {
  return {
    playlistTracks: state.playlistTracks
  }
}

ShowPlaylist = connect(mapState2Props)(ShowPlaylist)

export default ShowPlaylist
