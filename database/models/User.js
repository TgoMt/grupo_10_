module.exports = function(sequelize,dataTypes){
    let alias = "User";

    let cols = {
   "id":{
    type:dataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
   },
   name:{
    type:dataTypes.STRING
   },
   lastname:{
    type:dataTypes.STRING
   },
   dni:{
    type:dataTypes.INTEGER
   },
   email:{
    type:dataTypes.STRING
   },
   adress:{
    type:dataTypes.STRING
   }
   ,
   password:{
    type:dataTypes.STRING
   }
   ,
   "image":{
    type:dataTypes.STRING
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

/* User.associate = function(models){
    User.hasMany(models.Role,{
        as:"roles",
        foreignKey:"roleId"
    })
} */

    let User = sequelize.define(alias,cols,config);
    return User;
}