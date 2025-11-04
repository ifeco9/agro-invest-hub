import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Home = () => {
  const [investmentAmount, setInvestmentAmount] = useState(300000);
  
  // Auto-increment counter for investment return
  useEffect(() => {
    const interval = setInterval(() => {
      setInvestmentAmount(prev => {
        if (prev >= 315000) return 300000;
        return prev + 1000;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-teal-700/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509291910283-3f0d55f5f48f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Agriculture...
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Agriculture. Empowering Communities. Feeding the Future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-8 py-3 rounded-full font-bold text-lg"
            >
              Invest Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-8 py-3 rounded-full font-bold text-lg"
            >
              Partner With Us
            </Button>
          </motion.div>
        </div>
        
        {/* Floating particles animation */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: -100,
                opacity: [0, 1, 0],
                x: `${Math.random() * 100 - 50}px`
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-8">
              Drecan Commodities Ltd is an agricultural trading and investment company based in Abuja, Nigeria.
            </p>
            <p className="text-gray-700 mb-4">
              We specialize in sourcing farm produce directly from farmers in rural communities, moving them efficiently into urban markets, and distributing them to wholesalers, retailers, and community food programs at fair and affordable prices.
            </p>
            <p className="text-gray-700">
              By simplifying the agricultural supply chain, we eliminate unnecessary middlemen, ensuring that both farmers earn more and consumers pay less — while investors enjoy steady and transparent returns.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "AgroTrade Cycle",
                description: "We purchase key commodities such as rice, beans, palm oil, maize, and egusi directly from rural farmers and transport them to major urban centers like Abuja, where they are sold to wholesalers and retailers at affordable prices."
              },
              {
                title: "AgroLink Program",
                description: "A community supply initiative that connects farmers with consumers. AgroLink focuses on delivering affordable food packages to local markets, schools, hospitals, and community programs."
              },
              {
                title: "AgroFarm Partnership",
                description: "A collaborative farming initiative where investors can lease farmlands or fund managed farms. We cultivate and manage the farms on their behalf until harvest."
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-teal-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-xl font-bold text-teal-800 mb-3">{program.title}</h3>
                <p className="text-gray-700">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">Our Purpose</h2>
            <p className="text-gray-700 mb-4">
              We believe that food should never be a privilege; it should be accessible to every Nigerian household, regardless of income level.
            </p>
            <p className="text-gray-700">
              That's why Drecan Commodities is building a sustainable agricultural ecosystem — one that connects production, distribution, and investment in a way that benefits all.
            </p>
            <p className="text-gray-700 mt-4">
              Our work directly supports the United Nations Sustainable Development Goal 2 (Zero Hunger), which aims to end hunger, achieve food security, and promote sustainable agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">What We Do</h2>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-teal-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: 5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold text-teal-800 mb-3">1. AgroTrade Cycle</h3>
              <p className="text-gray-700">
                We purchase key commodities such as rice, beans, palm oil, maize, egusi, and other agricultural products directly from rural farmers and trusted cooperatives at fair market prices.
              </p>
              <p className="text-gray-700 mt-2">
                We then distribute these products to wholesalers and retailers in Abuja and other major cities — efficiently, transparently, and affordably.
              </p>
              <p className="text-gray-700 mt-2">
                This model helps stabilize market prices while delivering consistent profit for investors.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-teal-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold text-teal-800 mb-3">2. AgroLink Program</h3>
              <p className="text-gray-700">
                A community supply initiative that connects farmers with consumers.
              </p>
              <p className="text-gray-700 mt-2">
                AgroLink focuses on delivering affordable food packages to local markets, schools, hospitals, and community programs — ensuring that both the rich and the poor have equal access to quality food.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-teal-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: 5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold text-teal-800 mb-3">3. AgroFarm Partnership</h3>
              <p className="text-gray-700">
                A collaborative farming initiative where investors can lease farmlands or fund managed farms.
              </p>
              <p className="text-gray-700 mt-2">
                We cultivate and manage the farms on their behalf until harvest, allowing individuals and organizations to participate in farming without direct involvement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">Why Choose Drecan Commodities</h2>
          </motion.div>
          
          <div className="space-y-4">
            {[
              "Ethical Trading – We ensure farmers receive fair payment for their produce.",
              "Affordable Food Access – Our mission is to make food accessible for all income levels.",
              "Sustainable Returns – Investors enjoy consistent profit backed by transparent operations.",
              "Community Impact – Every transaction supports food access initiatives across Nigeria.",
              "UN SDG Partnership – We align with global sustainability goals for food and agriculture."
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-teal-100"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <span className="text-teal-600 font-bold text-xl mr-3">✓</span>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-teal-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Investment Highlights
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            See how your investment can grow with Drecan Commodities
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-800 mb-6">Short-term Investment Opportunity</h3>
              <div className="text-5xl font-bold text-teal-700 mb-2">
                ₦{investmentAmount.toLocaleString()}
              </div>
              <p className="text-gray-600 mb-6">Return on a ₦300,000 investment</p>
              <div className="h-2 bg-teal-100 rounded-full mb-4">
                <motion.div 
                  className="h-full bg-teal-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${((investmentAmount - 300000) / 15000) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <p className="text-sm text-gray-600">
                Projected return: ₦300,000 → ₦315,000 (5% return in 6 months)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Join the Movement
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Whether you are a farmer, investor, or partner organization, there's a place for you in our mission.
          </motion.p>
          <motion.p 
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Together, we can feed communities, create jobs, and build a stronger, hunger-free Nigeria.
          </motion.p>
          <motion.p 
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Be part of the change. Invest in agriculture. Invest in people. Invest with Drecan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-teal-900 hover:bg-gray-100">
              Invest Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Partner With Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sticky FAB */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.15 }}
      >
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white rounded-full w-16 h-16 p-0 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white"
          asChild
        >
          <Link to="/contact">
            <span className="text-lg font-bold"> Invest Now</span>
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;