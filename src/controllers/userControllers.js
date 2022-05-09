
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
    },
    sendLogin:(req, res)=> {
        res.send("Se logueo correctamente")
    },
    sendToRegister:(req, res)=> {
        res.redirect("/users/register")
    },
}
module.exports = userControllers;
