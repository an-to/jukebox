import React from 'react'

class Header extends React.Component {
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
          </div>
        </div>
      </div>
    )
  }
}

export default Header
