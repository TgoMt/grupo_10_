const fs = require("fs")
const path = require("path");

/* const productsFilePath = path.join(__dirname, '../data/products/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const db = require(path.join(__dirname, '../../database/models'));

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
    res.send("Se busco")
    }

}
module.exports = indexControllers;