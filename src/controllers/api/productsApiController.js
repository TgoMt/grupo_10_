
const path = require("path")

const db = require(path.join(__dirname, '../../../database/models'));

module.exports ={
          list: (req,res) =>{
                    db.Product
                    .findAll()
                    .then(products =>{
                              return res.status(200).json({
                                        total: products.length,
                                        data: products,
                                        status:200
                              
                              })
                    })
          },




}