const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const Investment = sequelize.define('Investment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  crop: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  minInvestment: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  maxInvestment: {
    type: DataTypes.DECIMAL(15, 2),
  },
  expectedRoi: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    field: 'expected_roi',
  },
  durationMonths: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'duration_months',
  },
  slotsAvailable: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'slots_available',
  },
  totalSlots: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'total_slots',
  },
  imageUrl: {
    type: DataTypes.STRING,
    field: 'image_url',
  },
  status: {
    type: DataTypes.ENUM('active', 'closed', 'completed'),
    defaultValue: 'active',
  },
  category: {
    type: DataTypes.ENUM('Crop Yield', 'Sustainable', 'Equipment', 'Livestock'),
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'investments',
});

module.exports = Investment;