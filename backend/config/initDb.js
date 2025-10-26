const sequelize = require('./db');
const User = require('../models/User');
const Investment = require('../models/Investment');
const InvestmentApplication = require('../models/InvestmentApplication');

const initDb = async () => {
  try {
    // Authenticate with database
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    // Sync all models
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');

    // Check if we need to seed initial data
    const userCount = await User.count();
    if (userCount === 0) {
      console.log('Seeding initial data...');
      await seedInitialData();
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

const seedInitialData = async () => {
  try {
    // Create sample investments
    const investments = await Investment.bulkCreate([
      {
        title: "Kaduna Rice Yield Fund",
        description: "Invest in rice cultivation in Kaduna State with expected returns of 10-12% annually.",
        region: "Kaduna",
        crop: "Rice",
        minInvestment: 2000000,
        maxInvestment: 10000000,
        expectedRoi: 11.5,
        durationMonths: 12,
        slotsAvailable: 8,
        totalSlots: 10,
        status: "active",
        category: "Crop Yield",
      },
      {
        title: "Ogun Cassava Processing Investment",
        description: "Support cassava processing facilities in Ogun State with sustainable farming practices.",
        region: "Ogun",
        crop: "Cassava",
        minInvestment: 4000000,
        maxInvestment: 15000000,
        expectedRoi: 9.5,
        durationMonths: 24,
        slotsAvailable: 15,
        totalSlots: 20,
        status: "active",
        category: "Sustainable",
      },
      {
        title: "Kano Wheat Farming Project",
        description: "Participate in wheat farming initiatives in Kano State with modern agricultural techniques.",
        region: "Kano",
        crop: "Wheat",
        minInvestment: 3000000,
        maxInvestment: 12000000,
        expectedRoi: 10.2,
        durationMonths: 18,
        slotsAvailable: 3,
        totalSlots: 5,
        status: "active",
        category: "Crop Yield",
      },
    ]);

    console.log('Sample investments created:', investments.length);
  } catch (error) {
    console.error('Error seeding initial data:', error);
  }
};

module.exports = initDb;