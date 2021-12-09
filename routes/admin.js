const express = require("express");
const router = express.Router();

const adminAddProduct = require("../controllers/adminAddProductController");

router.get("/add-product", adminAddProduct.addProductget);
router.post("/add-product", adminAddProduct.addProductpost);

module.exports = router;