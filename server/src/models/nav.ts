import { DataTypes } from 'sequelize';
import database from '../database';

import type { Model } from 'sequelize';

interface NavInstance extends Model {
  amfi: number
  date: Date
  nav: number
}

const Nav = database.define<NavInstance>('Nav', {
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
  },
}, {
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

export default Nav