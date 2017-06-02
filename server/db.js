module.exports = {
  getTracks,
  getTrack,
  updateTrack,
  deleteTrack,
  addTrack,
  getPlaylistTracks,
  addPlaylist
}

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
    .insert(trackObj)
}

function getPlaylistTracks (id, connection) {
  return connection('playlists')
    .where('playlists.id', id)
    .join('track_playlist', 'playlist_id', '=', 'playlists.id')
}

function addPlaylist (playlistName, connection) {
  return connection('playlists')
    .insert(playlistName)
}
