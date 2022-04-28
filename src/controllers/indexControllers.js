const path = require("path");

const indexControllers = {
    index: (req, res)=> {
        res.sendFile(path.resolve(__dirname, "../views/index.html"))
    }
}
module.exports = indexControllers;