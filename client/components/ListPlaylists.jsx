import React from 'react'
import { getPlaylists, addPlaylist } from '../api.js'
import { Link } from 'react-router-dom'

class ListPlaylists extends React.Component {
  constructor () {
    super()
    this.state = {
      playlists: [],
      viewAddForm: false,
      newPlaylistName: ''
    }
  }

  componentDidMount () {
    getPlaylists((err, playlists) => this.setState({ playlists }))
  }

  addFormToggle (bool) {
    this.setState({ viewAddForm: bool })
  }

  handleChange (e) {
    this.setState({ newPlaylistName: e.target.value })
  }

  addPlaylist () {
    addPlaylist(this.state.newPlaylistName, () => {
      getPlaylists((err, playlists) => {
        this.setState({
          playlists,
          newPlaylistName: '',
          viewAddForm: false
        })
      })
    })
  }

  renderPlaylists (playlists) {
    return playlists.map((playlist) => {
      return (
        <div className='row contentList' key={playlist.id}>
          <div className='nine columns'>
            <h4 className='playlistTitle'><Link to={`/playlist/${playlist.id}`} className="playlistName">{playlist.name}</Link></h4>
          </div>
          <div className='three columns'>
            <div className='description'>{playlist.id}</div>
          </div>
        </div>
      )
    })
  }

  render () {
    let addForm = <span><input type='text' className='searchInput' placeholder='New playlist name' value={this.state.newPlaylistName} onChange={this.handleChange.bind(this)} />
      <button className='pinkB searchSubmit' onClick={this.addPlaylist.bind(this)} >Add</button></span>
    let addButton = <button className='pinkB' onClick={this.addFormToggle.bind(this, true)}>Add Playlist</button>
    return (
      <div className='container'>
        <div className='row textCenter'>
          { this.state.viewAddForm
          ? addForm
          : addButton }
        </div>
        {this.renderPlaylists(this.state.playlists)}
      </div>
    )
  }
}

export default ListPlaylists
