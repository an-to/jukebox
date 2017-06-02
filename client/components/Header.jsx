import React from 'react'
import SoundCloudAudio from 'soundcloud-audio'
import { Link } from 'react-router-dom'

import {connect} from 'react-redux'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      trackId: null,
      error: null
    }
    this.scPlayer = new SoundCloudAudio('MHsPaGAB9flti3yZ6a7bMdgq1GM9n7EL')
  }

  pauseTrack () {
    this.scPlayer.pause()
  }

  playTrack (props) {
    this.scPlayer.play({streamUrl: `${props.currentTrack.result.stream_url}`})
  }

  componentDidMount (trackId) {
    this.setState({trackId: 126777857})
  }
  componentWillReceiveProps(props) {
     this.playTrack(props)
  }

  render () {
    return (
      <div className='container-fluid headerWrapper'>
        <div className='row headerRow'>
          <div className='five columns'>
            <Link to="/"><img src='http://icons.iconarchive.com/icons/troyboydesign/sea-creatures/256/Squid-icon.png' width='200px' /></Link>
          </div>
          <div className='seven columns'>
            <div className='trackPlayingName'>
              {this.props.currentTrack.result.title ?  this.props.currentTrack.result.title : this.props.currentTrack.result.name }
            </div>
            <div className='player'>
              <ul>
                <img src='/images/play-arrow.png' className='pinkB' id='playTrack' onClick={this.playTrack.bind(this)} />
                <img src='/images/pause-button.png' className='pinkB' id='pauseTrack' onClick={this.pauseTrack.bind(this)} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapState2Props (state) {
  return {
    currentTrack: state.currentTrack
  }
}

export default connect(mapState2Props)(Header)
