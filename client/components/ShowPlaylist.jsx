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
    console.log(this.props.playlistTracks);
  }

  render () {
    return (
      <div>
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
