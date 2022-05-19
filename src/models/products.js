const fs = require("fs")
const path = require("path")



const products = {
    fileName:"./src/data/products/productsDataBase.json",

    getProducts: function(){
        return fs.readFileSync(this.fileName, "utf-8")
    }



}
console.log(products.getProducts())