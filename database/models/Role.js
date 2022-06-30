module.exports = function(sequelize,dataTypes){
    let alias = "Role"

    let cols = {
   "id":{
    type:dataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
   },
   role:{
    data: dataTypes.STRING(200)
   }
   
    }
    let config = {
        tableName: "roles",
        timestamps:false
    }

    Role.associate = function(models){
        Role.belongsToMany(models.User,{
            as:"users",
            foreignKey:"roleId"
        })
    }


    let Role = sequelize.define(alias,cols,config);
    return Role;
}