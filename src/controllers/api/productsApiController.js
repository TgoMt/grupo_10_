const path = require("path");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const groupBy = require("array.prototype.groupby")
groupBy.shim();


const db = require(path.join(__dirname, "../../../database/models"));

module.exports = {
    list: (req, res) => {
        let products = db.Product.findAll()
        let category = db.Category.findAll()
        Promise.all([products,category]).then(function([product,categories]){
            return res.status(200).json({
                
                /*   */
                total: products.length,
                countCategory: 
                categories.map(function (parametro, a, categoriesMap) {
               return product.map(function (parametro, i, productMap){
            if (productMap[i].categoryId === categoriesMap[a].id){
             return productMap[i].name
            } /* else if (productMap[i].categoryId  === 2){
             licores.push(productMap[i])
            }else if (productMap[i].categoryId  === 3){
             bebidasBlancas.push(productMap[i])
            }else if (productMap[i].categoryId === 4){
             aperitivos.push(productMap[i])
            } */
            })
             }),
             
            /* var categoriesGroup = {
                cervezas: cervezas,
                licores: licores,
                bebidasBlancas: bebidasBlancas,
                aperitivos: aperitivos
               } */
        
             
            status: 200
            
        });
            })
          
            
           
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

    createProduct: (req, res) => {
        db.Product.create(req.body)
        db.Category.findAll()
        .then(product => {
            return res.status(200).json({
                data: product,
                status:200,
                created:"Se creo"
            })
        })
    },
    deleteProduct: (req, res) => {
        db.Product.destroy({where:{id:req.params.id}})
        .then(response => {
            return res.json(response)
        })
    },
    searchProductByName: (req, res) => {
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
