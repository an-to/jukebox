import React from 'react'

class ShowPlaylist extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      playlistTracks: []
    }
  }

  componentDidMount () {
    console.log(this.state.id)
    dispatch(fetchPlaylistTracks(id))
  }

  render () {
    return (
      <div>
        {console.log(this.state.playlistTracks)}
        hi
      </div>
    )
  }
}

export default ShowPlaylist
