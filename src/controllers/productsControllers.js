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
}

}

module.exports = productsControllers;