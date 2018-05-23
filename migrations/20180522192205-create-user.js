'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING,
        required: true,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        required: true,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        required: true,

      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        required: true,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
        required: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};