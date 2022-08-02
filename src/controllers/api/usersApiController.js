const path = require("path");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const db = require(path.join(__dirname, "../../../database/models"));

module.exports = {
    list: (req, res) => {
        db.User.findAll()
            .then(users => {
                return res.status(200).json({
                    total: users.length,
                    data: users,
                    status: 200,
                    
                });
                
            });
            
    },
    showOne: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200
                });
            });
    },

    register: (req, res) => {
        db.User.create(req.body)
        .then(user => {
            return res.status(200).json({
                data:user,
                status:200,
                created:"Se registro"
            })
        })
    },
    delete: (req, res) => {
        db.User.destroy({where:{id:req.params.id}})
        .then(response => {
            return res.json(response)
        })
    },
    searchUserByName: (req, res) => {
        db.User.findAll({
            where:{
                name:{[Op.like]: "%"+req.query.keyword+"%"}
        }
    })
    .then(users => {
        if(users.length > 0){
        return res.status(200).json(users)
    }
        return res.status(200).json("No se encontraron usuarios con ese nombre")
    
    })

    },
    




};
