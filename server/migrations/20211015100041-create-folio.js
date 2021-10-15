'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return Promise.all([
        queryInterface.createTable('Folios', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          investor_id: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          folio_number: {
            type: Sequelize.STRING,
            allowNull: false
          },
          amc: {
            type: Sequelize.STRING(100),
            allowNull: false
          },
          pan: {
            type: Sequelize.STRING(10),
            allowNull: false,
            comment: 'PAN Card number'
          },
          kyc: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            comment: 'Is KYC verified?'
          },
          pan_kyc: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            comment: 'Is PAN verified?'
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
    await queryInterface.dropTable('Folios');
  }
};