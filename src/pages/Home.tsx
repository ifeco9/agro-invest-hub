import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import OpportunityCard from "@/components/OpportunityCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Shield, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import riceFarm from "@/assets/Kaduna Rice Yield Fund.jpeg";
import sustainableFarm from "@/assets/Ogun Cassava Processing Investment.jpeg";
import farmEquipment from "@/assets/farm-equipment.jpg";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const features = [
    {
      icon: Leaf,
      title: "Sustainable Impact",
      description: "Invest in eco-friendly agricultural projects that preserve farmland and promote sustainable farming practices across Nigeria.",
    },
    {
      icon: TrendingUp,
      title: "Proven Returns",
      description: "Access transparent opportunities with expected returns of 8-12%, backed by verified farm performance data and market analysis.",
    },
    {
      icon: Shield,
      title: "Easy Entry",
      description: "Start investing from ₦2,000,000 with our simple three-step process. SEC regulated platform ensuring security and compliance.",
    },
  ];

  const opportunities = [
    {
      title: "Kaduna Rice Yield Fund",
      image: riceFarm,
      region: "Kaduna State",
      crop: "Rice",
      minInvestment: "₦2,000,000",
      roi: "10-12%",
      duration: "12 months",
      slotsAvailable: 8,
      type: "Crop Yield",
    },
    {
      title: "Sustainable Farming Project",
      image: sustainableFarm,
      region: "Ogun State",
      crop: "Cassava",
      minInvestment: "₦4,000,000",
      roi: "8-10%",
      duration: "24 months",
      slotsAvailable: 15,
      type: "Sustainable",
    },
    {
      title: "Equipment Leasing Programme",
      image: farmEquipment,
      region: "Multi-State",
      crop: "Various",
      minInvestment: "₦5,000,000",
      roi: "9-11%",
      duration: "18 months",
      slotsAvailable: 3,
      type: "Equipment",
    },
  ];

  const testimonials = [
    {
      name: "Chukwudi Okafor",
      role: "Private Investor",
      content: "Expressed interest in the ₦4M rice yields project. Excited for the 15% projected ROI! The process was straightforward and transparent.",
      rating: 5,
    },
    {
      name: "Amina Bello",
      role: "Investment Portfolio Manager",
      content: "AgroInvest Hub provides excellent agricultural investment opportunities. Their sustainability focus aligns perfectly with our ESG goals.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "₦20B+", label: "Investment Interest" },
    { value: "200+", label: "Hectares Preserved" },
    { value: "500+", label: "Active Investors" },
    { value: "12%", label: "Average Returns" },
  ];

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">Why Choose Drecan Commodities?</h2>
            <p className="text-lg text-teal-800 max-w-2xl mx-auto">
              Transparent, sustainable, and profitable agricultural investment opportunities designed for modern investors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-20 bg-mint-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">Featured Investment Opportunities</h2>
            <p className="text-lg text-teal-800 max-w-2xl mx-auto">
              Explore our curated selection of high-yield agricultural investments across Nigeria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {opportunities.map((opportunity, index) => (
              <OpportunityCard key={index} {...opportunity} />
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/opportunities">
                View All Opportunities <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Three-Step Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your agricultural investment journey in minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Discover",
                description: "Browse verified farm opportunities across UK regions with detailed performance data.",
              },
              {
                step: "2",
                title: "Calculate",
                description: "Use our free ROI calculator to project your returns based on investment amount.",
              },
              {
                step: "3",
                title: "Reserve",
                description: "Submit your interest securely and our team will guide you through the process.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-teal-900">{item.title}</h3>
                <p className="text-teal-800">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white" asChild>
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-mint-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">What Investors Say</h2>
            <p className="text-lg text-teal-800 max-w-2xl mx-auto">
              Join hundreds of satisfied investors growing their portfolios sustainably.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonialIndex 
                      ? 'bg-teal-600' 
                      : 'bg-mint-200'
                  }`}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mint-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">
            Ready to Grow Your Portfolio?
          </h2>
          <p className="text-lg text-teal-800 mb-8 max-w-2xl mx-auto">
            Join our community of investors and start earning sustainable returns from Nigerian agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-teal-600 hover:bg-teal-700 text-white" asChild>
              <Link to="/contact">Reserve Your Spot</Link>
            </Button>
            <Button size="xl" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50" asChild>
              <Link to="/opportunities">Browse Opportunities</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 text-teal-800">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">SEC Regulated</span>
            </div>
            <div className="flex items-center gap-2 text-teal-800">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">Transparent Reporting</span>
            </div>
            <div className="flex items-center gap-2 text-teal-800">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">Expert Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;