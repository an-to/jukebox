import React from 'react'

class Content extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row contentList'>
          <div className='nine columns'>
            <h4 className='playlistTitle'>I am a crazy ass playlist</h4>
          </div>
          <div className='three columns'>
            <div className='description'>14/05/2017</div>
          </div>
        </div>
        <div className='row contentList'>
          <div className='nine columns'>
            <h4 className='playlistTitle'>Fun Tunes</h4>
          </div>
          <div className='three columns'>
            <div className='description'>14/05/2017</div>
          </div>
        </div>
        <div className='row contentList'>
          <div className='nine columns'>
            <h4 className='playlistTitle'>Chill and listen to Songs</h4>
          </div>
          <div className='three columns'>
            <div className='description'>14/05/2017</div>
          </div>
        </div>
        <div className='row contentList'>
          <div className='nine columns'>
            <h4 className='playlistTitle'>Music for Eating Chocolate to</h4>
          </div>
          <div className='three columns'>
            <div className='description'>14/05/2017</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content
