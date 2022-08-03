const path = require("path");
const sequelize = require("sequelize");
const Op = sequelize.Op;



const db = require(path.join(__dirname, "../../../database/models"));

module.exports = {
    list: (req, res) => {
        let products = db.Product.findAll()
        let category = db.Category.findAll()
        Promise.all([products,category]).then(function([product,categories]){
            return res.status(200).json({
                
                total: products.length,
                countCategory: 
               /*   categories.map(function (parametro, i, categoriesMap){
            for (let a = 0; a <= product.length; a++){
                if (product[a].categoryId === categoriesMap[i].id) 
                    {
                        return{
                    categoriesP : product[a] 
                        }
                } 
            } 
        
        }) */
        product.map(function (parametro, i, productMap){
            for (let a = 0; a <= categories.length; a++){
                if (productMap[i].categoryId === categories[a].id) 
                    {
                        let categorias = {categories : product[i] }

                        return{
                    categoriesP : product[i] 
                        }
                } 
            } 
        
        }),
             
    
             
            status: 200 
            
                
                })
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
