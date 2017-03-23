const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('../models')

router.use(bodyParser.urlencoded({extended: true}))

router.get('/:id', (req, res) => {
  db.Category
    .destroy(
      {where: {id: req.params.id}}
    )
    .then(() => {
      res.redirect('/read-category')
    })
    .catch((err) => {
      res.send(err.message);
    })
})



module.exports = router;
