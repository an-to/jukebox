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
    .get('/api/v1/playlsits')
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
