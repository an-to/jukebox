function showPlaylist (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_PLAYLIST_TRACKS':
      console.log(action)
      return [
        ...action.playlistTracks
      ]

    default:
      return state
  }
}

export default showPlaylist
