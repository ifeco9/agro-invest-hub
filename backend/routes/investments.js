const express = require('express');
const Investment = require('../models/Investment');
const InvestmentApplication = require('../models/InvestmentApplication');
const User = require('../models/User');
const auth = require('../middleware/auth');
const { sendEmail } = require('../services/emailService');

const router = express.Router();

// Get all active investments
router.get('/', async (req, res) => {
  try {
    const investments = await Investment.findAll({
      where: { status: 'active' },
      order: [['createdAt', 'DESC']],
    });
    res.json(investments);
  } catch (error) {
    console.error('Error fetching investments:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get investment by ID
router.get('/:id', async (req, res) => {
  try {
    const investment = await Investment.findByPk(req.params.id);
    
    if (!investment) {
      return res.status(404).json({ message: 'Investment not found' });
    }
    
    res.json(investment);
  } catch (error) {
    console.error('Error fetching investment:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create investment application
router.post('/apply', auth, async (req, res) => {
  try {
    const { investmentId, investmentAmount } = req.body;

    // Validation
    if (!investmentId || !investmentAmount) {
      return res.status(400).json({ message: 'Please provide investment ID and amount' });
    }

    // Check if investment exists and is active
    const investment = await Investment.findByPk(investmentId);
    if (!investment) {
      return res.status(404).json({ message: 'Investment not found' });
    }

    if (investment.status !== 'active') {
      return res.status(400).json({ message: 'This investment is not currently accepting applications' });
    }

    // Check if investment amount is within limits
    if (investmentAmount < investment.minInvestment) {
      return res.status(400).json({ 
        message: `Minimum investment amount is ₦${Number(investment.minInvestment).toLocaleString()}` 
      });
    }

    if (investment.maxInvestment && investmentAmount > investment.maxInvestment) {
      return res.status(400).json({ 
        message: `Maximum investment amount is ₦${Number(investment.maxInvestment).toLocaleString()}` 
      });
    }

    // Create investment application
    const application = await InvestmentApplication.create({
      userId: req.user.id,
      investmentId,
      investmentAmount,
    });

    // Get user details for email
    const user = await User.findByPk(req.user.id);

    // Send confirmation email
    await sendEmail(
      user.email, 
      'investmentApplicationReceived', 
      [user.firstName, investment.title, investmentAmount]
    );

    res.status(201).json({
      message: 'Investment application submitted successfully',
      application,
    });
  } catch (error) {
    console.error('Error creating investment application:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's investment applications
router.get('/my-applications', auth, async (req, res) => {
  try {
    const applications = await InvestmentApplication.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: Investment,
          attributes: ['title', 'region', 'crop', 'expectedRoi', 'durationMonths'],
        }
      ],
      order: [['createdAt', 'DESC']],
    });
    
    res.json(applications);
  } catch (error) {
    console.error('Error fetching user applications:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Approve investment application (admin only)
router.put('/applications/:id/approve', auth, async (req, res) => {
  try {
    // In a real implementation, you would check if the user is an admin
    const application = await InvestmentApplication.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['firstName', 'email'],
        },
        {
          model: Investment,
          attributes: ['title'],
        }
      ]
    });
    
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Update application status
    application.status = 'approved';
    await application.save();

    // Send approval email
    await sendEmail(
      application.User.email,
      'investmentApplicationApproved',
      [application.User.firstName, application.Investment.title, application.investmentAmount]
    );

    res.json({
      message: 'Application approved successfully',
      application,
    });
  } catch (error) {
    console.error('Error approving application:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;