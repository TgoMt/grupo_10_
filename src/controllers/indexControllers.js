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
        
        db.Product.findAll()
        .then(function(product){
        return res.render("index",{product:product})
    })
    },
    search:(req, res)=> {
    let search ="%" + req.body.seeker + "%"
       db.Product.findAll({where:{name:{[Op.like]:search}}})
       .then(function(product){
        return res.render("index",{product:product})
       }) 
        
    }

}
module.exports = indexControllers;