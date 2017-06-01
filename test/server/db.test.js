import test from 'ava'

import app from '../../server/server'
import setupDb from './setup-db'
import db from '../../server/db'

setupDb(test, (knex) => app.set('knex', knex))

// Tracks
test('getTracks gets all tracks', t => {
  return db.getTracks(t.context.connection)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        var actual = result.length
        t.is(actual, 3)
        resolve()
      })
    })
})

test('getTrack gets a single track', t => {
  return db.getTrack(3, t.context.connection)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        t.is(result.nam, 'Wonderwall')
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
  return db.updateTrack(2, trackObj, t.context.connection)
    .then(() => {
      return db.getTrack(2, t.context.connection).first()
        .then((track) => {
          return new Promise((resolve, reject) => {
            t.is(track.name, 'Wonderwall')
            t.is(track.soundcloud_id, 123456)
            t.is(track.name, 'Psychadelica')
            t.is(track.user_id, 12345)
            t.is(track.user_name, 'Liam Gallagher')
            t.is(track.permalink_url, 'http://oasisinet.com')
            t.is(track.artwork_url, 'http://gallery.com')
            t.is(track.stream_url, 'http://streamastream.com')
            t.is(track.streamable, false)
            resolve()
          })
        })
    })
})

test('delteTrack deletes a track', t => {
  return db.deleteUser(3, t.context.connection)
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
    stream_url: 'http://streamastream.com',
    streamable: false
  }
  return db.addTrack(addedTrack, t.context.connection)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res[0], 3)
        resolve()
      })
    })
})
