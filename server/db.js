module.exports = {
  getTracks,
  getTrack,
  updateTrack,
  deleteTrack,
  addTrack
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
