'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    userName: {
      allowNull: false,
      type: DataTypes.STRING,
      required: true,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
      required: true,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      required: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      required: true,
      validate: {
        len: [7, 10],
      }
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
      required: true,
      validate:{
        len: [10, 15],
      }
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};