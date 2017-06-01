import request from 'superagent'

export const receiveTracks = (tracks) => {
  return {
    type: 'RECEIVE_TRACKS',
    searchResults: tracks.map(track => track.data)
  }
}

const searchError = (message) => {
  return {
    type: 'SEARCH_ERROR',
    message
  }
}

export function fetchTracks (query)  {
    request
      .get("http://api.soundcloud.com/tracks")
      .query({
        q: query,
        client_id: "MHsPaGAB9flti3yZ6a7bMdgq1GM9n7EL"
      })
      .end((err, res) => {
          if (err) {
           dispatch(searchError(err.message))
         } else {
           dispatch(receiveTracks(res.body))
         }
  }
