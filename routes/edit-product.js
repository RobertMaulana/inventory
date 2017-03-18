const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../models");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/:productId", (req, res) => {
  db.Product
    .findAll({
      where: {productId: req.params.productId}
    })
    .then((product) => {
      res.render("../views/edit-product", {data: product});
    })
    .catch(()=> {
      res.send("error!")
    })
});

module.exports = router
