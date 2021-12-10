const productData = require("../models/productData.js");

exports.addProductget = (req, res) => {
  res.render("add-product", {
    path:'/admin/add-product',
    pageTital:'Add Product'
  });
};

exports.addProductpost = (req, res) =>{
  console.log(req.body.product);
  // productData.saveProduct();
  res.redirect('/product');
};