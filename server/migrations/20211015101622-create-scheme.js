'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return Promise.all([
        queryInterface.createTable('Schemes', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          folio_number: {
            type: Sequelize.STRING,
            allowNull: false
          },
          amfi: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          name: {
            type: Sequelize.STRING(100),
            allowNull: false
          },
          type: {
            type: Sequelize.STRING(20),
            allowNull: false
          },
          advisor: {
            type: Sequelize.STRING(20),
            allowNull: false
          },
          rta_code: {
            type: Sequelize.STRING(20),
            allowNull: false
          },
          rta: {
            type: Sequelize.STRING(20),
            allowNull: false
          },
          valuation: {
            type: Sequelize.JSON,
            allowNull: false
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE
          }
        }, { transaction })
      ])
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Schemes');
  }
};