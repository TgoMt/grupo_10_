const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");

const productsApiController = require("../../controllers/api/productsApiController");


router.get("/products", productsApiController.list);
router.get("/products/search",productsApiController.search)
router.get("/products/:id", productsApiController.showOne)
router.post("/products",productsApiController.create)
router.delete("/products/:id",productsApiController.delete)

module.exports = router