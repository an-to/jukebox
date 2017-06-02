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

  pauseTrack() {
    this.scPlayer.pause()
  }

  playTrack(id) {
    this.scPlayer.play({streamUrl: `https://api.soundcloud.com/tracks/${track_id}/stream`})
  }

  componentDidMount(track_id) {
    this.scPlayer.preLoad(`https://api.soundcloud.com/tracks/${track_id}/stream`)
  }

  render () {
    return (
      <div className='container-fluid headerWrapper'>
        <div className='row headerRow'>
          <div className='five columns'>
            <img src='http://icons.iconarchive.com/icons/troyboydesign/sea-creatures/256/Squid-icon.png' width='200px' />
          </div>
          <div className='seven columns'>
            <div className='trackPlayingName'>
              i'm the title of a song wee wee wee
            </div>
            <div className='player'>
              <ul>
                <li onClick={this.playTrack.bind(this, this.state.track_id)}>play</li>
                <li onClick={this.pauseTrack.bind(this)}>pause</li>
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
