import {connect} from 'react-redux'

import ShowPlaylist from '../components/ShowPlaylist'

function mapState2Props (state) {
  return {
    playlistTracks: state.playlistTracks
  }
}

export default connect(mapState2Props)(ShowPlaylist)
