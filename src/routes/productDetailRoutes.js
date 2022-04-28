const express = require("express");
const router = express.Router();

const productDetailControllers = require("../controllers/productDetailControllers.js")

router.get("/productDetail",productDetailControllers.productDetail)

module.exports = router;