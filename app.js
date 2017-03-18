const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const index = require('./routes/index');
const product = require('./routes/product');
const addProduct = require('./routes/add-product');
const dataProduct = require('./routes/data-product');
const editProduct = require('./routes/edit-product');
const updateProduct = require('./routes/update-product');
const deleteProducts = require('./routes/delete-product');

app.use('/', index);
app.use('/product', product);
app.use('/add-product', addProduct);
app.use('/data-product', dataProduct);
app.use('/edit-product', editProduct);
app.use('/update-product', updateProduct);
app.use('/delete-product', deleteProducts);


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("server has been started!");
});
