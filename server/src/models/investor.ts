import { DataTypes } from 'sequelize';
import database from '../database';

import type { Model } from 'sequelize';
import Folio from './folio';

interface InvestorInstance extends Model {
  investorId: number,
  name: string
  email: string
  address: string
  mobile: string
}

const Investor = database.define<InvestorInstance>('Investor', {
  investorId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
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
  timestamps: true,
  underscored: true
});

Investor.hasMany(Folio, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'investorId'
})
Folio.belongsTo(Investor)

export default Investor