
const path = require("path");

const userControllers = {
    register:(req, res)=> {
        res.render("./users/register")
    },
    login: (req, res)=> {
        res.render("./users/login")
    },
    sendIndex : 
        (req, res)=> {
        res.send("Se registro correctamente")
    }
}
module.exports = userControllers;
