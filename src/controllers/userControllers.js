const path = require("path");
const fs = require('fs');

const usersFilePath = path.join(__dirname, '../data/users/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const userControllers = {
    register:(req, res)=> {
        
        res.render("./users/register")
    },
    sendRegister : (req, res)=> {
        let newUser = {
            identificador: users[users.length - 1].identificador + 1,
            name: req.body.name,
            lastname:req.body.lastname,
            dni:req.body.dni,
            email: req.body.email,
            adress:req.body.adress,
            password: req.body.password,
            
        }
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users,null," "));
        res.send("Se registro correctamente en la base de datos")
        /* res.redirect("/") */
    },
    login: (req, res)=> {
        res.render("./users/login")
    },
    
    sendLogin:(req, res)=> {
        res.send("Se logueo correctamente")
    },
    sendToRegister:(req, res)=> {
        res.redirect("/users/register")
    },
    sendLoginGoogle:(req, res)=> {
        res.send("Se logueo correctamente con Google")
    },
    sendLoginFacebook:(req, res)=> {
        res.send("Se logueo correctamente con Facebook")
    },
}
module.exports = userControllers;
