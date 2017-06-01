var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/tracks', (req, res) => {
  db.getTracks(req.app.get('connection'))
    .then((tracks) => {
      res.json(tracks)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/playlists', (req, res) => {
  db.getPlaylists(req.app.get('connection'))
    .then((playlists) => {
      res.json(playlists)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/tracks/:id', (req, res) => {
  db.getTrack(req.params.id, req.app.get('connection'))
    .then((track) => {
      res.json(track)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/playlists/add', (req, res) => {
  db.addPlaylist(req.body.playlistName, req.app.get('connection'))
    .then(() => {
      res.sendStatus(201)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
