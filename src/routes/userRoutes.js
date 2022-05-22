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
router.post("/registrado",userControllers.sendRegister)
//cartel se logueo con google
router.post("/reg/google",userControllers.sendLoginGoogle)
//cartel se logueo con facebook
router.post("/reg/facebook",userControllers.sendLoginFacebook)

module.exports = router;