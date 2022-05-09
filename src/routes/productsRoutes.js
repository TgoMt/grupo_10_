const express = require("express");
const router = express.Router();

const productsControllers = require("../controllers/productsControllers.js")

router.get("/productCart",productsControllers.productCart)

router.get("/productDetail",productsControllers.productDetail)

router.get("/crear", productsControllers.crear)
router.post("/", productsControllers.crearAgregado)

router.get("/editar", productsControllers.editar)

module.exports = router;