function currentTrack (state = null, action) {
  console.log(action)
  switch (action.type) {
    case 'SET_CURRENT_TRACK':
      return action.currentTrack
    default:
      return state
  }
}

export default currentTrack
