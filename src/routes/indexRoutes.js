const express = require("express");
const router = express.Router();


const indexControllers = require("../controllers/indexControllers.js");
const rememberMeMiddleware = require('../middlewares/rememberMeMiddleware');

router.get("/", indexControllers.index)
router.post("/search",indexControllers.search)

module.exports = router;