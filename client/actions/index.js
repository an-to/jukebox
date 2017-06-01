import request from 'superagent'

export const receivePosts = (posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export function fetchTracks (subreddit) {
  return (dispatch) => {
    request
      .get(`/api/${subreddit}`)
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receivePosts(res.body))
      })
  }
}
