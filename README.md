# AgroInvest Hub - Agricultural Investment Platform

## Project Overview
AgroInvest Hub is a comprehensive agricultural investment platform that connects investors with farming opportunities across Nigeria. The platform provides transparent, sustainable, and profitable investment opportunities in the agricultural sector.

## Recent Enhancements

### 1. Updated Logo Implementation
- **Logo Source**: Using existing `src/assets/logo.jpg` file
- **Desktop Version**: Full logo with "DRECAN COMMODITIES" text and italic tagline "From farm to the world" using attractive Playfair Display and Montserrat fonts
- **Mobile Version**: Icon-only logo positioned on the far right of mobile navbar
- **Hover Effect**: Subtle scale effect (1.05) on logo hover

### 2. Modern Color Scheme
- **Primary**: Deep Navy Blue (`#1E3A5F`) for navbar, buttons, headings
- **Secondary**: Muted Agricultural Green (`#4A7F4A`) for accents and secondary elements
- **Accent**: Soft Sky Blue (`#4A90E2`) for CTAs, hover states, progress bars
- **Background**: Clean White (`#FFFFFF`) with very light gray (`#F8FAFC`) for cards
- **Text**: Dark Charcoal (`#2D3748`) for body, Navy for headings
- **Green**: Used more prominently but in muted tones for a professional agricultural aesthetic

### 3. Enhanced Interactive Web Design
- **Opportunity Cards**:
  - Hover effect: Lift (`translateY(-4px)`), soft shadow, image zoom-in (1.05x)
  - "Reserve Now" button: Pulse animation when <3 slots left
- **Navbar**:
  - Active page underline slides in with liquid effect
  - Mobile menu: Slide from right with backdrop blur
- **Hero Section**:
  - Background image parallax effect on scroll
  - Headline letters fade in one by one on page load
- **Testimonials**: 
  - Auto-rotate every 6 seconds with smooth crossfade
  - Navigation indicators for manual selection

### 4. Consistent Updates Across All Pages
All pages have been updated with the new logo, color scheme, and micro-interactions:
- Homepage
- Opportunities Page
- How It Works
- About Us
- Insights/Blog
- Contact/Reserve
- Mobile Menu

## Technology Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn-ui components
- **Build Tool**: Vite
- **Routing**: React Router
- **State Management**: React Hooks

## Project Structure
```
agro-yield-hub/
├── public/              # Static assets (logos, favicon, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # shadcn-ui components
│   │   └── custom/      # Custom components (Navbar, Hero, etc.)
│   ├── pages/           # Page components
│   ├── assets/          # Image assets
│   ├── lib/             # Utility functions
│   └── App.tsx          # Main application component
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## Key Components

### Logo Component
Located at `src/components/Logo.tsx`, handles both full and icon variants with proper sizing and hover effects.

### Navbar Component
Located at `src/components/Navbar.tsx`, features responsive design with logo positioning and mobile menu enhancements.

### OpportunityCard Component
Located at `src/components/OpportunityCard.tsx`, includes hover animations and slot-based pulse effects.

### Hero Component
Located at `src/components/Hero.tsx`, implements parallax scrolling and typewriter animation.

### Home Page
Located at `src/pages/Home.tsx`, features auto-rotating testimonials with crossfade transitions.

## Setup Instructions
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`
4. Preview production build: `npm run preview`

## Development Notes
- All styling uses Tailwind CSS classes only
- Color scheme defined in `src/index.css` with HSL values
- Animations defined in `tailwind.config.ts`
- Responsive design follows mobile-first approach
- Components are modular and reusable

## Custom Animations
- `animate-fade-in`: Element fades in on load
- `animate-slide-up`: Element slides up on load
- `animate-scale-in`: Element scales in on load
- `animate-pulse-slow`: Slow pulse effect for limited slots