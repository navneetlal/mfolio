'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return Promise.all([
        queryInterface.addIndex('Folios', ['folio_number'], {
          fields: ['folio_number'],
          unique: true,
          transaction
        }),
        queryInterface.addIndex('Folios', ['investor_id'], {
          fields: ['investor_id'],
          unique: false,
          transaction
        }),
        queryInterface.addIndex('Schemes', ['amfi'], {
          fields: ['amfi'],
          unique: true,
          transaction
        }),
        queryInterface.addIndex('Valuations', ['amfi'], {
          fields: ['amfi'],
          unique: true,
          transaction
        }),
        queryInterface.addIndex('Transactions', ['amfi'], {
          fields: ['amfi'],
          unique: false,
          transaction
        }),
        queryInterface.addIndex('Navs', ['amfi'], {
          fields: ['amfi'],
          unique: false,
          transaction
        }),
        queryInterface.addIndex('Navs', ['amfi', 'date'], {
          fields: ['amfi', 'date'],
          unique: true,
          transaction
        }),
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return Promise.all([
        queryInterface.removeIndex('Folios', ['folio_number'], {
          fields: ['folio_number'],
          unique: true,
          transaction
        }),
        queryInterface.removeIndex('Schemes', ['amfi'], {
          fields: ['amfi'],
          unique: true,
          transaction
        }),
        queryInterface.removeIndex('Transactions', ['amfi'], {
          fields: ['amfi'],
          unique: false,
          transaction
        }),
        queryInterface.removeIndex('Navs', ['amfi'], {
          fields: ['amfi'],
          unique: false,
          transaction
        }),
        queryInterface.removeIndex('Navs', ['amfi', 'date'], {
          fields: ['amfi', 'date'],
          unique: true,
          transaction
        }),
      ])
    })
  }
};
