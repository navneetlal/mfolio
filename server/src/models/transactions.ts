import { DataTypes } from 'sequelize';
import database from '../database';

import type { Model } from 'sequelize';

interface TransactionInstance extends Model {
  amfi: string
  date: Date
  description: string
  amount: number
  units: number
  nav: number
  balance: number
  type: string
  dividendRate: number
}

const Transaction = database.define<TransactionInstance>('Transaction', {
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
  timestamps: true,
  underscored: true,
  indexes: [
    {
      unique: false,
      fields: ['amfi']
    }
  ]
});

export default Transaction