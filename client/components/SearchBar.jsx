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
  }

 render () {
   return (
      <div>
        <input type='text' name='query' value={this.state.query} onChange={this.handleChange.bind(this)}/>
        <button
          onClick={() => this.props.dispatch(fetchTracks(this.state.query))}
          >Go</button>
      </div>
    )
  }
}

SearchBar = connect()(SearchBar)

export default SearchBar
