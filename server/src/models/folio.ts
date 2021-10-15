import { DataTypes } from 'sequelize';
import database from '../database';

import type { Model } from 'sequelize';
import Scheme from './scheme';

interface FolioInstance extends Model {
  folioNumber: number
  amc: string
  pan: string
  kyc: boolean
  panKyc: boolean
}

const Folio = database.define<FolioInstance>('Folio', {
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
  timestamps: true,
  underscored: true,
  indexes: [
    {
      unique: true,
      fields: ['folioNumber']
    }
  ]
});

Folio.hasMany(Scheme, {
  onDelete: 'CASCADE',
  foreignKey: 'folioNumber'
})
Scheme.belongsTo(Folio)

export default Folio