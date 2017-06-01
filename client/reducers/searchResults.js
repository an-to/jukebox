function searchResults (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_TRACKS':
    console.log(action)
      return [
        ...action.searchResults
      ]

    default:
      return state
  }
}

export default searchResults
