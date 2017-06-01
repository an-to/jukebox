import React from 'react'

class Header extends React.Component {
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
          </div>
        </div>
      </div>
    )
  }
}

export default Header
