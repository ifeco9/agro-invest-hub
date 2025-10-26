const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email templates
const emailTemplates = {
  welcome: {
    subject: 'Welcome to AgroInvest Hub',
    body: (firstName) => `
      <h2>Welcome to AgroInvest Hub, ${firstName}!</h2>
      <p>We're excited to have you join our community of agricultural investors.</p>
      <p>You can now explore our investment opportunities and start building your agricultural portfolio.</p>
      <p>Best regards,<br/>The AgroInvest Hub Team</p>
    `,
  },
  investmentApplicationReceived: {
    subject: 'Investment Application Received',
    body: (firstName, opportunityTitle, investmentAmount) => `
      <h2>Hello ${firstName},</h2>
      <p>We have received your investment application for <strong>${opportunityTitle}</strong>.</p>
      <p>Application details:</p>
      <ul>
        <li>Amount: ₦${Number(investmentAmount).toLocaleString()}</li>
        <li>Status: Pending review</li>
      </ul>
      <p>We will review your application and get back to you soon.</p>
      <p>Best regards,<br/>The AgroInvest Hub Team</p>
    `,
  },
  investmentApplicationApproved: {
    subject: 'Investment Application Approved',
    body: (firstName, opportunityTitle, investmentAmount) => `
      <h2>Hello ${firstName},</h2>
      <p>Great news! Your investment application for <strong>${opportunityTitle}</strong> has been approved.</p>
      <p>Next steps:</p>
      <ol>
        <li>Complete payment of ₦${Number(investmentAmount).toLocaleString()}</li>
        <li>Upload required documents</li>
      </ol>
      <p>Best regards,<br/>The AgroInvest Hub Team</p>
    `,
  },
  investmentPaymentConfirmed: {
    subject: 'Payment Confirmed',
    body: (firstName, opportunityTitle, investmentAmount, startDate) => `
      <h2>Hello ${firstName},</h2>
      <p>Your payment of ₦${Number(investmentAmount).toLocaleString()} for <strong>${opportunityTitle}</strong> has been confirmed.</p>
      <p>Your investment is now active and will start generating returns on ${new Date(startDate).toLocaleDateString()}.</p>
      <p>Best regards,<br/>The AgroInvest Hub Team</p>
    `,
  },
};

// Send email
const sendEmail = async (to, templateName, variables = {}) => {
  try {
    const template = emailTemplates[templateName];
    
    if (!template) {
      throw new Error(`Email template '${templateName}' not found`);
    }
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to,
      subject: template.subject,
      html: template.body(...Object.values(variables)),
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendEmail,
};