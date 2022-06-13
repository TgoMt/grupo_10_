const express = require("express");
const router = express.Router();
const multer = require("multer");
const {body} = require("express-validator");


const userControllers = require("../controllers/userControllers.js")
const guestMiddleware = require('../middlewares/guestMiddleware');

//multer image
const storage = multer.diskStorage({
    destination:function (req,file,callback){
    callback(null,"public/img/users");
    },
    filename:function (req,file,callback){
        callback(null,file.fieldname + Date.now() + "image" + path.extname(file.originalname));
    }
});
const upload = multer({storage: storage});
//express validator
const validateRegister = [
body("name").notEmpty().withMessage("Debe completar el nombre"),/* .bail().isLength({max:20}).withMessage("El maximo es de 20 caracteres"), */
body("lastname").notEmpty().withMessage("Debe completar el apellido"),/* .bail().isLength({max:20}).withMessage("El maximo es de 20 caracteres"), */
body("email")/* .isEmail() */.notEmpty().withMessage("Debe completar el email"),/* .bail().isLength({max:70}).withMessage("El maximo es de 70 caracteres"), */
body("dni").notEmpty()/* .isNumeric() */.withMessage("Debe completar el dni"),/* .bail().isLength({max:8}).withMessage("El maximo es de 8 caracteres"), */
body("adress").notEmpty().withMessage("Debe completar el domicilio"),/* .bail().isLength({max:70}).withMessage("El maximo es de 70 caracteres"), */
body("password").notEmpty().withMessage("Debe completar la contraseña"),/* .bail().isLength({max:30}).withMessage("El maximo es de 30 caracteres"), */
body("passwordConfirm").notEmpty().withMessage("Debe confirmar la contraseña")/* .bail().isLength({max:30}).withMessage("El maximo es de 30 caracteres"), */
]
const validateLogin=[
body("email").notEmpty().withMessage("Debe completar el email"),
body("password").notEmpty().withMessage("Debe completar completar la contraseña")
]


//mostramos las vistas
router.get("/register",guestMiddleware, userControllers.register);
router.get("/login",guestMiddleware,userControllers.login)
//cartel se logueo
router.post("/log",validateLogin,userControllers.sendLogin)
//nos manda de login a register
router.post("/reg",upload.single("file-image-user"), userControllers.sendToRegister)

router.get("/profile",userControllers.profile)




//cartel de se registro
router.post("/registrado",validateRegister,userControllers.sendRegister)
//cartel se logueo con google
router.post("/reg/google",userControllers.sendLoginGoogle)
//cartel se logueo con facebook
router.post("/reg/facebook",userControllers.sendLoginFacebook)

module.exports = router;