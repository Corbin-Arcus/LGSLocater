'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      storeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        refrences: {
          model: "Stores"
        }
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      eventGame: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true
      },
      groupId: {
        type: Sequelize.INTEGER,
        unique: true,
        refrences: {
          model: "Groups"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};
