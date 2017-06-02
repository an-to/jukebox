function showPlaylist (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_PLAYLIST_TRACKS':
      return [
        ...action.playlistTracks
      ]

    default:
      return state
  }
}

export default showPlaylist
