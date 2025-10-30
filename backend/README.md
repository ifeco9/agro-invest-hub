# AgroInvest Hub Backend

This is the backend API for the AgroInvest Hub platform, built with Node.js, Express, and SQLite.
Features

- User authentication (registration, login)
- Investment opportunity management
- Investment application processing
- Email notifications
- RESTful API

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **SQLite** - Database (with Sequelize ORM)
- **JWT** - Authentication
- **Nodemailer** - Email service
- **Bcrypt.js** - Password hashing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your configuration

4. Start the development server:
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update user profile

### Investments
- `GET /api/investments` - Get all active investments
- `GET /api/investments/:id` - Get investment by ID
- `POST /api/investments/apply` - Apply for an investment
- `GET /api/investments/my-applications` - Get user's applications

### Email
- `POST /api/email/send` - Send email
- `GET /api/email/templates` - Get available templates

## Database Schema

The application uses SQLite with the following tables:

1. **Users** - Store user information
2. **Investments** - Store investment opportunities
3. **InvestmentApplications** - Store user investment applications

## Environment Variables

Create a `.env` file with the following variables:

```
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com
```

## Development

To run in development mode with auto-restart:
```bash
npm run dev
```

## Production

To run in production mode:
```bash
npm start
```