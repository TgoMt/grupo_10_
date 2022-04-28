const path = require("path");


const productCartControllers = {

productCart: (req, res)=> {
    res.sendFile(path.resolve(__dirname, "../views/productCart.html"))
}

}
module.exports = productCartControllers;