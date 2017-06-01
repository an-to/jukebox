import test from 'ava'
import nock from 'nock'

import * as actions from '../../client/actions'

test.cb('actions.fetchTracks', t => {
  let scope = nock('http://api.soundcloud.com/')
    .get('/tracks?q=banana&client_id=MHsPaGAB9flti3yZ6a7bMdgq1GM9n7EL')
    .reply(200, ['ok, received tracks'])

  actions.fetchTracks('banana')((actual) => {
    t.is(actual.type, 'RECEIVE_TRACKS')
    t.is(actual.searchResults.length, 1)
    t.is(actual.searchResults[0], 'ok, received tracks')
    scope.done()
    t.end()
  })
})
