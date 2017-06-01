import React from 'react'
import {connect} from 'react-redux'
import {fetchTracks} from '../actions'


class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      query: ''
    }
  }

  handleChange(e) {
    this.setState({query: e.target.value})
    this.props.dispatch(fetchTracks(this.state.query))
  }

  handleClick() {
    this.props.dispatch(fetchTracks(this.state.query))
  }

 render () {
   return (
      <div>
          <div className='container searchBarWrapper'>
            <div className='row searchBarRow'>
              <input className='searchInput' type='text' placeholder='Search for songs' value={this.state.query} onChange={this.handleChange.bind(this)} />
              <button className='searchSubmit' onClick={this.handleClick.bind(this)}>Go</button>
            </div>
          </div>
     </div>

    )
  }
}

SearchBar = connect()(SearchBar)
export default SearchBar
