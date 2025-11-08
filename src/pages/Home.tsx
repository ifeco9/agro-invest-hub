import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Award, Shield } from "lucide-react";
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

      {/* Investment Highlights - Enhanced with artistic background and animations */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 to-emerald-50 relative overflow-hidden">
        {/* Decorative animated elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Investment Highlights
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore our diverse investment opportunities with transparent returns
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* AgroTrade Investment Highlight */}
            <motion.div 
              className="bg-card rounded-lg shadow-lg p-6 sm:p-8 border border-border backdrop-blur-sm bg-white/80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">AgroTrade Investment</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Short-term trading opportunities with consistent returns
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">1-12 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minimum Investment:</span>
                  <span className="font-medium">₦300,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected ROI:</span>
                  <span className="font-medium text-primary">5-15% annually</span>
                </div>
              </div>
              <Button size="sm" className="w-full mt-4" variant="outline" asChild>
                <Link to="/opportunities#agrotrade">Learn More</Link>
              </Button>
            </motion.div>
            
            {/* AgroReserve Investment Highlight */}
            <motion.div 
              className="bg-card rounded-lg shadow-lg p-6 sm:p-8 border border-border backdrop-blur-sm bg-white/80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">AgroReserve Investment</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Long-term commodity preservation and resale
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">12 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minimum Investment:</span>
                  <span className="font-medium">₦2,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected ROI:</span>
                  <span className="font-medium text-primary">60% annually</span>
                </div>
              </div>
              <Button size="sm" className="w-full mt-4" variant="outline" asChild>
                <Link to="/opportunities#agroreserve">Learn More</Link>
              </Button>
            </motion.div>
            
            {/* AgroFarm Investment Highlight */}
            <motion.div 
              className="bg-card rounded-lg shadow-lg p-6 sm:p-8 border border-border backdrop-blur-sm bg-white/80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Award className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">AgroFarm Investment</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Land leasing and managed farming partnerships
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">9-12 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minimum Investment:</span>
                  <span className="font-medium">₦1,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected ROI:</span>
                  <span className="font-medium text-primary">25-50% annually</span>
                </div>
              </div>
              <Button size="sm" className="w-full mt-4" variant="outline" asChild>
                <Link to="/opportunities#agrofarm">Learn More</Link>
              </Button>
            </motion.div>
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
                title: "AgroFarm Partnership",
                description: "The Premium Growth Plan is designed for investors who want sustainable, high yield returns backed by the strength of real agricultural trade. It combines Drecan's short-term turnover system with long-term commodity value growth ensuring consistent profit while contributing to national food security and market balance."
              },
              {
                title: "AgroLink Program",
                description: "Our Community Commitment:\n\nBeyond business, we invest in people.\nThrough our Community Support Initiatives, Drecan Commodities supports smallholder farmers, provides educational outreach, and empowers local women, men, and youth, ensuring that every investment contributes to sustainable progress."
              },
              {
                title: "AgroTrade Cycle",
                description: "we cultivate and produce key agricultural commodities — including palm oil, rice, beans, cocoa, maize, cashew nuts, and egusi — directly from our own plantations.\nFrom farm to storage, and onward to wholesalers, retailers, and final consumers in urban cities, we ensure every product is distributed efficiently, transparently, and affordably."
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
                <p className="text-muted-foreground text-sm sm:text-base whitespace-pre-line">{program.description}</p>
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

      {/* Featured Products - Moved above Why Choose Us */}
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
              {
                title: "We Create Wealth with Purpose",
                description: "At DRECAN, your investment goes beyond profit, it drives food security, supports farmers, and fuels sustainable growth across communities."
              },
              {
                title: "Quality You Can Trust",
                description: "Our commodities are carefully sourced, properly stored, and ethically traded, ensuring only the best quality reaches our partners and buyers."
              },
              {
                title: "Integrity in Every Transaction",
                description: "Transparency, accountability, and trust are at the core of how we operate, with clear reports, honest pricing, and dependable partnerships."
              },
              {
                title: "Consistent Value, Year-Round",
                description: "Through modern storage systems and smart market timing, we maintain steady supply, stable prices, and reliable returns for all stakeholders."
              },
              {
                title: "Empowering Communities, Building Sustainable Livelihoods",
                description: "Every bag sold, every investment made,  uplifts farmers, strengthens local economies, and builds sustainable futures."
              }
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
                <span className="text-primary font-bold text-lg sm:text-xl mr-2 sm:mr-3">{index + 1}.</span>
                <div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">The Wealth Initiative Focus Areas</h2>
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
                we cultivate and produce key agricultural commodities — including palm oil, rice, beans, cocoa, maize, cashew nuts, and egusi — directly from our own plantations.
              </p>
              <p className="text-muted-foreground mt-2">
                From farm to storage, and onward to wholesalers, retailers, and final consumers in urban cities, we ensure every product is distributed efficiently, transparently, and affordably.
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
                Our Community Commitment:
              </p>
              <p className="text-muted-foreground mt-2">
                Beyond business, we invest in people.
              </p>
              <p className="text-muted-foreground mt-2">
                Through our Community Support Initiatives, Drecan Commodities supports smallholder farmers, provides educational outreach, and empowers local women, men, and youth, ensuring that every investment contributes to sustainable progress.
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
                The Premium Growth Plan is designed for investors who want sustainable, high yield returns backed by the strength of real agricultural trade.
              </p>
              <p className="text-muted-foreground mt-2">
                It combines Drecan's short-term turnover system with long-term commodity value growth ensuring consistent profit while contributing to national food security and market balance.
              </p>
            </motion.div>
          </div>
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