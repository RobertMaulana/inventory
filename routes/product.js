const express = require('express');
const router = express.Router();
const db = require("../models");

router.get('/', function (req, res) {
  db.Category
    .findAll()
    .then((category) => {
      res.render('input-product', {dataCategory: category});
    })

})

module.exports = router
