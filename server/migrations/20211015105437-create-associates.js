'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return Promise.all([
        queryInterface.changeColumn('Folios', 'investor_id', {
          type: Sequelize.STRING,
          references: {
            model: 'Investors',
            key: 'investor_id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction }),
        queryInterface.changeColumn('Schemes', 'folio_number', {
          type: Sequelize.STRING,
          references: {
            model: 'Folios',
            key: 'folio_number',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction }),
        queryInterface.changeColumn('Transactions', 'amfi', {
          type: Sequelize.INTEGER,
          references: {
            model: 'Schemes',
            key: 'amfi',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction }),
        queryInterface.changeColumn('Navs', 'amfi', {
          type: Sequelize.INTEGER,
          references: {
            model: 'Schemes',
            key: 'amfi',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, { transaction })
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
