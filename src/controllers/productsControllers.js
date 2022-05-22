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
    let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render("./products/editar", {productToEdit})
},
sendEditar:(req, res) => {
    const id = req.params.id;
		let productToEdit = products.find(product => product.id == id);
		
		let productToSave = {
			id: productToEdit.id,
			name: req.body.name,
			price: req.body.price,
			off: req.body.off,
			category: req.body.category,
			description: req.body.description,
			/* ...req.body, */
			image: req.file ? req.file.filename : productToEdit.image,
		}

		let indice = products.findIndex(product => {	return product.id == id   })
		products[indice] = productToSave;

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/")
},
delete:(req,res) => {
	const id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect("/")
}
}

module.exports = productsControllers;