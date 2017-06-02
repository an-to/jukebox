var request = require('superagent')

const receiveTracks = (tracks) => {
  return {
    type: 'RECEIVE_TRACKS',
    searchResults: tracks.map(track => track)
  }
}

const setCurrentTrack = (currentTrack) => {
  return {
    type: 'SET_CURRENT_TRACK',
    currentTrack
  }
}

const searchError = (message) => {
  return {
    type: 'SEARCH_ERROR',
    message
  }
}

function fetchTracks (query) {
  return (dispatch) => {
    request
        .get('http://api.soundcloud.com/tracks')
        .query({
          q: query,
          client_id: 'MHsPaGAB9flti3yZ6a7bMdgq1GM9n7EL',
          limit: 10
        })
        .end((err, res) => {
          if (err) {
            dispatch(searchError(err.message))
          } else {
            dispatch(receiveTracks(res.body))
          }
        })
  }
}

const receivePlaylistTracks = (playlistTracks) => {
  return {
    type: 'RECEIVE_PLAYLIST_TRACKS',
    playlistTracks
  }
}

function fetchPlaylistTracks (id) {
  return (dispatch) => {
    request
        .get(`/api/v1/playlist/${id}`)
        .end((err, res) => {
          if (err) {
            console.log(err.message)
          } else {
            console.log(res.body)
            dispatch(receivePlaylistTracks(res.body))
          }
        })
  }
}

module.exports = {
  receiveTracks,
  searchError,
  fetchTracks,
  fetchPlaylistTracks,
  setCurrentTrack
}
