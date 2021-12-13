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

exports.editProductget = (req, res) =>{
  res.render("edit-product", {
    path:'/admin/edit-product',
    pageTital:'Edit Product'
  });
};

exports.listProductget = (req, res) =>{
  res.render("list-product", {
    path:'/admin/list-product',
    pageTital:'List Product'
  });
};