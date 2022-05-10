const path = require("path");

const indexControllers = {
    index: (req, res)=> {
        res.render("index")
    },
    search:(req, res)=> {
    res.send("Se busco")
    }

}
module.exports = indexControllers;