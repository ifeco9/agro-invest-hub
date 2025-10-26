const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Create SQLite database connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false, // Set to console.log to see SQL queries
});

module.exports = sequelize;