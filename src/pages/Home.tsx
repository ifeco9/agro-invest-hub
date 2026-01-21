import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Award, Shield, Leaf, Globe, Warehouse, ShoppingCart, CheckCircle, MessageSquare, Phone, Mail, Clock, Calendar, FileText, CheckCircle2, Users, Sliders } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import BusinessModel from "@/components/BusinessModel";
import kadunaRice from "@/assets/Kaduna Rice Yield Fund.jpeg";
import ogunCassava from "@/assets/Ogun Cassava Processing Investment.jpeg";
import kanoWheat from "@/assets/Kano Wheat Farming Project.jpeg";
import lagosBeans from "@/assets/Lagos Beans Cultivation Hub.jpeg";
import palmOil from "@/assets/palm oil.jpg";
import egusi from "@/assets/egusi.jpg";
import sorghumGrains from "@/assets/sorghum  grains.jpg";
import ofadaRice from "@/assets/ofada rice.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Restored Hardcoded Rich Design */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-teal-900">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto mt-16 sm:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg tracking-wide">
              Comprehensive Agricultural<br />
              Solutions
            </h1>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-10 font-light max-w-3xl mx-auto text-teal-50 leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From farm to market, we deliver practical, member-driven agricultural services that build sustainable wealth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-8 py-6 rounded-full font-bold text-lg tracking-wide"
              asChild
            >
              <Link to="/opportunities">Join the Cooperative</Link>
            </Button>
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-8 py-6 rounded-full font-bold text-lg tracking-wide"
              asChild
            >
              <Link to="/shop">Explore Products</Link>
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
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>
      </section>

      {/* Business Model Segments - Rich Background */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 to-emerald-50 relative overflow-hidden">
        {/* Decorative animated elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative z-10">
          <BusinessModel />
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Our Core Services</h2>
            <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto">
              Practical agricultural services designed to support farmers, members, and markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "AgroTrade Operations",
                description: "Short-term commodity aggregation and market distribution. We purchase agricultural produce from farmers and cooperative members and supply urban and institutional markets through structured sales channels.",
                features: ["Market-driven pricing", "Seasonal trading cycles", "Transparent supply records", "Managed operational risk"]
              },
              {
                title: "AgroFarm Cooperative Program",
                description: "Long-term cooperative farming programs that allow members to participate in agriculture through collective production and professionally managed farms.",
                features: ["Cooperative membership structure", "Shared operational outcomes", "Crop-cycle based participation", "Moderate operational risk"]
              },
              {
                title: "AgroLink Community Supply Program",
                description: "A community-focused supply initiative delivering affordable food products to schools, hospitals, markets, and community programs while supporting farmer livelihoods.",
                features: ["Community impact focus", "Affordable food access", "Direct farmer support", "Sustainable supply model"]
              },
              {
                title: "AgroReserve Storage Program",
                description: "Long-term produce storage and market-stabilization service supporting price balance and food security.",
                features: ["Controlled storage facilities", "Market-timed release", "Supply stabilization", "Quality preservation"]
              },
              {
                title: "Supply Chain Management",
                description: "End-to-end logistics services covering transportation, storage, and distribution from rural farms to urban markets.",
                features: ["Nationwide logistics", "Cold-chain options", "Inventory tracking", "Quality assurance"]
              },
              {
                title: "Farmer Support Services",
                description: "Support services aimed at improving farmer productivity and sustainability.",
                features: ["Technical training", "Input access", "Market linkage", "Cooperative support services"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-teal-500/20 p-2 rounded-lg">
                    <Leaf className="h-6 w-6 text-teal-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-teal-100 mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-teal-50">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Cooperative & Product Engagement Works */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">How Our Cooperative & Product Engagement Works</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Simple, transparent, and structured participation process
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Initial Engagement", desc: "Contact our team to discuss cooperative membership or product services suitable to your needs.", icon: MessageSquare },
              { step: "02", title: "Information & Documentation", desc: "Review participation guidelines, operational structures, and engagement terms applicable to the selected program.", icon: FileText },
              { step: "03", title: "Participation Agreement", desc: "Execute cooperative membership or service agreements outlining roles, responsibilities, timelines, and surplus-sharing principles (where applicable).", icon: CheckCircle2 },
              { step: "04", title: "Active Participation", desc: "Receive regular updates on operations, storage status, distribution activities, and cooperative programs.", icon: TrendingUp },
              { step: "05", title: "Outcome & Distribution", desc: "Surpluses, products, or service outcomes are shared or delivered based on agreed cooperative or service terms.", icon: Award },
              { step: "06", title: "Continuity or Exit", desc: "Members and partners may continue participation, scale involvement, or disengage based on agreed terms.", icon: Sliders }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start bg-card p-6 rounded-xl shadow-sm border border-border"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 bg-teal-100 text-teal-800 font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Engagement Channels */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Direct Engagement Channels</h2>
            <p className="text-lg text-muted-foreground">Reach out directly to the department that suits your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-600 text-center hover:-translate-y-2 transition-transform duration-300">
              <Users className="h-10 w-10 text-teal-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-4 text-teal-900">Cooperative Membership & Participation</h3>
              <div className="space-y-3 mb-6 text-sm text-gray-600">
                <p className="flex items-center justify-center gap-2"><Mail className="h-4 w-4" /> drecanagriculture@gmail.com</p>
                <p className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" /> +234 702 684 1214</p>
                <p className="flex items-center justify-center gap-2"><Clock className="h-4 w-4" /> Mon–Fri, 9:00 AM – 6:00 PM</p>
              </div>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white" asChild>
                <Link to="/opportunities">Apply for Membership</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-emerald-600 text-center hover:-translate-y-2 transition-transform duration-300">
              <Warehouse className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-4 text-emerald-900">Storage & Product Services</h3>
              <div className="space-y-3 mb-6 text-sm text-gray-600">
                <p className="flex items-center justify-center gap-2"><Mail className="h-4 w-4" /> drecanagriculture@gmail.com</p>
                <p className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" /> +234 702 684 1214</p>
                <p className="flex items-center justify-center gap-2"><Clock className="h-4 w-4" /> Mon–Fri, 9:00 AM – 6:00 PM</p>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <Link to="/services">Request a Quote</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-cyan-600 text-center hover:-translate-y-2 transition-transform duration-300">
              <ShoppingCart className="h-10 w-10 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-4 text-cyan-900">Procurement & Distribution</h3>
              <div className="space-y-3 mb-6 text-sm text-gray-600">
                <p className="flex items-center justify-center gap-2"><Mail className="h-4 w-4" /> drecanagriculture@gmail.com</p>
                <p className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" /> +234 702 684 1214</p>
                <p className="flex items-center justify-center gap-2"><Clock className="h-4 w-4" /> Mon–Fri, 9:00 AM – 6:00 PM</p>
              </div>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white" asChild>
                <Link to="/contact">Submit Inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Work With Us */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Work With Us?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl mb-6 sm:mb-8 text-teal-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join our cooperative or access our agricultural products and services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white text-lg" asChild>
              <Link to="/services">Explore Our Services</Link>
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
              { id: 1, name: "Kaduna Rice", image: kadunaRice, price: 0, description: "Premium Nigerian rice from Kaduna" },
              { id: 2, name: "Ogun Cassava", image: ogunCassava, price: 0, description: "Fresh cassava from Ogun state" },
              { id: 3, name: "Palm Oil", image: palmOil, price: 0, description: "Pure palm oil from South-South region" },
              { id: 4, name: "Enugu Egusi", image: egusi, price: 0, description: "Premium egusi seeds from Enugu" }
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

      {/* Why Choose Drecan - Rich Cards */}
      <section className="py-12 sm:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Why Choose Drecan</h2>
            <p className="text-base sm:text-lg text-muted-foreground">What sets us apart in Nigeria’s agricultural ecosystem</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Proven Experience",
                description: "Years of hands-on agricultural operations and market engagement."
              },
              {
                title: "Transparent Operations",
                description: "Clear reporting on cooperative activities, storage, and product movement."
              },
              {
                title: "Sustainable Practices",
                description: "Environmentally responsible farming and supply methods."
              },
              {
                title: "Community Impact",
                description: "Supporting farmers, food access, and local economies."
              },
              {
                title: "Regulatory Alignment",
                description: "Registered entities operating in line with applicable cooperative, commercial, and agricultural regulations."
              },
              {
                title: "Fair Value Distribution",
                description: "Equitable value sharing based on contribution and participation."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg border border-border relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                <div className="p-2 bg-teal-100/50 rounded-lg w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement - Dark Footer-like Section */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none">
          <div className="w-full pt-[100%] rounded-full bg-teal-400 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
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
            Whether you are a farmer, member, or partner organization, there's a place for you in our mission.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-base sm:text-lg">
              Together, we can feed communities, create jobs, and build a stronger, hunger-free Nigeria.
            </p>
            <p className="text-base sm:text-lg font-medium text-teal-200">
              Be part of the change. Contribute to agriculture. Contribute to people. Contribute with Drecan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white text-base sm:text-lg shadow-lg border-none" asChild>
              <Link to="/opportunities">Become a Member</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-base sm:text-lg bg-transparent" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bouncing Become a Member Button */}
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
          <Link to="/opportunities">
            <span className="text-[8px] font-extrabold tracking-wide">Become<br />Member</span>
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;