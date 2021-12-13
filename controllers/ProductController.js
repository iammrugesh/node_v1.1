const productData = require("../models/productData.js");

exports.Productget = (req, res) => {
  // productData.getProduct();
  res.render("product", {
    path:'/product',
    pageTital:'Product List'
  });
};

exports.ProductCartget = (req, res) => {
  // productData.getProduct();
  res.render("cart", {
    path:'/cart',
    pageTital:'Product Cart'
  });
};

exports.ProductCheckoutget = (req, res) => {
  // productData.getProduct();
  res.render("checkout", {
    path:'/checkout',
    pageTital:'Product Checkout'
  });
};