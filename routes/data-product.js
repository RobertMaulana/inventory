const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../models");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {

  db.Product
    .findAll(
      {include: {model: db.Category}}
    )
    .then((data) => {
        res.render("data-product", {data: data})
    })
    .catch((err)=> {
      res.send(err.message)
    })
});

module.exports = router
