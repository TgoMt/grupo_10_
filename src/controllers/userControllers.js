const path = require("path");
const fs = require('fs');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require('../models/User');
const session = require("express-session");

const usersFilePath = path.join(__dirname, '../data/users/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const userControllers = {
    register: (req, res) => {

        res.render("./users/register")
    },
    sendRegister: (req, res) => {
        let userInDB = User.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('./users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }
        //Express validator
        let resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("./users/register", { errors: resultValidation.mapped(),/* old:req.body */ });
        } else {
            res.redirect("/")
        }
        //Usuario ya registrado

        //Encriptar contraseña
        let pass = bcrypt.hashSync(req.body.password, 10)
        //Formularios
        let newUser = {
            identificador: users[users.length - 1].identificador + 1,
            name: req.body.name,
            lastname: req.body.lastname,
            dni: req.body.dni,
            email: req.body.email,
            adress: req.body.adress,
            password: pass,
            passwordConfirm: bcrypt.compareSync(req.body.passwordConfirm, pass),
            image: req.file ? req.file.filename : "default-users.jpg"
        }
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        /* res.redirect("/users/register") */

    },
    sendToRegister: (req, res) => {
        res.redirect("/users/register")
    },
    login: (req, res) => {


        res.render("./users/login")
    },

    sendLogin: (req, res) => {


        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                req.session.userLogged = userToLogin;

                /* if(req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                } */

                return res.redirect('/users/profile');
            }
            return res.render('./users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
        }

        return res.render('./users/login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
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
    }
}
module.exports = userControllers;
