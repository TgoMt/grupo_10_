const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsControllers = {

productCart: (req, res)=> {
    res.render("./products/productCart")
},
productDetail:(req, res)=> {
    let id = req.params.id
    let product = products.find(product => product.id == id)
    res.render("./products/productDetail",{product})
},
crear:(req, res) => {
    res.render("./products/crear")
},
crearAgregado:(req, res) => {
res.send("Producto Creado")
},
editar:(req,res) => {
    res.render("./products/editar")
},
sendEditar:(req, res) => {
    res.send("Producto Editado")
}
}

module.exports = productsControllers;