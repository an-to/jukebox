function searchResults (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_TRACKS':
      return [
        ...action.searchResults
      ]

    default:
      return state
  }
}

export default searchResults
