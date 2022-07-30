const path = require("path");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const db = require(path.join(__dirname, "../../../database/models"));

module.exports = {
    list: (req, res) => {
        db.Product.findAll()
            .then(products => {
                return res.status(200).json({
                    total: products.length,
                    data: products,
                    status: 200
                });
            });
    },
    showOne: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                    data: product,
                    status: 200
                });
            });
    },

    create: (req, res) => {
        db.Product.create(req.body)
        .then(product => {
            return res.status(200).json({
                data:product,
                status:200,
                created:"Se creo"
            })
        })
    },
    delete: (req, res) => {
        db.Product.destroy({where:{id:req.params.id}})
        .then(response => {
            return res.json(response)
        })
    },
    search: (req, res) => {
        db.Product.findAll({
            where:{
                name:{[Op.like]: "%"+req.query.keyword+"%"}
        }
    })
    .then(products => {
        if(products.length > 0){
        return res.status(200).json(products)
    }
        return res.status(200).json("No se encontraron productos")
    
    })

    },
    




};
