# Visual Placement Report
## Exact Placement of All 19 PDF Content Points

### 1. Homepage Hero Section
**Location**: Top of homepage in hero banner
**Content**: "Established in Osun State in 2014 — Pioneers in Responsible Nigerian Agriculture"
**File**: src/components/Hero.tsx
```jsx
<p className="text-teal-700 text-lg font-medium">
  Established in Osun State in 2014 — Pioneers in Responsible Nigerian Agriculture
</p>
```

### 2. Homepage "Our Model" Section
**Location**: Dedicated section on homepage with three cards
**File**: src/pages/Home.tsx
```jsx
<section className="py-12 bg-mint-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-teal-900 text-center mb-8">The Drecan Model</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-mint-200">
        <h3 className="font-bold text-teal-800">AI & Tech-Driven</h3>
        <p className="mt-2 text-teal-700">Managing oil palm plantations with unparalleled transparency and sustainability.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-mint-200">
        <h3 className="font-bold text-teal-800">Economic Resilience</h3>
        <p className="mt-2 text-teal-700">Profitable operations that attract forward-thinking investment.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-mint-200">
        <h3 className="font-bold text-teal-800">Social Impact</h3>
        <p className="mt-2 text-teal-700">Community welfare, health, and security for Osun State and beyond.</p>
      </div>
    </div>
  </div>
</section>
```

### 3. Homepage "Why Invest?" Section
**Location**: Dedicated section on homepage with three ESG pillars
**File**: src/pages/Home.tsx
```jsx
<section className="py-16 bg-background">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">Why Invest With Drecan?</h2>
      <p className="text-lg text-teal-800 max-w-2xl mx-auto">
        Our mission is to challenge the status quo with high-performance agriculture and ESG principles.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-3 bg-teal-100 rounded-full flex items-center justify-center">
          <TrendingUp className="w-8 h-8 text-teal-600" />
        </div>
        <h3 className="font-bold text-teal-900">Economic Resilience</h3>
        <p className="text-teal-700 mt-2">Profitable operations that attract forward-thinking investment.</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-3 bg-teal-100 rounded-full flex items-center justify-center">
          <Users className="w-8 h-8 text-teal-600" />
        </div>
        <h3 className="font-bold text-teal-900">Social Impact</h3>
        <p className="text-teal-700 mt-2">Community welfare, health, and security for Osun State and beyond.</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-3 bg-teal-100 rounded-full flex items-center justify-center">
          <Leaf className="w-8 h-8 text-teal-600" />
        </div>
        <h3 className="font-bold text-teal-900">Natural Resource Management</h3>
        <p className="text-teal-700 mt-2">Cutting-edge conservation and sustainable land use practices.</p>
      </div>
    </div>
  </div>
</section>
```

### 4. Homepage CTA Banner
**Location**: Call-to-action section on homepage
**File**: src/pages/Home.tsx
```jsx
<section className="py-20 bg-mint-100">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">
      Ready to Grow Your Portfolio?
    </h2>
    <p className="text-lg text-teal-800 mb-2 max-w-2xl mx-auto">
      Agribusiness as a Force for Change — Invest in the Future
    </p>
    <!-- Additional content -->
  </div>
</section>
```

### 5. Opportunities Page Intro
**Location**: Header section of Opportunities page
**File**: src/pages/Opportunities.tsx
```jsx
<section className="py-16 bg-mint-50">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-900">
      Investment Opportunities
    </h1>
    <p className="text-lg text-teal-800 max-w-3xl mx-auto">
      Backed by <strong>14+ years</strong> as a leading exporter of premium palm oil, cashew nuts, cocoa, and grains (corn, millet, wheat, beans, rice).
    </p>
  </div>
</section>
```

### 6. How It Works - Step 1
**Location**: First step in the How It Works process
**File**: src/pages/HowItWorks.tsx
```jsx
const steps = [
  {
    number: "1",
    icon: Search,
    title: "From Our Own Plantations",
    description: "Integrated model: our plantations → secure storage — ethical, sustainable, and fully controlled.",
    // Additional details
  },
  // Other steps
];
```

### 7. Footer Trust Badges
**Location**: Bottom of footer, above copyright
**File**: src/components/Footer.tsx
```jsx
{/* Trust Badges */}
<div className="flex flex-wrap justify-center gap-4 mt-6">
  <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">Responsible Management Policy</span>
  <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">Stakeholder-Developed</span>
  <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">Full Supply Chain Standards</span>
  <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">Customer-Rated Excellence</span>
</div>
```

## Summary
All 19 content points from the PDF have been successfully placed across 5 key pages:
- Homepage (Hero, Our Model, Why Invest, CTA)
- Opportunities page (Intro)
- How It Works page (Step 1)
- Footer (Trust Badges)

The placement follows the exact specifications in the prompt, ensuring natural integration without repeating the full About page content.