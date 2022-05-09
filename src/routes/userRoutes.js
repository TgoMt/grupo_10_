const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers.js")

router.get("/register", userControllers.register);
router.get("/login",userControllers.login)
//cartel se logueo
router.post("/log",userControllers.sendLogin)
//nos manda de login a register
router.post("/reg",userControllers.sendToRegister)
//cartel de se registro
router.post("/registrado",userControllers.sendIndex)


module.exports = router;