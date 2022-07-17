const path = require("path");
const fs = require('fs');
const { validationResult } = require("express-validator");

/* const productsFilePath = path.join(__dirname, '../data/products/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const db = require(path.join(__dirname, '../../database/models'));



const productsControllers = {

productCart: (req, res)=> {
    db.Product.findByPk(req.params.id)
	.then(function(product){
		return res.render("./products/productCart",{product:product})
	})
},
productDetail:(req, res)=> {	
   /*  let id = req.params.id */
	db.Product.findByPk(req.params.id)
	.then(function(product){
		return res.render("./products/productDetail",{product})
	})
	
    /* let product = products.find(product => product.id == id)
    res.render("./products/productDetail",{product}) */
},
crear:(req, res) => {
	db.Category.findAll()
	.then(function(categories){
		return res.render("./products/crear",{categories:categories})
	})
},
/* crearAgregado:(req, res) => {
    let newProduct = {

    id: products[products.length - 1].id + 1,
    name: req.body.name,
	price: parseInt(req.body.price),
	off: parseInt(req.body.off),
	category: req.body.category,
	description: req.body.description,
	image: req.file ? req.file.filename : "Smirnoff-out.jpg"
}
products.push(newProduct);
fs.writeFileSync(productsFilePath, JSON.stringify(products,null," "));
res.redirect("/")

}, */






crearAgregado:(req,res) => {
	let categories = db.Category.findAll();
	let resultValidation = validationResult(req);
            
    
	if (resultValidation.errors.length > 0) {
	    return res.render("./products/crear", { errors: resultValidation.mapped(), categories:categories }); 
	}

db.Product.create({
	name:req.body.name,
	price:req.body.price,
	discount:req.body.off,
	description:req.body.description,
	data:req.body.data,
	image:req.file ? req.file.filename : "Smirnoff-out.jpg",
	categoryId:req.body.category,

});
res.redirect("/")
},




editar:(req,res) => {
    /* let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render("./products/editar", {productToEdit}) */	
		let pedidoId = db.Product.findByPk(req.params.id)
		let Category = db.Category.findAll()
		Promise.all([pedidoId,Category]).then(function([productToEdit,categories]){
		res.render("./products/editar",{productToEdit:productToEdit,categories:categories})
		})

},
sendEditar:(req, res) => {
	let resultValidation = validationResult(req);

	if (resultValidation.errors.length > 0) {
		let pedidoId = db.Product.findByPk(req.params.id)
		let Category = db.Category.findAll()

		Promise.all([pedidoId,Category]).then(function([productToEdit,categories]){
		res.render("./products/editar",{errors: resultValidation.mapped(),productToEdit:productToEdit,categories:categories})
		})
	}else{
	db.Product.update({
		name:req.body.name,
		price:req.body.price,
		discount:req.body.off,
		description:req.body.description,
		data:req.body.data,
		image:req.file ? req.file.filename : "Smirnoff-out.jpg",
		categoryId:req.body.category,
	
	},{
		where: {
			id:req.params.id

		}

	});
	 res.redirect("/" )
	}
},
    /* const id = req.params.id;
		let productToEdit = products.find(product => product.id == id);
		
		let productToSave = {
			id: productToEdit.id,
			name: req.body.name,
			price: req.body.price,
			off: req.body.off,
			category: req.body.category,
			description: req.body.description,
			
			image: req.file ? req.file.filename : productToEdit.image,
		}

		let indice = products.findIndex(product => {	return product.id == id   })
		products[indice] = productToSave;

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/") */

delete:(req,res) => {
	/* const id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect("/") */

		db.Product.destroy({
			where:{
				id:req.params.id
			}
		})
		res.redirect("/")
}
}

module.exports = productsControllers;