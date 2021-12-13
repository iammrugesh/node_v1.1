const express = require("express");
const router = express.Router();

const adminAddProduct = require("../controllers/adminAddProductController");

router.get("/add-product", adminAddProduct.addProductget);
router.post("/add-product", adminAddProduct.addProductpost);

router.get("/edit-product", adminAddProduct.editProductget);

router.get("/list-product", adminAddProduct.listProductget);

module.exports = router;