const path = require("path");

const indexControllers = {
    index: (req, res)=> {
        res.render("index")
    }
}
module.exports = indexControllers;