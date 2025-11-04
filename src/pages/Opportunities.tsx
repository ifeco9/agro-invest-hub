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
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Invest in Agriculture. Earn Returns. Empower Lives.
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of investors who are making a difference while earning sustainable returns
          </motion.p>
        </div>
      </section>

      {/* Investment Tables */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* AgroTrade */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg border border-teal-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="bg-gradient-to-r from-teal-800 to-teal-700 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-6 w-6" />
                  <h2 className="text-3xl font-bold">AgroTrade Investment</h2>
                </div>
                <p className="text-teal-100">Short-term trading opportunities with consistent returns</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-teal-600" />
                      Investment Details
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex justify-between border-b pb-2">
                        <span>Minimum Investment:</span>
                        <span className="font-semibold">₦2,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Expected ROI:</span>
                        <span className="font-semibold">8-12% annually</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Duration:</span>
                        <span className="font-semibold">6-12 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Payout Frequency:</span>
                        <span className="font-semibold">Monthly</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Risk Level:</span>
                        <span className="font-semibold">Low-Medium</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-teal-600" />
                      Projected Returns
                    </h3>
                    <div className="bg-teal-50 rounded-lg p-4 mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-teal-700">
                          ₦{investmentAmount.toLocaleString()} → ₦{(investmentAmount * 1.1).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </div>
                        <p className="text-gray-600 mt-2">
                          Return on a ₦{investmentAmount.toLocaleString()} investment
                        </p>
                      </div>
                      <div className="mt-4">
                        <label className="block text-gray-700 mb-2">Investment Amount:</label>
                        <input
                          type="range"
                          min="2000000"
                          max="10000000"
                          step="100000"
                          value={investmentAmount}
                          onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                          className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                          <span>₦2M</span>
                          <span>₦10M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-teal-600" />
                    Safety & Security
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Backed by physical agricultural commodities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Transparent supply chain tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Monthly performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Insurance coverage on stored commodities</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal-600" />
                    Social Impact
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Fair prices for 500+ local farmers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Affordable food access for 2,000+ families</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Supports SDG 2: Zero Hunger</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Creates 50+ seasonal employment opportunities</span>
                    </li>
                  </ul>
                </div>
                
                <motion.div 
                  className="mt-8 text-center relative"
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
                      className="bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-8 py-3 rounded-full font-bold text-lg"
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
                              backgroundColor: ['#1E3A5F', '#4A7F4A', '#2A9D8F', '#1A7A70'][Math.floor(Math.random() * 4)],
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
              className="bg-white rounded-lg shadow-lg border border-teal-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="bg-gradient-to-r from-teal-800 to-teal-700 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-6 w-6" />
                  <h2 className="text-3xl font-bold">AgroFarm Investment</h2>
                </div>
                <p className="text-teal-100">Long-term farming partnerships with higher returns</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-teal-600" />
                      Investment Details
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex justify-between border-b pb-2">
                        <span>Minimum Investment:</span>
                        <span className="font-semibold">₦5,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Expected ROI:</span>
                        <span className="font-semibold">15-25% annually</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Duration:</span>
                        <span className="font-semibold">12-24 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Payout Frequency:</span>
                        <span className="font-semibold">At harvest</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Risk Level:</span>
                        <span className="font-semibold">Medium</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-teal-600" />
                      Projected Returns
                    </h3>
                    <div className="bg-teal-50 rounded-lg p-4 mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-teal-700">
                          ₦2,000,000 → ₦3,200,000
                        </div>
                        <p className="text-gray-600 mt-2">
                          Return on a ₦2,000,000 investment in rice farming
                        </p>
                      </div>
                      <div className="mt-4 text-sm text-gray-600">
                        <p>Example: A ₦5M investment in cassava farming can yield ₦7.5M after 18 months</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-teal-600" />
                    Safety & Security
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Professional farm management team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Regular farm inspection reports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Crop insurance coverage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Guaranteed buyback program</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal-600" />
                    Social Impact
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Empowers 200+ farming families</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Provides technical training to local farmers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Supports SDG 8: Decent Work and Economic Growth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Improves rural infrastructure</span>
                    </li>
                  </ul>
                </div>
                
                <motion.div 
                  className="mt-8 text-center"
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
                      className="bg-teal-600 hover:bg-teal-700 text-white"
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
              className="bg-white rounded-lg shadow-lg border border-teal-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="bg-gradient-to-r from-teal-800 to-teal-700 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-6 w-6" />
                  <h2 className="text-3xl font-bold">AgroReserve Investment</h2>
                </div>
                <p className="text-teal-100">Premium long-term investment with maximum returns</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-teal-600" />
                      Investment Details
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex justify-between border-b pb-2">
                        <span>Minimum Investment:</span>
                        <span className="font-semibold">₦10,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Expected ROI:</span>
                        <span className="font-semibold">25-35% annually</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Duration:</span>
                        <span className="font-semibold">24-36 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Payout Frequency:</span>
                        <span className="font-semibold">At maturity</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span>Risk Level:</span>
                        <span className="font-semibold">Medium-High</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-teal-600" />
                      Projected Returns
                    </h3>
                    <div className="bg-teal-50 rounded-lg p-4 mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-teal-700">
                          ₦10,000,000 → ₦13,500,000
                        </div>
                        <p className="text-gray-600 mt-2">
                          Return on a ₦10,000,000 investment over 24 months
                        </p>
                      </div>
                      <div className="mt-4 text-sm text-gray-600">
                        <p>Example: A ₦20M investment in palm oil plantation can yield ₦30M after 36 months</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-teal-600" />
                    Safety & Security
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Land ownership documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Comprehensive risk management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Quarterly performance audits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Government-backed contracts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal-600" />
                    Social Impact
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Creates 100+ permanent jobs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Develops sustainable farming practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Supports SDG 12: Responsible Consumption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span>Contributes to rural economic development</span>
                    </li>
                  </ul>
                </div>
                
                <motion.div 
                  className="mt-8 text-center"
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
                      className="bg-teal-600 hover:bg-teal-700 text-white"
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
      <section className="py-20 bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start Investing?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
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
              variant="secondary" 
              className="bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-8 py-3 rounded-full font-bold text-lg"
            >
              Start Investing
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;