import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import kadunaRice from "@/assets/Kaduna Rice Yield Fund.jpeg";
import ogunCassava from "@/assets/Ogun Cassava Processing Investment.jpeg";
import kanoWheat from "@/assets/Kano Wheat Farming Project.jpeg";
import lagosBeans from "@/assets/Lagos Beans Cultivation Hub.jpeg";
import palmOil from "@/assets/palm oil.jpg";
import egusi from "@/assets/egusi.jpg";
import sorghumGrains from "@/assets/sorghum  grains.jpg";
import ofadaRice from "@/assets/ofada rice.jpg";

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-teal-900">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Agriculture...
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8"
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
              className="bg-teal-700 hover:bg-teal-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
              asChild
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
              asChild
            >
              <Link to="/contact">Partner With Us</Link>
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

      {/* Featured Products */}
      <section className="py-12 sm:py-16 bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Featured Products</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-2xl mx-auto">
              Discover our premium selection of farm-fresh commodities, sustainably sourced from Nigerian farmers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { id: 1, name: "Kaduna Rice", image: kadunaRice, price: 20000, description: "Premium Nigerian rice from Kaduna" },
              { id: 2, name: "Ogun Cassava", image: ogunCassava, price: 15000, description: "Fresh cassava from Ogun state" },
              { id: 3, name: "Palm Oil", image: palmOil, price: 18000, description: "Pure palm oil from South-South region" },
              { id: 4, name: "Enugu Egusi", image: egusi, price: 12000, description: "Premium egusi seeds from Enugu" }
            ].map((product) => (
              <motion.div
                key={product.id}
                className="bg-card rounded-lg shadow-md border border-border overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: product.id * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">₦{product.price.toLocaleString()}</span>
                    <Button size="sm" variant="outline" className="text-sm" asChild>
                      <Link to="/shop">View Details</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground" asChild>
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>

      </section>

      {/* Who We Are */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Who We Are</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Drecan Commodities Ltd is an agricultural trading and investment company based in Abuja, Nigeria.
            </p>
            <p className="mb-4">
              We specialize in sourcing farm produce directly from farmers in rural communities, moving them efficiently into urban markets, and distributing them to wholesalers, retailers, and community food programs at fair and affordable prices.
            </p>
            <p>
              By simplifying the agricultural supply chain, we eliminate unnecessary middlemen, ensuring that both farmers earn more and consumers pay less — while investors enjoy steady and transparent returns.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
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
                className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{program.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Our Purpose</h2>
            <p className="mb-4">
              We believe that food should never be a privilege; it should be accessible to every Nigerian household, regardless of income level.
            </p>
            <p>
              That's why Drecan Commodities is building a sustainable agricultural ecosystem — one that connects production, distribution, and investment in a way that benefits all.
            </p>
            <p className="mt-4">
              Our work directly supports the United Nations Sustainable Development Goal 2 (Zero Hunger), which aims to end hunger, achieve food security, and promote sustainable agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">What We Do</h2>
          </motion.div>
          
          <div className="space-y-6 sm:space-y-8">
            <motion.div 
              className="bg-card p-4 sm:p-6 rounded-lg shadow-sm border border-border"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: 5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">1. AgroTrade Cycle</h3>
              <p className="text-muted-foreground">
                We purchase key commodities such as rice, beans, palm oil, maize, egusi, and other agricultural products directly from rural farmers and trusted cooperatives at fair market prices.
              </p>
              <p className="text-muted-foreground mt-2">
                We then distribute these products to wholesalers and retailers in Abuja and other major cities — efficiently, transparently, and affordably.
              </p>
              <p className="text-muted-foreground mt-2">
                This model helps stabilize market prices while delivering consistent profit for investors.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card p-4 sm:p-6 rounded-lg shadow-sm border border-border"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">2. AgroLink Program</h3>
              <p className="text-muted-foreground">
                A community supply initiative that connects farmers with consumers.
              </p>
              <p className="text-muted-foreground mt-2">
                AgroLink focuses on delivering affordable food packages to local markets, schools, hospitals, and community programs — ensuring that both the rich and the poor have equal access to quality food.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card p-4 sm:p-6 rounded-lg shadow-sm border border-border"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: 5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">3. AgroFarm Partnership</h3>
              <p className="text-muted-foreground">
                A collaborative farming initiative where investors can lease farmlands or fund managed farms.
              </p>
              <p className="text-muted-foreground mt-2">
                We cultivate and manage the farms on their behalf until harvest, allowing individuals and organizations to participate in farming without direct involvement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Why Choose Drecan Commodities</h2>
          </motion.div>
          
          <div className="space-y-3 sm:space-y-4">
            {[
              "Ethical Trading – We ensure farmers receive fair payment for their produce.",
              "Affordable Food Access – Our mission is to make food accessible for all income levels.",
              "Sustainable Returns – Investors enjoy consistent profit backed by transparent operations.",
              "Community Impact – Every transaction supports food access initiatives across Nigeria.",
              "UN SDG Partnership – We align with global sustainability goals for food and agriculture."
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start p-3 sm:p-4 bg-card rounded-lg shadow-sm border border-border"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <span className="text-primary font-bold text-lg sm:text-xl mr-2 sm:mr-3">✓</span>
                <span className="text-muted-foreground text-sm sm:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Investment Highlights
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto"
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
            className="max-w-md sm:max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-lg shadow-lg p-6 sm:p-8 border border-border">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Short-term Investment Opportunity</h3>
              <div className="text-3xl sm:text-5xl font-bold text-primary mb-2">
                ₦{investmentAmount.toLocaleString()}
              </div>
              <p className="text-muted-foreground mb-4 sm:mb-6">Return on a ₦300,000 investment</p>
              <div className="h-2 bg-secondary rounded-full mb-4">
                <motion.div 
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${((investmentAmount - 300000) / 15000) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Projected return: ₦300,000 → ₦315,000 (5% return in 6 months)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Join the Movement
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Whether you are a farmer, investor, or partner organization, there's a place for you in our mission.
          </motion.p>
          <motion.p 
            className="text-base sm:text-lg mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Together, we can feed communities, create jobs, and build a stronger, hunger-free Nigeria.
          </motion.p>
          <motion.p 
            className="text-base sm:text-lg mb-6 sm:mb-8"
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
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white text-base sm:text-lg" asChild>
              <Link to="/opportunities">Invest Now</Link>
            </Button>
            <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 text-base sm:text-lg" asChild>
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bouncing Shop Now Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-2xl hover:shadow-2xl rounded-full w-16 h-16 p-0 flex items-center justify-center border-4 border-white transition-all duration-300 transform"
          asChild
        >
          <Link to="/shop">
            <span className="text-[8px] font-extrabold tracking-wide">Shop Now</span>
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;