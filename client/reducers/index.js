import {combineReducers} from 'redux'

import searchResults from './searchResults'
import currentTrack from './currentTrack'

export default combineReducers({
  searchResults,
  currentTrack
})
