import React from 'react'
import { getPlaylists } from '../api.js'

class ListPlaylists extends React.Component {
  constructor() {
    super()
    this.state = {
      playlists: []
    }
  }

  componentDidMount () {
    getPlaylists((err, playlists) => this.setState({playlists}))
  }

  renderPlaylists (playlists) {
    return playlists.map((playlist) => {
      return (
        <div className='row contentList' key={playlist.id}>
          <div className='nine columns'>
            <h4 className='playlistTitle'>{playlist.name}</h4>
          </div>
          <div className='three columns'>
            <div className='description'>{playlist.id}</div>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='container'>
        {this.renderPlaylists(this.state.playlists)}
      </div>
    )
  }
}

export default ListPlaylists
