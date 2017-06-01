
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('track_playlist').del()
    .then(function () {
      // Inserts seed entries
      return knex('track_playlist').insert([
        {id: 1, track_id: 1, playlist_id: 1},
        {id: 2, track_id: 2, playlist_id: 1},
        {id: 3, track_id: 3, playlist_id: 1}
      ]);
    });
};
