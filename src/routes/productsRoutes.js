const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");

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



const productsControllers = require("../controllers/productsControllers.js");
const { Route } = require("express");

router.get("/productCart/:id",authMiddleware,productsControllers.productCart)
/* router.post("/productCart",upload.single("file-image-product"),productsControllers.agregarCart) */

router.get("/productDetail/:id",productsControllers.productDetail)

router.get("/crear", productsControllers.crear)
router.post("/", upload.single("file-image-product"), productsControllers.crearAgregado)

router.get("/editar/:id", productsControllers.editar)
router.patch("/edit/:id",upload.single("file-image-product"),productsControllers.sendEditar)

router.delete("/delete/:id",productsControllers.delete)


module.exports = router;