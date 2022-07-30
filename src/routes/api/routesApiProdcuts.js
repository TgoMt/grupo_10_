const express = require("express");
const router = express.Router();



const productsApiController = require("../../controllers/api/productsApiController");


router.get("/products", productsApiController.list);
router.get("/products/search",productsApiController.searchProductByName)
router.get("/products/:id", productsApiController.showOne)
router.post("/products",productsApiController.createProduct)
router.delete("/products/:id",productsApiController.deleteProduct)

module.exports = router