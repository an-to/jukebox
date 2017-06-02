import React from 'react'

class ShowPlaylist extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      songs: []
    }
  }

  componentDidMount () {
    console.log(this.state.id)
    api.getSongs(id, (error, songs) => {
      if (error) {
        console.log(error)
      } else {
        this.setState({songs})
      })
  }

  render () {
    return (
      <div>
        hi
      </div>
    )
  }
}

export default ShowPlaylist
