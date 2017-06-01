import test from 'ava'

import app from '../../server/server'
import setupDb from './setup-db'
import db from '../../server/db'

setupDb(test, (knex) => app.set('knex', knex))

test('addPlaylist adds a playlist', t => {
  const playlistName = {
    name: 'test playlist'
  }
  return db.addPlaylist(playlistName, t.context.db)
    .then((res) => {
        t.is(res[0], 2)
    })
})
