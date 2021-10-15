'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nav extends Model {
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
  Nav.init({
    amfi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    nav: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Nav',
    timestamps: true,
    underscored: true,
    indexes: [
        {
            unique: true,
            fields: ['amfi', 'date']
        },
        {
            unique: false,
            fields: ['amfi']
        }
    ]
  });
  return Nav;
};
