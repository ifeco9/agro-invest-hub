const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const User = require('./User');
const Investment = require('./Investment');

const InvestmentApplication = sequelize.define('InvestmentApplication', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    field: 'user_id',
  },
  investmentId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Investment,
      key: 'id',
    },
    field: 'investment_id',
  },
  investmentAmount: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
    field: 'investment_amount',
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected', 'completed'),
    defaultValue: 'pending',
  },
  paymentStatus: {
    type: DataTypes.ENUM('pending', 'paid', 'failed'),
    defaultValue: 'pending',
    field: 'payment_status',
  },
  paymentReference: {
    type: DataTypes.STRING,
    field: 'payment_reference',
  },
  documents: {
    type: DataTypes.JSON,
  },
  notes: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
  tableName: 'investment_applications',
});

// Define associations
InvestmentApplication.belongsTo(User, { foreignKey: 'userId' });
InvestmentApplication.belongsTo(Investment, { foreignKey: 'investmentId' });

module.exports = InvestmentApplication;