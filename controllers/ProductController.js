const productData = require("../models/productData.js");

exports.Productget = (req, res) => {
  // productData.getProduct();
  res.render("product", {
    path:'/product',
    pageTital:'Product List'
  });
};