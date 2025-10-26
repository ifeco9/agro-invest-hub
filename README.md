AgroInvest Hub - Agricultural Investment Platform
Project Overview
AgroInvest Hub is a comprehensive agricultural investment platform that connects investors with farming opportunities across Nigeria. The platform provides transparent, sustainable, and profitable investment opportunities in the agricultural sector.
Key Features
Frontend (React + TypeScript)
Responsive Design: Mobile-first approach with modern UI components
Investment Opportunities: Showcase of various agricultural investment options
User Authentication: Secure signup and login functionality
Interactive Components:
Investment cards with detailed information
Filtering by region, crop type, and investment category
Professional UI with shadcn-ui components
Image Management: Local asset handling with optimized loading
Backend (Node.js + Express)
Database: SQLite with Sequelize ORM
User Management: Complete authentication system with JWT tokens
Investment Tracking: Database models for users, investments, and applications
Email Service: Notification system for user actions
RESTful API: Comprehensive endpoints for all platform functionality
Technology Stack
Frontend
React 18 with TypeScript
Vite build tool
Tailwind CSS for styling
shadcn-ui component library
React Router for navigation
Backend
Node.js with Express.js
SQLite database
Sequelize ORM
JWT for authentication
Nodemailer for email notifications
Project Structure
agro-yield-hub/
├── src/                 # Frontend source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── assets/          # Image assets
│   └── integrations/    # Backend integration
├── backend/             # Backend API
│   ├── models/          # Database models
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth middleware
│   └── services/        # Email service
├── public/              # Static assets
└── package.json         # Dependencies
Setup Instructions
Frontend
Install dependencies: npm install
Start development server: npm run dev
Build for production: npm run build
Backend
Navigate to backend: cd backend
Install dependencies: npm install
Start server: npm start
Development mode: npm run dev
API Endpoints
Authentication: /api/auth
Users: /api/users
Investments: /api/investments
Email: /api/email
Deployment
The platform can be deployed on any Node.js hosting service. Both frontend and backend can be deployed separately or together depending on infrastructure requirements.

