const express = require("express");
const router = express.Router();

const productView = require("../controllers/ProductController");

router.get("/product", productView.Productget);

module.exports = router;