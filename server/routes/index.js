var express = require('express')
var router = express.Router()
var request = require('superagent')

var db = require('../db')

router.get('/', (req, res) => {
  res.send('we have an app')
})
