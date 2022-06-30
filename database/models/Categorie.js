module.exports = function(sequelize,dataTypes){
    let alias = "Category"

    let cols = {
   "id":{
    type:dataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
   },
   category:{
    data: dataTypes.STRING(200)
   }
   
    }
    let config = {
        tableName: "categories",
        timestamps:false
    }
    Category.associate = function(models){
        Category.belongsToMany(models.Product,{
            as:"products",
            foreignKey:"categoryId"
        });
    }

    let Category = sequelize.define(alias,cols,config);


    
    return Category;
}