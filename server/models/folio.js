'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Folio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Scheme, {
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          foreignKey: 'folioNumber'
      })
    }
  };
  Folio.init({
    folioNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pan: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'PAN Card number'
    },
    kyc: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: 'Is KYC verified?'
    },
    panKyc: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: 'Is PAN verified?'
    }
  }, {
    sequelize,
    modelName: 'Folio',
    timestamps: true,
    underscored: true,
    indexes: [
        {
            unique: true,
            fields: ['folioNumber']
        }
    ]
  });
  return Folio;
};
