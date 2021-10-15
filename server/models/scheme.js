'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scheme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Folio)
      this.hasMany(models.Transaction, {
        onDelete: 'CASCADE',
        foreignKey: 'amfi'
      })
      this.hasMany(models.Nav, {
        onDelete: 'CASCADE',
        foreignKey: 'amfi'
      })
      // define association here
    }
  };
  Scheme.init({
    folioNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amfi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    advisor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rtaCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valuation: {
        type: DataTypes.JSON,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Scheme',
    timestamps: true,
    underscored: true,
    indexes: [
        {
            unique: true,
            fields: ['amfi']
        }
    ]
  });
  return Scheme;
};
