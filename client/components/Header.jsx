import React from 'react'
import SoundCloudAudio from 'soundcloud-audio'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      trackId: null,
      error: null
    }
    this.scPlayer = new SoundCloudAudio('MHsPaGAB9flti3yZ6a7bMdgq1GM9n7EL')
  }

  getTrack(id) {
    this.scPlayer.preload({streamUrl: `https://api.soundcloud.com/tracks/${id}/stream`})
  }

  pauseTrack(id) {
    this.scPlayer.pause()
  }

  playTrack(id) {
    this.scPlayer.play({streamUrl: `https://api.soundcloud.com/tracks/${id}/stream`})
  }

  componentDidMount() {
    this.getTrack(126777857)
  }





  render () {
    return (
      <div className='container-fluid headerWrapper'>
        <div className='row headerRow'>
          <div className='five columns'>
            <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/12992-200.png' />
          </div>
          <div className='seven columns'>
            <div className='trackPlayingName'>
              i'm the title of a song wee wee wee
            </div>
            <div className='player'>
              <ul>
                <li onClick={this.playTrack(126777857)}>play</li>
                <li onClick={this.pauseTrack()}>pause</li>
                <li>vol +</li>
                <li>vol -</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
