import { DataTypes } from 'sequelize';
import database from '../database';

import type { Model } from 'sequelize';
import Folio from './folio';

interface InvestorInstance extends Model {
  name: string
  email: string
  address: string
  mobile: string
}

const Investor = database.define<InvestorInstance>('Investor', {
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