'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     async checkPassword(password){

    return await bcrypt.compare(password, this.password)
     }
    static associate(models) {
      // define association here
      User.hasMany(models.Todo,{
        foreignKey:"user_id"
      })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 10)
  user.password = hashedPassword;
});
  return User;
};