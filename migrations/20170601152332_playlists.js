
exports.up = function (knex, Promise) {
  return knex.schema.createTable('playlists', function (table) {
    table.increments('id').primary()
    table.string('name')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('playlists')
}
