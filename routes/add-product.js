const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../models");

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res) => {
  db.Product
    .create({
      productId: req.body.product_id,
      nama_product: req.body.nama_product,
      harga: req.body.harga,
      quantity: req.body.quantity,
      CategoryId: parseInt(req.body.category_id)

    })
    .then(() => {
      res.redirect("/data-product");
    })
    .catch(()=> {
      res.send("error!")
    })
});

module.exports = router
