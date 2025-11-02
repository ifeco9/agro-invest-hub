const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const initDb = require('./config/initDb');
const userRoutes = require('./routes/users');
const investmentRoutes = require('./routes/investments');
const authRoutes = require('./routes/auth');
const emailRoutes = require('./routes/email');
const orderRoutes = require('./routes/orders');

// Load environment variables
dotenv.config();

// Initialize database
initDb();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/orders', orderRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'AgroInvest Hub Backend is running!', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: process.env.NODE_ENV === 'development' ? err.message : {} });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;