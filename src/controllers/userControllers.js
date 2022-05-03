const path = require("path");

const userControllers = {
    register:(req, res)=> {
        res.render("login")
    },
    login: (req, res)=> {
        res.render("register")
    }
    
}
module.exports = userControllers;
