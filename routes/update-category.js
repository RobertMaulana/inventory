const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('../models');

router.use(bodyParser.urlencoded({extended: true}))

router.post('/', (req, res) => {
  db.Category
    .update(
      {nama_category: req.body.nama_category},
      {where: {id: parseInt(req.body.id)}}
    )
    .then(()=>{
      res.redirect('/read-category')
    })
    .catch((err)=>{
      res.send(err.message)
    })
})

module.exports = router
