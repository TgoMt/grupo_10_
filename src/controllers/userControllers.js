const path = require("path");
const fs = require('fs');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
/* const User = require('../models/User'); */

const db = require(path.join(__dirname, '../../database/models'));

/* const usersFilePath = path.join(__dirname, '../data/users/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); */


const userControllers = {
   
        register: (req, res) => {
            db.Role.findAll()
            .then(function(roles){
                return res.render("./users/register",{roles:roles})
            })
        
    },
    sendRegister: (req, res) => {
        let roles = db.Role.findAll();
        let usersInDB = db.User.findOne({where:{email:req.body.email}})
        Promise.all([roles,usersInDB])
        .then(function([roles,userInDB]){
            if (userInDB) {
                return res.render('./users/register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },roles:roles,oldData:req.body
                    
                });
            }
            let resultValidation = validationResult(req);
            
    
            if (resultValidation.errors.length > 0) {
                return res.render("./users/register", { errors: resultValidation.mapped(), roles:roles, oldData:req.body}); 
            }
        //Encriptar contraseña
        let pass = bcrypt.hashSync(req.body.password, 10)
        //Formularios

        
        db.User.create({
            name: req.body.name,
            lastname: req.body.lastname,
            dni: req.body.dni,
            image: req.file ? req.file.filename : "default-users.jpg",
            email: req.body.email,
            roleId: req.body.role,
            password: pass,
            passwordConfirm:  bcrypt.compareSync(req.body.passwordConfirm, pass),
        });
        let passwordConfirm = bcrypt.compareSync(req.body.passwordConfirm, pass)
        if(passwordConfirm){
            res.redirect("/")
        } else{
            return res.render("./users/register", { errors:{ password: {
                msg: 'Los contraseñas nos son iguales'
            }
        }, roles:roles, oldData:req.body})
        }
        })

    },
    sendToRegister: (req, res) => {
        res.redirect("/users/register")
    },
    login: (req, res) => {

    db.User.findAll()
    .then(function(){
        res.render("./users/login")
    })

    },

    sendLogin: (req, res) => {

        /* let userToLogin = User.findByField('email', req.body.email); */

        db.User.findOne({where:{email:req.body.email}})
        .then(function(userToLogin){
            if (userToLogin) {
                let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
                if (isOkThePassword) {
                    req.session.userLogged = userToLogin;
    
                    return res.redirect('/users/profile');
                }
                return res.render('./users/login', {
                    errors: {
                        email: {
                            msg: 'Las credenciales son inválidas'
                        }
                    }, oldData:req.body
                });
            }
    
            return res.render('./users/login', {
                errors: {
                    email: {
                        msg: 'No se encuentra este email en nuestra base de datos'
                    },oldData:req.body
                }
            });
        });

        
    },

    sendLoginGoogle: (req, res) => {
        res.send("Se logueo correctamente con Google")
    },
    sendLoginFacebook: (req, res) => {
        res.send("Se logueo correctamente con Facebook")
    },

    profile: (req, res) => {
        
        return res.render('./users/userProfile', {
            user: req.session.userLogged
        });
    },
    logout: (req, res) => {
        
        req.session.destroy();
        res.redirect("/")
    }
    
}
module.exports = userControllers;
