const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");
const {body} = require("express-validator");
const productsApiController = require("../../controllers/api/productsApiController");


router.get("/products", productsApiController.list);

module.exports = router