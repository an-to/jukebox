var request = require('superagent')

const receiveTracks = (tracks) => {
    console.log(tracks)
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

export function addPlaylist (subreddit) {
  return (dispatch) => {
    request
      .get(`/api/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePosts(res.body))
      })
  }
}

 function fetchTracks (query) {
   return (dispatch) => {
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
       })
   }
 }

module.exports = {
    receiveTracks,
    searchError,
    fetchTracks
}
