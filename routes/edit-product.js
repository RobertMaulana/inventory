const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../models");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/:productId", (req, res) => {
  db.Product
    .findAll(
      {where: {productId: req.params.productId}, include: {model: db.Category}})
    .then((product) => {
          let products = [];
          let idCategory = [];
          product.forEach(function(productData){
            let obj = {
              productId: productData.productId,
              nama_product: productData.nama_product,
              harga: productData.harga,
              quantity: productData.quantity
            }
            let objCategory = {
              idCategory: productData.Category.id
            }
            products.push(obj)
            idCategory.push(objCategory)
          })
          db.Category
            .findAll()
            .then((category) =>{
              res.render("../views/edit-product", {dataProduct: products, idCat: idCategory, allCategory: category});
            })
    })
    .catch(()=> {
      res.send("error!")
    })
});

module.exports = router
