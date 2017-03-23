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
        res.render("order-product", {data: data})
    })
    .catch(()=> {
      res.send("error!")
    })
});

let dataOrder = [];
router.post("/", (req, res) => {
  dataOrder.push({productId: req.body.productId, nama_product: req.body.nama_product, harga: req.body.harga});
  db.Product
    .findOne(
      {where: {productId: req.body.productId}}
    )
    .then((data)=> {
      db.Product
        .update(
          {quantity: Number(data.quantity)-1},
          {where: {productId: req.body.productId}}
        )
        .then(() => {
          console.log("updated");
        })
        .catch((err) => {
          console.log(err.message);
        })
    })
});

router.get("/checkout", (req, res) => {
  dataOrder.forEach((order) => {
    db.Order
      .create(order)
      .then(() => {
      })
      .catch((err)=> {
        res.send(err.message)
      })
  })
  res.redirect("/data-product")
})

module.exports = router
