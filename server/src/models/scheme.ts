import { DataTypes } from 'sequelize';
import database from '../database';

import type { Model } from 'sequelize';
import Folio from './folio';
import Transaction from './transactions';
import Nav from './nav';

interface SchemeInstance extends Model {
  folioNumber: number
  amfi: string
  name: string
  type: string
  advisor: string
  rtaCode: string
  rta: string
  valuation: {
    date: Date
    amount: number
    value: number
    nav: number
    balance: number
  }
}

const Scheme = database.define<SchemeInstance>('Scheme', {
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
  timestamps: true,
  underscored: true,
  indexes: [
    {
      unique: true,
      fields: ['amfi']
    }
  ]
});

Scheme.hasMany(Transaction, {
  onDelete: 'CASCADE',
  foreignKey: 'amfi'
})
Transaction.belongsTo(Scheme)

Scheme.hasMany(Nav, {
  onDelete: 'CASCADE',
  foreignKey: 'amfi'
})
Nav.belongsTo(Scheme)

export default Scheme