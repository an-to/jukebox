import test from 'ava'
import request from 'supertest'

import app from '../../server/server'
import setupDb from './setup-db'

setupDb(test, (knex) => app.set('knex', knex))

test('example', t => {
  t.pass()
})

// Playlists
test('GET /playlists/:id', t => {
  return request(t.context.app)
    .get('/api/v1/playlists/1')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.id, 1)
        t.is(res.body.name, 'I am a playlist')
        resolve()
      })
    })
})

test('Get /playlists', t => {
  return request(t.context.app)
    .get('/api/v1/playlists')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.length, 3)
        resolve()
      })
    })
})

test('Post /playlists/add', t => {
  return request(t.context.app)
    .post('/api/v1/playlists/add')
    .send({name: 'my awesome playlist'})
    .expect(201)
    .then(() => {
      return t.context.connection('playlists').select()
    })
    .then((playlists) => {
      return new Promise((resolve, reject) => {
        t.is(playlists.length, 4)
        resolve()
      })
    })
})

test('Put /playlists/:id/update', t => {
  return request(t.context.app)
    .put('/api/v1/playlists/2/update')
    .send({id: 2, name: 'an updated playlist'})
    .expect(204)
    .then(() => {
      return t.context.connection('playlists').where('id', 2).first()
    })
    .then((playlist) => {
      return new Promise((resolve, reject) => {
        t.is(playlist.name, 'an updated playlist')
        resolve()
      })
    })
})

test('Deleted /playlists/:id/delete', t => {
  return request(t.context.app)
    .delete('/api/v1/playlists/3/delete')
    .expect(202)
    .then((res) => {
      return t.context.connection('playlists').select()
    })
    .then((playlists) => {
      return new Promise((resolve, reject) => {
        t.is(playlists.length, 2)
        resolve()
      })
    })
})

// Tracks
test('GET /track/:id', t => {
  return request(t.context.app)
    .get('/api/v1/track/2')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.id, 2)
        t.is(res.body.name, 'I am a song')
        t.is(res.body.user_id, 1234)
        t.is(res.body.user_name, 'I am a user')
        t.is(res.body.soundcloud_id, 126777857)
        t.is(res.body.permalink_url, 'http://songsongsong.com')
        t.is(res.body.artwork_url, 'https://i1.sndcdn.com/artworks-000066429805-wjchtx-large.jpg')
        t.is(res.body.genre, 'death metal')
        t.is(res.body.stream_url, 'https://api.soundcloud.com/tracks/126777857/stream')
        t.is(res.body.streamable, false)
        resolve()
      })
    })
})

test('Get /tracks', t => {
  return request(t.context.app)
    .get('/api/v1/tracks')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.length, 3)
        resolve()
      })
    })
})

test('Post /tracks/add', t => {
  const addedTrack = {
    name: 'Wonderwall',
    user_id: 1223456,
    user_name: 'Oasis',
    soundcloud_id: 8989897923,
    permalink_url: 'http://permalink.url',
    artwork_url: 'http://i.am.image/image.jpg',
    genre: 'Britpop',
    stream_url: 'http://streamsomesongs.com',
    streamable: true
  }
  return request(t.context.app)
    .post('/api/v1/tracks/add')
    .send(addedTrack)
    .expect(201)
    .then((res) => {
      return t.context.connection('tracks').select()
    })
    .then((tracks) => {
      return new Promise((resolve, reject) => {
        t.is(tracks.length, 4)
        resolve()
      })
    })
})

test('Put /tracks/:id/update', t => {
  const updatedTrack = {
    name: 'Song 2',
    user_id: 96868,
    user_name: 'Blur',
    soundcloud_id: 83002,
    permalink_url: 'http://updatedpermalink.url',
    artwork_url: 'http://i.am.image/image.jpg',
    genre: 'Glam Folk',
    stream_url: 'http://streamsomeupdatedsongs.com',
    streamable: false
  }
  return request(t.context.app)
    .put('/api/v1/tracks/3/update')
    .send(updatedTrack)
    .expect(204)
    .then(() => {
      return t.context.connection('tracks').where('id', 3).first()
    })
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.name, 'Song 2')
        t.is(res.body.user_id, 96868)
        t.is(res.body.user_name, 'Blur')
        t.is(res.body.soundcloud_id, 83002)
        t.is(res.body.permalink_url, 'http://updatedpermalink.url')
        t.is(res.body.artwork_url, 'http://i.am.image/image.jpg')
        t.is(res.body.genre, 'Glam Folk')
        t.is(res.body.stream_url, 'http://streamsomeupdatedsongs.com')
        t.is(res.body.streamable, false)
        resolve()
      })
    })
})

test('Deleted /tracks/:id/delete', t => {
  return request(t.context.app)
    .delete('/api/v1/tracks/3/delete')
    .expect(202)
    .then((res) => {
      return t.context.connection('tracks').select()
    })
    .then((tracks) => {
      return new Promise((resolve, reject) => {
        t.is(tracks.length, 2)
        resolve()
      })
    })
})

//track_playlist
// test('GET /track_playlist/:id', t => {
//   return request(t.context.app)
//     .get('/api/v1/track_playlist/3')
//     .expect(200)
//     .then((res) => {
//       return new Promise((resolve, reject) => {
//         t.is(res.body.id, 2)
//         t.is(res.body.name, 'I am a song')
//         t.is(res.body.user_id, 1234)
//         t.is(res.body.user_name, 'I am a user')
//         t.is(res.body.soundcloud_id, 126777857)
//         t.is(res.body.permalink_url, 'http://songsongsong.com')
//         t.is(res.body.artwork_url, 'https://i1.sndcdn.com/artworks-000066429805-wjchtx-large.jpg')
//         t.is(res.body.genre, 'death metal')
//         t.is(res.body.stream_url, 'https://api.soundcloud.com/tracks/126777857/stream')
//         t.is(res.body.streamable, false)
//         resolve()
//       })
//     })
// })

test('Get /track_playlist', t => {
  return request(t.context.app)
    .get('/api/v1/track_playlist')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.length, 1)
        resolve()
      })
    })
})

test('Post /track_playlist/add', t => {
  return request(t.context.app)
    .post('/api/v1/track_playlist/add')
    .send({addedTrack})
    .expect(201)
    .then((res) => {
      return t.context.connection('track_playlist').select()
    })
    .then((tracks) => {
      return new Promise((resolve, reject) => {
        t.is(tracks.length, 4)
        resolve()
      })
    })
})

test('Put /track_playlist/:id/update', t => {
  const updatedTrackPlaylist = {
    track_id: 2,
    playlist_id: 3
  }
  return request(t.context.app)
    .put('/api/v1/track_playlist/2/update')
    .send(updatedTrackPlaylist)
    .expect(204)
    .then(() => {
      return t.context.connection('track_playlist').where('id', 2).first()
    })
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.track_id, 2)
        t.is(res.body.playlist_id, 3)
        resolve()
      })
    })
})

test('Deleted /track_playlist/:id/delete', t => {
  return request(t.context.app)
    .delete('/api/v1/track_playlist/3/delete')
    .expect(202)
    .then((res) => {
      return t.context.connection('track_playlist').select()
    })
    .then((tracks) => {
      return new Promise((resolve, reject) => {
        t.is(tracks.length, 2)
        resolve()
      })
    })
})
