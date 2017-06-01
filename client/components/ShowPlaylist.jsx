import React from 'react'

class ShowPlaylist extends React.Component {
  constructor (props) {
    super(props)
    console.log(props.match);

    this.state = {
      id: props.match.params.id,
      songs: []
    }
  }

  componentDidmount () {
    console.log(this.state.id)
  }


  render () {
    return (
      <div>

      </div>
    )
  }
}

export default ShowPlaylist
