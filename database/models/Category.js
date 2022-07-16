module.exports = function(sequelize,dataTypes){
    let alias = "Category"

    let cols = {
    id:{
    type:dataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
   },
   category:{
    type: dataTypes.STRING
   }
   
    }
    let config = {
        tableName: "categories",
        timestamps:false
    }
    let Category = sequelize.define(alias,cols,config);
    /* Category.associate = function(models){
        Category.belongsTo(models.Product,{
            as:"products",
            foreignKey:"categoryId"
        });
    } */  
    return Category;
}