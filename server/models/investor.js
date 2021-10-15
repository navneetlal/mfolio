'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Investor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Folio, {
        foreignKey: 'investor_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      // define association here
    }
  };
  Investor.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    mobile: {
        type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Investor',
    timestamps: true,
    underscored: true
  });
  return Investor;
};
