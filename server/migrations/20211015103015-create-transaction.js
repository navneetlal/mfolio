'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amfi: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      units: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      nav: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      balance: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      type: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      dividend_rate: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};