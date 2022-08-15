const { group } = require("console");
const path = require("path");
const Sequelize = require('sequelize');
//Sequelize Raw Query (Para pasar el codigo directamente de SQL (sigue abajo))
const sequelize = new Sequelize('sipintadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})
const Op = sequelize.Op;



const db = require(path.join(__dirname, "../../../database/models"));




module.exports = {

    list: (req,res) => {
        db.Product.findAll().then(producto => {

        //Sequelize Raw Query (aca le pasamos el codigo con toda la estructura)
        sequelize.query("select category,count(*) as Conteo from categories inner join products on categoryId=categories.id group by categoryId")
        .then(products => {
            //esto va con sequelize raw query
        [countByCategory, metadata] = products
            return res.status(200).json({
                total: producto.length,
                countByCategory,
                products: producto.map(function (parametro, i, products) {
                    return {id: products[i].id,
                            name: products[i].name,
                            price: products[i].price,
                            discount: products[i].discount,
                            description: products[i].description,
                           imagen:"http://localhost:3333/img/products/"+products[i].image,

                           detail:"http://localhost:3333/products/productDetail/"+products[i].id
                        }
                    }),
                })
            })
        })
    },

    showOne: (req, res) => {
       let productOrder = db.Product.findByPk(req.params.id)
       let categories = db.Category.findAll()
       let productCategory = []
        Promise.all([productOrder,categories]).then(function([productOrder,categories]){
            categories.map(function (parametro, i, category) 
            {if (category[i].id === productOrder.categoryId){
                productCategory.push(category[i].category)
           }})
            return res.status(200).json({
                data: {id: productOrder.id,
                    name: productOrder.name,
                    price: productOrder.price,
                    discount: productOrder.discount,
                    description: productOrder.description,
                   imagen:"http://localhost:3333/img/products/"+ productOrder.image,

                   detail:"http://localhost:3333/products/productDetail/"+ productOrder.id,

                   //Cateogoria
                   cateogory:productCategory,  
                },
                

                
                 


            })
            

		})
    },

    createProduct: (req, res) => {
        db.Product.create(req.body)
        db.Category.findAll()
            .then(product => {
                return res.status(200).json({
                    data: product,
                    status: 200,
                    created: "Se creo"
                })
            })
    },
    deleteProduct: (req, res) => {
        db.Product.destroy({ where: { id: req.params.id } })
            .then(response => {
                return res.json(response)
            })
    },
    searchProductByName: (req, res) => {
        db.Product.findAll({
            where: {
                name: { [Op.like]: "%" + req.query.keyword + "%" }
            }
        })
            .then(products => {
                if (products.length > 0) {
                    return res.status(200).json(products)
                }
                return res.status(200).json("No se encontraron productos")

            })

    },





};
