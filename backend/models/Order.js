const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const User = require('./User');

const Order = sequelize.define('Order', {
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
  productId: {
    type: DataTypes.UUID,
    allowNull: true,
    field: 'product_id',
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'product_name',
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  totalAmount: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
    field: 'total_amount',
  },
  status: {
    type: DataTypes.ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'),
    defaultValue: 'pending',
  },
  trackingNumber: {
    type: DataTypes.STRING,
    field: 'tracking_number',
  },
  shippingAddress: {
    type: DataTypes.TEXT,
    field: 'shipping_address',
  },
  notes: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
  tableName: 'orders',
});

// Define associations
Order.belongsTo(User, { foreignKey: 'userId' });

module.exports = Order;
