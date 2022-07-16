const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");
const {body} = require("express-validator");



const authMiddleware = require("../middlewares/authMiddleware")

const storage = multer.diskStorage({
    destination:function (req,file,callback){
    callback(null,"public/img/products");
    },
    filename:function (req,file,callback){
        callback(null,file.fieldname + Date.now() + "image" + path.extname(file.originalname));
    }
});
const upload = multer({storage: storage});

//tal vez es por que no ocupamos todos los recursos de el products controllers
const validateCreateAndEdit = [
    body("name").notEmpty().withMessage("Debe completar el nombre").bail().isLength({min:5}).withMessage("El minimo es de 5 caracteres"),
    body("description").notEmpty().withMessage("Debe completar la descripcion del producto").bail().isLength({min:20}).withMessage("El minimo es de 20 caracteres"),
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
    }),   
]



const productsControllers = require("../controllers/productsControllers.js");


router.get("/productCart/:id",authMiddleware,productsControllers.productCart)
/* router.post("/productCart",upload.single("file-image-product"),productsControllers.agregarCart) */

router.get("/productDetail/:id",productsControllers.productDetail)

router.get("/crear", productsControllers.crear)
router.post("/", upload.single("file-image-product"),validateCreateAndEdit, productsControllers.crearAgregado)

router.get("/editar/:id", productsControllers.editar)
router.patch("/edit/:id",upload.single("file-image-product"),validateCreateAndEdit,productsControllers.sendEditar)

router.delete("/delete/:id",productsControllers.delete)




module.exports = router;