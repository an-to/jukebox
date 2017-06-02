import {combineReducers} from 'redux'

import searchResults from './searchResults'
import showPlaylist from './showPlaylist'

export default combineReducers({
  searchResults,
  showPlaylist
})
