const express = require("express");
const router = express.Router();

const productCartControllers = require("../controllers/productCartControllers.js")
router.get("/productCart",productCartControllers.productCart)

module.exports = router;