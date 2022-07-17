const path = require("path")
const express = require("express");
const router = express.Router();
const multer = require("multer");
const {body} = require("express-validator");


const userControllers = require("../controllers/userControllers.js")
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require("../middlewares/authMiddleware")

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
body("name").notEmpty().withMessage("Debe completar el nombre").bail().isLength({min:2}).withMessage("El minimo es de 2 caracteres"),
body("lastname").notEmpty().withMessage("Debe completar el apellido"),/* .bail().isLength({max:20}).withMessage("El maximo es de 20 caracteres"), */
body("email").notEmpty().withMessage("Debe completar el email").isEmail().withMessage("Debe ser un formato de email valido"),/* .bail().isLength({max:70}).withMessage("El maximo es de 70 caracteres"), */
body("dni").notEmpty()/* .isNumeric() */.withMessage("Debe completar el dni"),/* .bail().isLength({max:8}).withMessage("El maximo es de 8 caracteres"), */
/* body("password").notEmpty().withMessage("Debe completar la contraseña").bail().isLength({min:8}).withMessage("El minimo de caracteres es de 8"), */
body("password").notEmpty().withMessage("Debe completar con una contraseña").bail().isLength({ min: 8 }).withMessage("La contraseña debe ser mayor de 8 caracteres").bail()
.matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,).withMessage("Debe contener un caracter especial(@$.!#?&)"),
body("passwordConfirm").notEmpty().withMessage("Debe confirmar la contraseña").bail().isLength({max:30}).withMessage("El maximo es de 30 caracteres"),
body("image").custom((value,{req})=> {
    let file = req.file;
    let acceptedExt = [".jpg",".jpeg",".png",".gif"]
    if(!file){
        throw new Error("Debe subir una imagen")

    }else{
        let fileExt = path.extname(file.originalname);
        if (!acceptedExt.includes(fileExt)){
            throw new Error("Las extenciones aceptadas son"+ ", jpg"+", png"+", jpeg" +", gif")
        }
    }
    return true;
})

]
const validateLogin=[
body("email").notEmpty().withMessage("Debe completar el email").isEmail().withMessage("Debe ser un formato de email valido"),
body("password").notEmpty().withMessage("Debe completar completar la contraseña")
]


//mostramos las vistas
router.get("/register",guestMiddleware,userControllers.register);
router.get("/login",guestMiddleware,userControllers.login)
//cartel se logueo
router.post("/log",validateLogin,userControllers.sendLogin)
//cartel de se registro
router.post("/registrado",upload.single("file-image-user"),validateRegister, userControllers.sendRegister)
//nos manda de login a register
router.post("/reg", userControllers.sendToRegister)
//perfil
router.get("/profile",authMiddleware,userControllers.profile)
//log-out
router.get("/logout",authMiddleware,userControllers.logout)






//cartel se logueo con google
router.post("/reg/google",userControllers.sendLoginGoogle)
//cartel se logueo con facebook
router.post("/reg/facebook",userControllers.sendLoginFacebook)

module.exports = router;