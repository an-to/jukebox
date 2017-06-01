
exports.up = function (knex, Promise) {
  return knex.schema.createTable('track_playlist', function (table) {
    table.increments('id').primary()
    table.integer('track_id')
    table.integer('playlist_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('track_playlist')
}
