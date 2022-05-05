const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers.js")

router.get("/register", userControllers.register);
router.get("/login",userControllers.login)
/* router.post("/holahola",userControllers.sendIndex) */


module.exports = router;