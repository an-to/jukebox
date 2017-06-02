module.exports = {
  getTracks,
  getTrack,
  updateTrack,
  deleteTrack,
  addTrack,
  addPlaylist,
  getPlaylists
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
    .insert(trackObj)
}

// Playlists

function addPlaylist (playlistName, connection) {
  return connection('playlists')
    .insert({
      name: playlistName
    })
}

function getPlaylists (connection) {
  return connection('playlists').select()
}
