const express = require("express");
const router = express.Router();

const indexControllers = require("../controllers/indexControllers.js")

router.get("/",indexControllers.index)
router.post("/search",indexControllers.search)

module.exports = router;