const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Home Page, Product and Checkout
const index = require('./routes/index');
const product = require('./routes/product');
const addProduct = require('./routes/add-product');
const dataProduct = require('./routes/data-product');
const editProduct = require('./routes/edit-product');
const updateProduct = require('./routes/update-product');
const deleteProducts = require('./routes/delete-product');
const orderProduct = require('./routes/order-product');
const checkout = require('./routes/order-product');
const searchProduct = require('./routes/search-product');


//Category
const category = require('./routes/category');
const readCategory = require('./routes/read-category');
const editCategory = require('./routes/edit-category');
const createCategory = require('./routes/create-category');
const updateCategory = require('./routes/update-category');
const deleteCategory = require('./routes/delete-category');
const searchCategory = require('./routes/search-category');

//Home Page, Product and Checkout
app.use('/', index);
app.use('/product', product);
app.use('/add-product', addProduct);
app.use('/data-product', dataProduct);
app.use('/edit-product', editProduct);
app.use('/update-product', updateProduct);
app.use('/delete-product', deleteProducts);
app.use('/order-product', orderProduct);
app.use('/', checkout);
app.use('/search-product', searchProduct);

//Category
app.use('/category', category);
app.use('/create-category', createCategory);
app.use('/update-category', updateCategory);
app.use('/read-category', readCategory);
app.use('/edit-category', editCategory)
app.use('/delete-category', deleteCategory);
app.use('/search-category', searchCategory);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("server has been started!");
});
