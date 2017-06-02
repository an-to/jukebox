import {connect} from 'react-redux'

import ShowPlaylist from '../components/ShowPlaylist'

function mapState2Props (state) {
  return {
    songs: state.songs
  }
}

export default connect(mapState2Props)(ShowPlaylist)
