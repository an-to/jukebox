import React from 'react'
import { getPlaylists } from '../api.js'

class ListPlaylists extends React.Component {
  constructor() {
    super()
    this.state = {
      playlists: [],
      viewAddForm: false
    }
  }

  componentDidMount () {
    getPlaylists((err, playlists) => this.setState({playlists}))
  }

  addFormToggle (bool) {
    this.setState({ viewAddForm: bool})
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
        <div className='row textCenter'>
          <button className="pinkB" onClick={this.addFormToggle.bind(this, true)}>Add Playlist</button>
        </div>
        {this.renderPlaylists(this.state.playlists)}
      </div>
    )
  }
}

export default ListPlaylists
