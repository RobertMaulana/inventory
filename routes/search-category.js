const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../models");

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res) => {
  db.Category
    .findAll(
      {where: {nama_category:{$like: `%${req.body.search_category.toLowerCase()}%`}}}
    )
    .then((category) => {
      db.Category
        .findAll()
        .then((data) => {
            res.render("read-category", {data: category})
        })
        .catch((err)=> {
          res.send(err.message)
        })
    })
    .catch((err) => {
      res.send(err.message)
    })
});

module.exports = router
