# jukebox
###### An app where you can look up music, create playlists, and play music.



## User stories

- [ ] I, a user, want to be able to search for a song and see a list of results.
- [ ] I want to be able to add those songs to a playlist.
- [ ] I want to be able to look at the playlist and see a list of the tracks in it.
- [ ] I want to be able to create new playlists.
- [ ] I wish to look up using the artist or album too.
- [ ] I wish to be able to actually play the music.



###### Tasks

- Search soundcloud and add to playlist
- Playlist accesses data from database
- Design and front end routes
- Audio widget plays the music (stored/streaming?)




Playlists     Track_Playlist     Track
---------     --------------     ------
id            id                 id
name          track_id           name
              playlist_id


## SoudCloud API:


### SoundCloud Api for Tracks:
https://api.soundcloud.com/tracks?client_id=YOUR_CLIENT_ID?q='bad blood’

client_id : MHsPaGAB9flti3yZ6a7bMdgq1GM9n7EL   //required for authorisation to access soundcloud api

q param which you can use to specify a keyword to search for in fields like title, username, description, etc on soundcloud.

Example: 
  q: ‘bad blood’ || 'sherly-chan'

### Getting Track by id :

http://api.soundcloud.com/tracks/{id}?client_id=xxxxx
example : 
http://api.soundcloud.com/tracks/13158665?client_id=MHsPaGAB9flti3yZ6a7bMdgq1GM9n7EL


### Track Properties :

title : "Say Something (Cover) - A Great Big World ft. Christina Aguilera"
permalink_url : 	"https://soundcloud.com/ashestoashesjc/say-something-piano-a-great"   // link to track on soundcloud id:126777857        // soundcloud id
artwork_url: https://i1.sndcdn.com/artworks-000066429805-wjchtx-large.jpg
genre: “piano”
stream_url : https://api.soundcloud.com/tracks/126777857/stream   // this is used for soundcloud play audio widget
streamable: true    // is it streamable? 


#### Tracks API Reference :
https://developers.soundcloud.com/docs/api/reference#tracks

#### Search API Reference:
https://developers.soundcloud.com/docs/api/guide#search
