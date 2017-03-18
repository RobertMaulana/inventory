const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../models");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  db.Product
    .findAll()
    .then((data) => {
        res.render("data-product", {data: data})
    })
    .catch(()=> {
      res.send("error!")
    })
});

module.exports = router
