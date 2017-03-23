const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('../models')

router.use(bodyParser.urlencoded({extended: true}))


router.get('/', function (req, res) {
  res.render('input-category')
})







module.exports = router
