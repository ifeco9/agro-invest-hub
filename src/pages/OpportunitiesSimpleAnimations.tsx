import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Users, Zap, Award, Shield, Leaf, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Opportunities = () => {
  const [investmentAmount, setInvestmentAmount] = useState(500000);
  const [showConfetti, setShowConfetti] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Simple confetti effect using CSS animations
  const handleReserveSlot = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);

    // Show alert
    alert("Thank you for your interest! Our team will contact you shortly to finalize your partnership.");
  };

  // Auto-rotate investment amount for demo purposes
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setInvestmentAmount(prev => {
        if (prev >= 5000000) return 500000;
        return prev + 500000;
      });
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-teal-800 text-white animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-slide-up">
            Drecan Partnership Plans
          </h1>
          <p className="text-base sm:text-xl max-w-md sm:max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Strategic partnership opportunities with flexible durations, transparent interest structures, and credible returns backed by real agricultural ventures
          </p>
        </div>
      </section>

      {/* Partnership Tiers Overview */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Partnership Tiers
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-center">
            Drecan accommodates different partnering capacities with three main tiers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Tier 1</h3>
              </div>
              <p className="text-2xl font-bold text-primary mb-2">₦500,000 Min</p>
              <p className="text-muted-foreground">Small-scale partners or first-time partners. Can invest in 3-month, 6-month, or 1-year plans.</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Tier 2</h3>
              </div>
              <p className="text-2xl font-bold text-primary mb-2">₦2,000,000 Min</p>
              <p className="text-muted-foreground">Medium-scale partners seeking higher returns. Can invest in 1-year or 2-year plans.</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Tier 3</h3>
              </div>
              <p className="text-2xl font-bold text-primary mb-2">₦10,000,000 Min</p>
              <p className="text-muted-foreground">Large-scale partners aiming for maximum profitability. Recommended for 2-year or 3-year plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Plans */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Partnership Plans
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
            Choose from multiple partnership durations designed to provide high and credible returns while keeping capital deployment transparent and diversified
          </p>

          <div className="space-y-12 sm:space-y-16">
            {/* 3-Month Plan */}
            <div id="three-month" className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover-lift transition-all duration-300">
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">3-Month Partnership Plan</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">Short-term engagement for quick returns</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Partnership Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦500,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Maximum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦1,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Interest Rate:</span>
                        <span className="font-semibold text-sm sm:text-base text-primary">20% - 25%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">3 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Payment Starts:</span>
                        <span className="font-semibold text-sm sm:text-base">2nd month</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Payment Terms
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <p className="text-muted-foreground text-sm sm:text-base mb-3">
                        Interest is paid starting from the second month of investment to the end of investment period. Interest can also be calculated and paid at the end of investment period; principal returned at the end of three months.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
                    onClick={handleReserveSlot}
                  >
                    Reserve Partnership Slot
                  </Button>
                </div>
              </div>
            </div>

            {/* 6-Month Plan */}
            <div id="six-month" className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover-lift transition-all duration-300">
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">6-Month Partnership Plan</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">Balanced duration with strong returns</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Partnership Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦500,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Maximum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦5,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Interest Rate:</span>
                        <span className="font-semibold text-sm sm:text-base text-primary">35% - 45%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">6 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Payment Starts:</span>
                        <span className="font-semibold text-sm sm:text-base">3rd month</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Payment Terms
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <p className="text-muted-foreground text-sm sm:text-base mb-3">
                        Interest is paid starting from the third month of investment to the end of investment period. Interest can also be calculated and paid at the end of investment period; principal returned at the end of six months.
                      </p>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Capital is deployed in high-value crops and small-scale livestock operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
                    onClick={handleReserveSlot}
                  >
                    Reserve Partnership Slot
                  </Button>
                </div>
              </div>
            </div>

            {/* 1-Year Plan */}
            <div id="one-year" className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover-lift transition-all duration-300">
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">1-Year Partnership Plan</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">High-yield annual partnership</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Partnership Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦500,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Maximum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦10,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Interest Rate:</span>
                        <span className="font-semibold text-sm sm:text-base text-primary">75% - 100%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">12 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Payment Starts:</span>
                        <span className="font-semibold text-sm sm:text-base">4th month</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Payment Terms & Deployment
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <p className="text-muted-foreground text-sm sm:text-base mb-3">
                        Interest is paid starting from the fourth month of investment to the end of investment period. Interest can also be calculated and paid at the end of the year; principal returned at the end of one year.
                      </p>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Capital is used for palm oil, grains, cocoa, cashew, poultry, and small livestock operations. Partners have the option to receive interest only at the end of the year, ensuring maximum growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
                    onClick={handleReserveSlot}
                  >
                    Reserve Partnership Slot
                  </Button>
                </div>
              </div>
            </div>

            {/* 2-Year Plan */}
            <div id="two-year" className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover-lift transition-all duration-300">
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">2-Year Partnership Plan</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">Long-term growth with premium returns</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Partnership Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦3,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Interest Rate:</span>
                        <span className="font-semibold text-sm sm:text-base text-primary">100% - 150%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">24 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Payment Starts:</span>
                        <span className="font-semibold text-sm sm:text-base">4th month</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Payment Terms & Deployment
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <p className="text-muted-foreground text-sm sm:text-base mb-3">
                        <strong>Annual Interest Payout:</strong> Interest is paid starting from the fourth month of investment to the end of investment period. Interest can also be calculated per year and paid at the end of each year while principal is retained. At the end of the second year, the remaining interest and principal are returned.
                      </p>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Capital is used in high-value crop plantations, large-scale livestock, aquaculture, and agro-processing. Partners are encouraged to take advantage of the longer term to maximize returns and exposure to export-oriented products like cowhide and processed palm oil.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
                    onClick={handleReserveSlot}
                  >
                    Reserve Partnership Slot
                  </Button>
                </div>
              </div>
            </div>

            {/* 3-Year Plan */}
            <div id="three-year" className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover-lift transition-all duration-300">
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">3-Year Partnership Plan</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">Maximum returns for large-scale partners</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Partnership Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Investment:</span>
                        <span className="font-semibold text-sm sm:text-base">₦5,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Interest Rate:</span>
                        <span className="font-semibold text-sm sm:text-base text-primary">180% - 250%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">36 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Payment Starts:</span>
                        <span className="font-semibold text-sm sm:text-base">4th month</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Payment Terms
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <p className="text-muted-foreground text-sm sm:text-base mb-3">
                        <strong>Annual Interest Payout:</strong> Interest is paid starting from the fourth month of investment to the end of investment period. Interest can also be calculated per year and paid at the end of each year while principal is retained. At the end of the third year, the remaining interest and principal are returned.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Fund Deployment
                  </h3>
                  <div className="bg-secondary rounded-lg p-4 mb-4">
                    <p className="text-muted-foreground text-sm sm:text-base mb-3">
                      Designed for large-scale investors aiming for maximum returns. Funds deployed into long-term, high-value agricultural projects, including:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✓</span>
                        <span>Large palm oil plantations with processing facilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✓</span>
                        <span>Export-focused grain operations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✓</span>
                        <span>Integrated livestock and poultry farms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✓</span>
                        <span>Cowhide exportation and leather processing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✓</span>
                        <span>Aquaculture for local and international markets</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✓</span>
                        <span>Diversified portfolio ensures risk mitigation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
                    onClick={handleReserveSlot}
                  >
                    Reserve Partnership Slot
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Portfolio */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Drecan Agricultural Partnership Portfolio
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
            Drecan actively uses partner capital in high-value agricultural and agro-industrial projects to ensure sustainable and profitable growth
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* High-Value Crops */}
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">High-Value Crop Production</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Palm Oil & Products:</strong> Large-scale plantations with mechanized processing. Projected Returns: 80%-120% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Grains (Maize, Rice, Wheat, Sorghum):</strong> Mechanized and export-focused farms. Projected Returns: 110%-200% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Cash Crops (Cocoa, Cashew, Soybeans, Vegetables):</strong> High-demand export crops. Projected Returns: 110%-200% annually.
                  </div>
                </li>
              </ul>
            </div>

            {/* Livestock & Animal Farming */}
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Livestock & Animal Farming</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Cattle, Goats, Sheep:</strong> Rearing for meat, breeding, and hides. Projected Returns: 40%-70% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Poultry:</strong> Broilers and layers for meat and eggs. Projected Returns: 35%-60% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Aquaculture:</strong> Tilapia and catfish farms for local and export markets. Projected Returns: 40%-70% annually.
                  </div>
                </li>
              </ul>
            </div>

            {/* Agro-Industrial Operations */}
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Agro-Industrial & Export</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Cowhide Exportation & Leather Processing:</strong> High-quality cowhide exported internationally. Projected Returns: 80%-125% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Agro-Processing:</strong> Palm oil, grains, and livestock products processed to add value. Projected Returns: 100%-150% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Integrated Farming Systems:</strong> Combines crops, livestock, and aquaculture for diversified revenue streams and reduced risk.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Impact & Security */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
            Partnership Impact & Security
          </h2>
          <p className="text-base sm:text-lg mb-12 max-w-3xl mx-auto text-center">
            Partnering with Drecan ensures that funds are actively deployed in real, tangible, and revenue-generating projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <Shield className="h-12 w-12 text-teal-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Actively Deployed</h3>
              <p className="text-teal-100">Funds are invested in real, tangible, and revenue-generating agricultural projects</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <TrendingUp className="h-12 w-12 text-teal-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Diversified</h3>
              <p className="text-teal-100">Capital spread across crops, livestock, aquaculture, and agro-processing to reduce risk</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <Clock className="h-12 w-12 text-teal-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Transparent</h3>
              <p className="text-teal-100">Regular performance updates for all partners throughout the partnership period</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <Leaf className="h-12 w-12 text-teal-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sustainable Growth</h3>
              <p className="text-teal-100">Contributing to agricultural development and economic progress in Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
            Ready to Start Your Partnership?
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-2xl mx-auto text-muted-foreground">
            Join our community of partners and start earning credible returns from Nigerian agriculture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-700 hover:bg-teal-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-700 text-teal-700 hover:bg-teal-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Confetti overlay */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-confetti"
              style={{
                backgroundColor: ['#0D9488', '#14B8A6', '#0F766E', '#115E59'][Math.floor(Math.random() * 4)],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Opportunities;