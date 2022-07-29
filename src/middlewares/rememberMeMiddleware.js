/* const path = require("path");
const db = require(path.join(__dirname, '../../database/models'));

function rememberMeMiddleware(req, res, next) {

    if (req.cookies.rememberMe !== undefined && req.session.userLogged == undefined ){
        if (db.User.findOne({where:{email:req.body.email}}) == req.cookie.rememberMe){
            req.session.userLogged = db.User.findOne({where:{email:req.body.email}})
        }
    }
    req.session.userLogged = userToLogin;
    next();
}

module.exports = rememberMeMiddleware; */