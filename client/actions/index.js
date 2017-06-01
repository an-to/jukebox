var request = require('superagent')

const receiveTracks = (tracks) => {
  return {
    type: 'RECEIVE_TRACKS',
    searchResults: tracks.map(track => track)
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
          client_id: 'MHsPaGAB9flti3yZ6a7bMdgq1GM9n7EL'
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

module.exports = {
  receiveTracks,
  searchError,
  fetchTracks
}
