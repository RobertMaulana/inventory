const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../models");

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res) => {
  db.Product
    .findAll(
      {where: {nama_product:{$like: `%${req.body.search_product}%`}}}
    )
    .then((product) => {
      db.Product
        .findAll()
        .then((data) => {
            res.render("data-product", {data: product})
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
