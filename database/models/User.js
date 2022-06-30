module.exports = function(sequelize,dataTypes){
    let alias = "User";

    let cols = {
   "id":{
    type:dataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
   },
   "name":{
    type:dataTypes.STRING(50)
   },
   "lastname":{
    type:dataTypes.STRING(50)
   },
   "dni":{
    type:dataTypes.INTEGER
   },
   "email":{
    type:dataTypes.STRING(100)
   },
   "adress":{
    type:dataTypes.STRING(50)
   }
   ,
   "password":{
    type:dataTypes.STRING(50)
   }
   ,
   "image":{
    type:dataTypes.STRING(200)
   }
   ,
   "roleId":{
    type:dataTypes.INTEGER
   }
    }
    let config = {
        tableName: "users",
        timestamps:false
    }

User.associate = function(models){
    User.hasMany(models.Role,{
        as:"roles",
        foreignKey:"roleId"
    })
}

    let User = sequelize.define(alias,cols,config);
    return User;
}