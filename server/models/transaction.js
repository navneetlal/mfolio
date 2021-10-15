'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Scheme)
      // define association here
    }
  };
  Transaction.init({
    amfi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    units: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    nav: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dividendRate: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Transaction',
    timestamps: true,
    underscored: true,
    indexes: [
        {
            unique: false,
            fields: ['amfi']
        }
    ]
  });
  return Transaction;
};
