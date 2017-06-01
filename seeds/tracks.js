
exports.seed = function(knex, Promise) {
  return knex('tracks').del()
    .then(function () {
      return knex('tracks').insert([
        {id: 1, name: 'Wonderwall',user_id: 1223456,user_name: 'Oasis',soundcloud_id: 8989897923,permalink_url: 'http://permalink.url',artwork_url: 'http://i.am.image/image.jpg',genre: 'Britpop',stream_url: 'http://streamsomesongs.com',streamable: true},
        {id: 2, name: 'I am a song', user_id: 1234, user_name: 'I am a user', soundcloud_id: 126777857, permalink_url: 'http://songsongsong.com', artwork_url: 'https://i1.sndcdn.com/artworks-000066429805-wjchtx-large.jpg', genre: 'death metal', stream_url: 'https://api.soundcloud.com/tracks/126777857/stream', streamable: false},
        {id: 3, name: 'Song 1',user_id: 96868,user_name: 'Blur',soundcloud_id: 83002,permalink_url: 'http://updatedpermalink.url',artwork_url: 'http://i.am.image/image.jpg',genre: 'Glam Folk',stream_url: 'http://streamsomeupdatedsongs.com',streamable: false
        }
      ]);
    });
};
