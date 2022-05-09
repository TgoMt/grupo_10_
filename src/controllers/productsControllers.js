const path = require("path");


const productsControllers = {

productCart: (req, res)=> {
    res.render("./products/productCart")
},
productDetail:(req, res)=> {
    res.render("./products/productDetail")
},
crear:(req, res) => {
    res.render("./products/crear")
},
crearAgregado:(req, res) => {
res.send("Producto Creado")
},
editar:(req,res) => {
    res.render("./products/editar")
}

}

module.exports = productsControllers;