import test from 'ava'
import nock from 'nock'

import * as actions from '../../client/actions'


test.cb('actions.fetchTracks', t => {
  let scope = nock('http://localhost:3000')
    .get('/tracks?q=banana')
    .reply(200, {data: 'ok, received tracks'})

    actions.fetchTracks('banana')((actual) => {
    scope.done()
    t.is(actual.type, 'RECEIVE_TRACKS')
    t.is(actual.searchResults.length, 1)
    t.is(actual.searchResults[0], 'ok, received tracks')
    t.end()

    })
})
