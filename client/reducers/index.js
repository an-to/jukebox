import {combineReducers} from 'redux'

import searchResults from './searchResults'
import currentTrack from './currentTrack'
import showPlaylist from './showPlaylist'

export default combineReducers({
  searchResults,
  showPlaylist,
  currentTrack
})
