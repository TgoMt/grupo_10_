const express = require("express");
const router = express.Router();
const multer = require("multer");

const userControllers = require("../controllers/userControllers.js")

const storage = multer.diskStorage({
    destination:function (req,file,callback){
    callback(null,"public/img/users");
    },
    filename:function (req,file,callback){
        callback(null,file.fieldname + Date.now() + "image" + path.extname(file.originalname));
    }
});
const upload = multer({storage: storage});




router.get("/register", userControllers.register);
router.get("/login",userControllers.login)
//cartel se logueo
router.post("/log",userControllers.sendLogin)
//nos manda de login a register
router.post("/reg",upload.single("file-image-user"), userControllers.sendToRegister)









//cartel de se registro
router.post("/registrado",userControllers.sendRegister)
//cartel se logueo con google
router.post("/reg/google",userControllers.sendLoginGoogle)
//cartel se logueo con facebook
router.post("/reg/facebook",userControllers.sendLoginFacebook)

module.exports = router;