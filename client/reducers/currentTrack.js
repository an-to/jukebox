function currentTrack (state = {result: {}}, action) {
  switch (action.type) {
    case 'SET_CURRENT_TRACK':
      return action.currentTrack
    default:
      return state
  }
}

export default currentTrack
