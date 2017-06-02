module.exports = {
  getTracks,
  getTrack,
  updateTrack,
  deleteTrack,
  addTrack,
  getPlaylistTracks,
  addPlaylist,
  getPlaylists,
  addToPlaylist
}

// Tracks

function getTracks (connection) {
  return connection('tracks').select()
}

function getTrack (id, connection) {
  return connection('tracks').where('id', id).first()
}

function updateTrack (id, trackObj, connection) {
  return connection('tracks')
    .where('id', id)
    .update(trackObj)
}

function deleteTrack (id, connection) {
  return connection('tracks')
    .where('id', id)
    .del()
}

function addTrack (trackObj, connection) {
  return connection('tracks')
    .insert({
      name: trackObj.title,
      user_id: trackObj.user_id,
      user_name: trackObj.user.username,
      soundcloud_id: trackObj.id,
      permalink_url: trackObj.permalink_url,
      artwork_url: trackObj.artwork_url,
      genre: trackObj.genre,
      stream_url: trackObj.stream_url,
      streamable: trackObj.streamable
    })
}

function addToPlaylist (trackId, playlistId, connection) {
  return connection('track_playlist')
    .insert({
      track_id: trackId[0],
      playlist_id: playlistId
    })
}


// Playlists

function getPlaylistTracks (id, connection) {
  return connection('playlists')
    .where('playlists.id', id)
    .join('track_playlist', 'playlist_id', '=', 'playlists.id')
    .join('tracks', 'tracks.id', '=', 'track_id')
}

function addPlaylist (playlistName, connection) {
  return connection('playlists')
    .insert({
      name: playlistName
    })
}

function getPlaylists (connection) {
  return connection('playlists').select()
}
