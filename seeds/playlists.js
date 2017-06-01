
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlists').insert([
        {id: 1, name: 'cool tunes'}
      ]);
    });
};
