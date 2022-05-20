const express = require("express");
const   router = express.Router();
const path = require("path")
const multer = require("multer");

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



const productsControllers = require("../controllers/productsControllers.js")

router.get("/productCart",productsControllers.productCart)

router.get("/productDetail/:id",productsControllers.productDetail)

router.get("/crear", productsControllers.crear)
router.post("/", upload.single("file-image-product"), productsControllers.crearAgregado)

router.get("/editar", productsControllers.editar)
router.patch("/edit",productsControllers.sendEditar)
module.exports = router;