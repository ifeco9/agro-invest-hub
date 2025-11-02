const express = require('express');
const Order = require('../models/Order');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all orders for current user
router.get('/my-orders', auth, async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.user.id },
      order: [['createdAt', 'DESC']],
    });

    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get specific order by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const order = await Order.findOne({
      where: { 
        id: req.params.id,
        userId: req.user.id 
      },
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new order
router.post('/create', auth, async (req, res) => {
  try {
    const { productId, productName, quantity, totalAmount, shippingAddress, notes } = req.body;

    // Validation
    if (!productName || !totalAmount) {
      return res.status(400).json({ message: 'Product name and total amount are required' });
    }

    const order = await Order.create({
      userId: req.user.id,
      productId,
      productName,
      quantity: quantity || 1,
      totalAmount,
      shippingAddress,
      notes,
      status: 'pending',
    });

    res.status(201).json({ 
      message: 'Order created successfully', 
      order 
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update order status (admin only - simplified for now)
router.put('/:id/status', auth, async (req, res) => {
  try {
    const { status, trackingNumber } = req.body;

    const order = await Order.findByPk(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Update order
    await order.update({
      status: status || order.status,
      trackingNumber: trackingNumber || order.trackingNumber,
    });

    res.json({ 
      message: 'Order updated successfully', 
      order 
    });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
