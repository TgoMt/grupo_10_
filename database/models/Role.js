module.exports = function(sequelize,dataTypes){
    let alias = "Role"

    let cols = {
   id:{
    type:dataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
   },
   role:{
    type: dataTypes.STRING
   }
   
    }
    let config = {
        tableName: "roles",
        timestamps:false
    }
    let Role = sequelize.define(alias,cols,config);
    /* Role.associate = function(models){
        Role.belongsToMany(models.User,{
            as:"users",
            foreignKey:"roleId"
        })
    } */


    
    return Role;
}