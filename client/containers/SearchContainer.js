import {connect} from 'react-redux'

import SearchBar from '../components/SearchBar'

function mapState2Props (state) {
  return {
    searchResults: state.searchResults
  }
}

export default connect(mapState2Props)(SearchBar)
