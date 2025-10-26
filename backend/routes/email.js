const express = require('express');
const { sendEmail } = require('../services/emailService');

const router = express.Router();

// Send test email
router.post('/send', async (req, res) => {
  try {
    const { to, template, variables } = req.body;

    // Validation
    if (!to || !template) {
      return res.status(400).json({ message: 'Please provide recipient and template' });
    }

    // Send email
    const result = await sendEmail(to, template, variables || []);

    if (result.success) {
      res.json({ message: 'Email sent successfully', messageId: result.messageId });
    } else {
      res.status(500).json({ message: 'Failed to send email', error: result.error });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get available email templates
router.get('/templates', (req, res) => {
  res.json({
    message: 'Available email templates',
    templates: [
      'welcome',
      'investmentApplicationReceived',
      'investmentApplicationApproved',
      'investmentPaymentConfirmed'
    ]
  });
});

module.exports = router;