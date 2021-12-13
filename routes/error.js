const express = require("express");
const router = express.Router();

const error = require("../controllers/errorController");

router.use(error.mainError);

module.exports = router;