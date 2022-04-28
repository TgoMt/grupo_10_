const path = require("path")

const productDetailControllers = {

 productDetail:(req, res)=> {
    res.sendFile(path.resolve(__dirname, "../views/productDetail.html"))
}
}
module.exports= productDetailControllers;