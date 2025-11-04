import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Clock, Users, Zap, Award, Shield } from "lucide-react";

const Opportunities = () => {
  const [investmentAmount, setInvestmentAmount] = useState(2000000);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Simple confetti effect using CSS animations
  const handleReserveSlot = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    
    // Show alert
    alert("Thank you for your interest! Our team will contact you shortly to finalize your reservation.");
  };

  // Auto-rotate investment amount for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setInvestmentAmount(prev => {
        if (prev >= 10000000) return 2000000;
        return prev + 500000;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Invest in Agriculture. Earn Returns. Empower Lives.
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl max-w-md sm:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of investors who are making a difference while earning sustainable returns
          </motion.p>
        </div>
      </section>

      {/* Investment Tables */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12 sm:space-y-16">
            {/* AgroTrade */}
            <motion.div 
              className="bg-card rounded-lg shadow-lg border border-border overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">AgroTrade Investment</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">Short-term trading opportunities with consistent returns</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Investment Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Investment:</span>
                        <span className="font-semibold text-sm sm:text-base">₦2,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Expected ROI:</span>
                        <span className="font-semibold text-sm sm:text-base">8-12% annually</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">6-12 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Payout Frequency:</span>
                        <span className="font-semibold text-sm sm:text-base">Monthly</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Risk Level:</span>
                        <span className="font-semibold text-sm sm:text-base">Low-Medium</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Projected Returns
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl sm:text-3xl font-bold text-primary">
                          ₦{investmentAmount.toLocaleString()} → ₦{(investmentAmount * 1.1).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </div>
                        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                          Return on a ₦{investmentAmount.toLocaleString()} investment
                        </p>
                      </div>
                      <div className="mt-4">
                        <label className="block text-muted-foreground mb-2 text-sm">Investment Amount:</label>
                        <input
                          type="range"
                          min="2000000"
                          max="10000000"
                          step="100000"
                          value={investmentAmount}
                          onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                          <span>₦2M</span>
                          <span>₦10M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Safety & Security
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Backed by physical agricultural commodities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Transparent supply chain tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Monthly performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Insurance coverage on stored commodities</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Social Impact
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Fair prices for 500+ local farmers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Affordable food access for 2,000+ families</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Supports SDG 2: Zero Hunger</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Creates 50+ seasonal employment opportunities</span>
                    </li>
                  </ul>
                </div>
                
                <motion.div 
                  className="mt-6 sm:mt-8 text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      id="reserve-button"
                      size="lg" 
                      className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
                      onClick={handleReserveSlot}
                    >
                      Reserve Slot
                    </Button>
                  </motion.div>
                  
                  {/* Confetti effect */}
                  <AnimatePresence>
                    {showConfetti && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(50)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: ['#0D9488', '#14B8A6', '#0F766E', '#115E59'][Math.floor(Math.random() * 4)],
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            initial={{ opacity: 0, y: 0, x: 0 }}
                            animate={{ 
                              opacity: [0, 1, 0],
                              y: [0, -100],
                              x: [0, (Math.random() - 0.5) * 100],
                              rotate: [0, 360]
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ 
                              duration: 2,
                              delay: Math.random() * 0.5
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
            
            {/* AgroFarm */}
            <motion.div 
              className="bg-card rounded-lg shadow-lg border border-border overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">AgroFarm Investment</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">Long-term farming partnerships with higher returns</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Investment Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Investment:</span>
                        <span className="font-semibold text-sm sm:text-base">₦5,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Expected ROI:</span>
                        <span className="font-semibold text-sm sm:text-base">15-25% annually</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">12-24 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Payout Frequency:</span>
                        <span className="font-semibold text-sm sm:text-base">At harvest</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Risk Level:</span>
                        <span className="font-semibold text-sm sm:text-base">Medium</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Projected Returns
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl sm:text-3xl font-bold text-primary">
                          ₦2,000,000 → ₦3,200,000
                        </div>
                        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                          Return on a ₦2,000,000 investment in rice farming
                        </p>
                      </div>
                      <div className="mt-4 text-sm text-muted-foreground">
                        <p>Example: A ₦5M investment in cassava farming can yield ₦7.5M after 18 months</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Safety & Security
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Professional farm management team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Regular farm inspection reports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Crop insurance coverage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Guaranteed buyback program</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Social Impact
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Empowers 200+ farming families</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Provides technical training to local farmers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Supports SDG 8: Decent Work and Economic Growth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Improves rural infrastructure</span>
                    </li>
                  </ul>
                </div>
                
                <motion.div 
                  className="mt-6 sm:mt-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary-hover text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-3"
                      onClick={handleReserveSlot}
                    >
                      Reserve Slot
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* AgroReserve */}
            <motion.div 
              className="bg-card rounded-lg shadow-lg border border-border overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">AgroReserve Investment</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">Premium long-term investment with maximum returns</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Investment Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Investment:</span>
                        <span className="font-semibold text-sm sm:text-base">₦10,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Expected ROI:</span>
                        <span className="font-semibold text-sm sm:text-base">25-35% annually</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">24-36 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Payout Frequency:</span>
                        <span className="font-semibold text-sm sm:text-base">At maturity</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Risk Level:</span>
                        <span className="font-semibold text-sm sm:text-base">Medium-High</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Projected Returns
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl sm:text-3xl font-bold text-primary">
                          ₦10,000,000 → ₦13,500,000
                        </div>
                        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                          Return on a ₦10,000,000 investment over 24 months
                        </p>
                      </div>
                      <div className="mt-4 text-sm text-muted-foreground">
                        <p>Example: A ₦20M investment in palm oil plantation can yield ₦30M after 36 months</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Safety & Security
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Land ownership documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Comprehensive risk management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Quarterly performance audits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Government-backed contracts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Social Impact
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Creates 100+ permanent jobs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Develops sustainable farming practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Supports SDG 12: Responsible Consumption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-sm sm:text-base text-muted-foreground">Contributes to rural economic development</span>
                    </li>
                  </ul>
                </div>
                
                <motion.div 
                  className="mt-6 sm:mt-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary-hover text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-3"
                      onClick={handleReserveSlot}
                    >
                      Reserve Slot
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start Investing?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join our community of investors and start earning sustainable returns from Nigerian agriculture
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
              asChild
            >
              <Link to="/contact">Start Investing</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;