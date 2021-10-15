import { DataTypes } from 'sequelize';
import database from '../database';

import type { Model } from 'sequelize';

interface ValuationInstance extends Model {
  amfi: number
  date: Date
  amount: number
  value: number
  nav: number
  balance: number
}

const Valuation = database.define<ValuationInstance>('Valuation', {
  amfi: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nav: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  timestamps: true,
  underscored: true,
  indexes: [
    {
      unique: true,
      fields: ['amfi']
    }
  ]
});

export default Valuation