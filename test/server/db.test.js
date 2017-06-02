import test from 'ava'

import app from '../../server/server'
import setupDb from './setup-db'
import db from '../../server/db'

setupDb(test, (knex) => app.set('knex', knex))

// Tracks
test('getTracks gets all tracks', t => {
  return db.getTracks(t.context.db)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        var actual = result.length
        t.is(actual, 3)
        resolve()
      })
    })
})

test('getTrack gets a single track', t => {
  return db.getTrack(3, t.context.db)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        t.is(result.name, 'Song 1')
        resolve()
      })
    })
})

test('updateTrack edits the track correctly', t => {
  let trackObj = {
    name: 'Wonderwall',
    soundcloud_id: 123456,
    genre: 'Psychadelica',
    user_id: 12345,
    user_name: 'Liam Gallagher',
    permalink_url: 'http://oasisinet.com',
    artwork_url: 'http://gallery.com',
    stream_url: 'http://streamastream.com',
    streamable: false
  }
  return db.updateTrack(2, trackObj, t.context.db)
    .then(() => {
      return db.getTrack(2, t.context.db).first()
        .then((track) => {
          return new Promise((resolve, reject) => {
            t.is(track.name, 'Wonderwall')
            t.is(track.soundcloud_id, 123456)
            t.is(track.genre, 'Psychadelica')
            t.is(track.user_id, 12345)
            t.is(track.user_name, 'Liam Gallagher')
            t.is(track.permalink_url, 'http://oasisinet.com')
            t.is(track.artwork_url, 'http://gallery.com')
            t.is(track.stream_url, 'http://streamastream.com')
            resolve()
          })
        })
    })
})

test('deleteTrack deletes a track', t => {
  return db.deleteTrack(3, t.context.db)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res, 1)
        resolve()
      })
    })
})

test('addTrack adds a track', t => {
  const addedTrack = {
    name: 'Wonderwall',
    soundcloud_id: 123456,
    genre: 'Psychadelica',
    user_id: 12345,
    user_name: 'Liam Gallagher',
    permalink_url: 'http://oasisinet.com',
    artwork_url: 'http://gallery.com',
    stream_url: 'http://streamastream.com'
  }
  return db.addTrack(addedTrack, t.context.db)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res[0], 4)
        resolve()
      })
    })
})

// Playlists

test('addPlaylist adds a playlist', t => {
  const playlistName = {
    name: 'test playlist'
  }
  return db.addPlaylist(playlistName, t.context.db)
    .then((res) => {
      t.is(res[0], 2)
    })
})

test('getPlaylists gets all playlists', t => {
  return db.getPlaylists(t.context.db)
    .then(function (result) {
      var actual = result.length
      t.is(actual, 1)
    })
})
