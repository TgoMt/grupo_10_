const fs = require("fs")
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/products/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const indexControllers = {
    index: (req, res)=> {
        res.render("index",{products})
    },
    search:(req, res)=> {
    res.send("Se busco")
    }

}
module.exports = indexControllers;