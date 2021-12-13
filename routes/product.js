const express = require("express");
const router = express.Router();

const productView = require("../controllers/ProductController");

router.get("/product", productView.Productget);

router.get("/cart", productView.ProductCartget);

router.get("/checkout", productView.ProductCheckoutget);

module.exports = router;