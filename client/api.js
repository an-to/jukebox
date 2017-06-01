import request from 'superagent'

export function getPlaylists (callback) {
  request
    .get('/api/v1/playlists')
    .end((err, res) => {
        callback(err, res.body)
    })
}
