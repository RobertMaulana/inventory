const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../models");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/:product_id", (req, res) => {
  db.Product
    .destroy(
      {where: {productId: parseInt(req.params.product_id)}}
    )
    .then(() => {
      res.redirect("/data-product");
    })
    .catch((err)=> {
      res.send(err)
    })
});

module.exports = router
