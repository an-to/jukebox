import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import * as sinon from 'sinon'

import './setup-dom'

import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}

test('Renders player', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.player').exists(), true)
})

test('playTrack function fires when play link clicked', t => {
  const wrapper = mount(<App />)

  const app = wrapper.instance()
  sinon.stub(app, 'playTrack')

  wrapper.find('#playTrack').simulate('click')
  t.is(app.playTrack.called, true)
})

test('pauseTrack function fires when play link clicked', t => {
  const wrapper = mount(<App />)

  const app = wrapper.instance()
  sinon.stub(app, 'pauseTrack')

  wrapper.find('#pauseTrack').simulate('click')
  t.is(app.pauseTrack.called, true)
})
