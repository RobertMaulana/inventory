const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('../models')


router.use(bodyParser.urlencoded({extended: true}))

router.get('/', function (req, res) {
  db.Category
    .findAll()
    .then((data) => {
        res.render('read-category', {
          data: data
        })
    })
    .catch((err) => {
      res.send(err.message);
    })
})



module.exports = router
