const { group } = require("console");
const path = require("path");
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sipintadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})
const Op = sequelize.Op;



const db = require(path.join(__dirname, "../../../database/models"));

module.exports = {

    list: (req,res) => {
        db.Product.findAll().then(producto => {

        
        sequelize.query("select category,count(*) as Conteo from categories inner join products on categoryId=categories.id group by categoryId")
        .then(products => {
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



//(FINDALL({attributes: ["categoryId",[sequelize.fn("COUNT", sequelize.col("categoryId")), "cerveza"],],group: "categoryId"})

   /*  list: (req, res) => {
        let products = db.Product.findAll()//count group by  
        let category = db.Category.findAll()
        Promise.all([products, category]).then(function ([product, categories]) {
            return res.status(200).json({

                total: products.length,
                countCategory:
                    categories.map(function (parametro, a, categoriesMap) {
                        return product.map(function (parametro, i, productMap) {
                            if (productMap[i].categoryId === categoriesMap[a].id) {
                                return productMap[i].name
                            } else {
                                return {}//no sabemos como hacer para que no aparezca nada
                            }
                        })
                    }),
                status: 200
                
            });
        })
    }, */
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
