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
    let newProduct = {
    id: products[products.length - 1].id + 1,
    name: req.body.name,
	price: parseInt(req.body.price),
	off: parseInt(req.body.off),
	category: req.body.category,
	/* description: req.body.description, */
	image: req.file ? req.file.filename : "Smirnoff-out.jpg"
}
products.push(newProduct);
fs.writeFileSync(productsFilePath, JSON.stringify(products,null," "));
res.redirect("/")

},
editar:(req,res) => {
    
    res.render("./products/editar")
},
sendEditar:(req, res) => {
    res.send("Producto Editado")
}
}

module.exports = productsControllers;