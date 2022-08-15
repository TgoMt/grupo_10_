const fs = require("fs")
const path = require("path");

/* const productsFilePath = path.join(__dirname, '../data/products/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */




const db = require(path.join(__dirname, '../../database/models'));
const sequelize = require("sequelize");
const Op = sequelize.Op;
const indexControllers = {


    /* index: (req, res)=> {
        res.render("index",{products})
    }, */
    index:(req,res) => {
        /* let product = db.Product.findAll()
		let user = db.User.findAll()
		Promise.all([product,user]).then(function([product,user]){
		res.render("index",{product:product,user:user,users: req.session.userLogged})
		}) */
        db.Product.findAll()
        .then(function(product){
            return res.render("index",{product:product,user: req.session.userLogged})
        })


    },
    search:(req, res)=> {
    let search ="%" + req.body.seeker + "%"
       db.Product.findAll({where:{name:{[Op.like]:search}}})
       .then(function(product){
        return res.render("index",{product:product,user: req.session.userLogged})
       }) 
        
    }

}
module.exports = indexControllers;