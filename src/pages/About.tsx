import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Globe, Shield, Zap, Award, Heart, Users, TrendingUp, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Empowering Agriculture. Empowering Communities.
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl max-w-md sm:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building a sustainable future through ethical agricultural investment and community empowerment
          </motion.p>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">ABOUT US</h2>
            <div className="space-y-4 text-muted-foreground">
              <h3 className="text-xl font-bold text-foreground">THE COMPANY</h3>
              <h4 className="text-lg font-bold text-foreground">Revolutionizing Nigerian Agriculture: The Drecan Model</h4>
              <p>
                Established in Osun State in 2014, Drecan Commodities & Oil Palm Company is a disruptive force in Nigerian agritech and agribusiness. We are not just another agricultural company; we are pioneers building a new standard for responsible tropical agriculture in Nigeria.
              </p>
              <p>
                Our innovative, AI and tech-driven approach to managing our oil palm plantations and farms ensures unparalleled transparency and sustainability. This model is the core of our disruption, guaranteeing long-term economic viability while positively impacting our communities and environment.
              </p>
              
              <h4 className="text-lg font-bold text-foreground">Our Disruptive Ambition: Redefining Tropical Agriculture</h4>
              <p>
                At Drecan, our mission is to challenge the status quo. We implement key initiatives that merge high-performance agriculture with robust social and environmental governance (ESG). Our integrated focus ensures:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-medium">Economic Resilience:</span> Profitable and sustainable operations that attract forward-thinking investment.</li>
                <li><span className="font-medium">Social Impact:</span> Enhancing community welfare, health, and security for our employees and partners in Osun State and beyond.</li>
                <li><span className="font-medium">Natural Resource Management:</span> Implementing cutting-edge practices for conservation and sustainable land use.</li>
              </ul>
              <p>
                By leveraging AI technology and a commitment to ethical principles, Drecan is proving that agribusiness can be a powerful vehicle for positive change, creating a lasting, positive impact for all stakeholders and setting a new benchmark for the industry in Nigeria.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 bg-teal-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg text-white/90 max-w-md sm:max-w-2xl mx-auto">
              The principles that guide everything we do at Drecan Commodities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Integrity",
                description: "We conduct all our business with honesty, transparency, and ethical standards. Every transaction is documented and every investor receives regular updates."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community Impact",
                description: "We measure our success not just by financial returns, but by the positive impact we create in farming communities and the lives we touch through food access initiatives."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Sustainable Returns",
                description: "We are committed to delivering consistent, sustainable returns to our investors through well-managed agricultural investments backed by real commodities."
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Environmental Stewardship",
                description: "We promote sustainable farming practices that protect the environment, conserve natural resources, and support biodiversity in agricultural ecosystems."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our operations, from farm management to investor relations, ensuring the highest standards in all we do."
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Innovation",
                description: "We continuously seek innovative solutions to improve agricultural productivity, streamline supply chains, and create new investment opportunities."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="text-white mb-3 p-4">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 px-4">{value.title}</h3>
                <p className="text-white/90 text-sm sm:text-base px-4 pb-4">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Drecan Different - Horizontal Carousel */}
      <section className="relative py-12 sm:py-16">
        <div className="absolute inset-0 bg-cover bg-center z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">What Makes Drecan Different</h2>
            <p className="text-base sm:text-lg text-white/90 max-w-md sm:max-w-2xl mx-auto">
              Our unique approach to sustainable agriculture sets us apart in the industry
            </p>
          </motion.div>

          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-8 sm:p-12 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <Leaf className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">What Makes Drecan Different</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Drecan Commodities & Oil Palm Company is not just another Company, but rather it is an epitome of agricultural excellence not only with our products but also in management of resources.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>A rooted and experienced agricultural background</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Commitment to Environmental Stewardship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Motivated and Productive workforce</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Globe className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Environment Stewardship</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  At Drecan, environmental sustainability is not an add-on, it is the essential foundation of our agribusiness. We recognize that our success is intrinsically linked to the health of the ecosystems we operate within.
                </p>
                <p className="text-muted-foreground">
                  That's why we are committed to preserving Nigeria's biodiversity and natural resources for future generations through proactive conservation and sustainable land use practices.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cyan-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Our Environmental Commitments</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span><span className="font-medium">Certified Environmental Management:</span> Robust EMS to monitor and improve performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span><span className="font-medium">Pollution Prevention:</span> Chemical reduction and waste hierarchy focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span><span className="font-medium">Soil Health:</span> Regenerative practices to protect soil vitality</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Our Purpose: Building a Sustainable Agricultural Future for Nigeria</h2>
            
            <div className="space-y-6 text-white/90">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Vision Statement:</h3>
                <p>
                  To be the leading sustainable agribusiness in Nigeria, revolutionizing the industry through innovative farming technology and ethical cultivation practices that deliver unparalleled growth for all our stakeholders.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Mission Statement:</h3>
                <p>
                  To leverage our resources and precision agriculture expertise to achieve optimal returns and lasting positive impact. We are dedicated to empowering local communities, enhancing rural development, and serving as guardians of the environment through every operation.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Our Core Values: The Drecan Difference</h3>
                <p>
                  Our culture is built on a foundation of non-negotiable principles:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li><span className="font-medium">Integrity & Transparency:</span> We operate with honesty in all dealings.</li>
                  <li><span className="font-medium">Service & Impact:</span> A deep commitment to serving our communities and stakeholders.</li>
                  <li><span className="font-medium">Resilience & Innovation:</span> Adapting and thriving in the face of challenges.</li>
                  <li><span className="font-medium">Recognition & Respect:</span> Valuing and rewarding the contributions of our team and partners.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Strategic Pillars: Our Focus for Impact</h3>
                <p>
                  Our communication and actions are centered on three key areas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li><span className="font-medium">Community & Rural Development:</span> Actively investing in the prosperity of local communities.</li>
                  <li><span className="font-medium">People & Partnerships:</span> Fostering the growth and well-being of our employees and local partners.</li>
                  <li><span className="font-medium">Environmental Stewardship:</span> Implementing sustainable practices that protect and renew our natural resources.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Drecan Commodities Ltd was founded in 2014 in Osun State, Nigeria, with a simple yet powerful mission: 
                    to create a more efficient and equitable agricultural supply chain that benefits everyone involved.
                  </p>
                  <p>
                    Our journey began when our founder witnessed firsthand the challenges faced by smallholder farmers 
                    who struggled to get fair prices for their produce, while urban consumers paid inflated prices for basic 
                    food items. This disconnect inspired the founding team to build a bridge between rural producers and urban markets.
                  </p>
                  <p>
                    Over the years, we have grown from a small local trading operation into a comprehensive agricultural 
                    investment platform that connects thousands of investors with profitable opportunities in Nigeria's 
                    agricultural sector. Today, we work with 150 farmers across multiple states and have facilitated 
                    investments worth millions of naira.
                  </p>
                  <p>
                    Our commitment to sustainable development and community impact has earned us recognition from various 
                    stakeholders, including partnerships with local government agencies and international development organizations.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Key Milestones</h3>
              <ul className="space-y-4">
                {[
                  { year: "2014", event: "Company founded in Osun State" },
                  { year: "2016", event: "Expanded operations to Abuja" },
                  { year: "2018", event: "Launched AgroFarm Partnership program" },
                  { year: "2020", event: "Reached 1,000+ satisfied investors" },
                  { year: "2022", event: "Partnered with 150 farmers across 5 states" },
                  { year: "2024", event: "Launched AgroReserve premium investment program" }
                ].map((milestone, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-bold text-primary mr-2 min-w-[40px]">{milestone.year}</span>
                    <span className="text-muted-foreground">{milestone.event}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section id="commitment" className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >

          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Sustainable Palm Oil & Food Commodities in Nigeria</h3>
              <div className="space-y-4">
                <p>
                  For over 14 years, Drecan has been a cornerstone of sustainable agribusiness in Nigeria. We are a leading producer, supplier and exporter of premium palm oil products and essential food commodities, including cashew nuts, cocoa, and dried grains (corn, millet, wheat, beans, and rice).
                </p>
                <p>
                  Our integrated model from our own plantations to our secure storage facilities built on a foundation of high performance, ethical, and sustainable agriculture. We are committed to creating shared value that empowers our employees, partners, and local communities while protecting the environment.
                </p>
                <p>
                  Our Commitment to Sustainable & Responsible Agriculture in Africa
                </p>
                <p>
                  Our approach is formalized in a comprehensive Responsible Management Policy, developed with input from local stakeholders. This policy guides our entire operation and extends to our subcontractors and suppliers, ensuring a consistent, high-standard value chain that is highly rated by our customers.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">KEY FIGURES</h3>
              <div className="space-y-5">
                {[
                  { figure: "1,850 hectare planted area of oil palm trees", detail: "7,645 Tonnes of palm oil yield annually" },
                  { figure: "750 hectare planted area of cocoa trees", detail: "980 Tonnes of dried cocoa beans annually" },
                  { figure: "1,400 hectare planted area of Cashew trees", detail: "1,740 Tonnes of RNC (raw cashes nuts) yielding 400 Tonnes of edible cashew nuts annually" },
                  { figure: "25,000 Tonnes of bagged grain warehouse", detail: "" },
                  { figure: "467 direct and indirect employees", detail: "" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">{item.figure}</p>
                      {item.detail && <p className="text-sm opacity-90 mt-1">{item.detail}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainable Palm Oil Production & Export from Nigeria - Infographic Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Sustainable Palm Oil Production & Export from Nigeria</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-2xl mx-auto">
              Premium palm oil products for local and international markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">The Importance of Palm Oil</h3>
                <p className="text-muted-foreground mb-4">
                  Palm oil is a versatile and essential vegetable oil, extracted from the fruit of the oil palm. In fact, palm and palm kernel oil derivatives are found in an estimated 50% of packaged supermarket products, including food, cosmetics, detergents, and animal feed.
                </p>
                <p className="text-muted-foreground">
                  In Nigeria, it is a dietary staple, valued for its high smoke point and rich content of Vitamin A precursors (carotenes) and natural antioxidants.
                </p>
              </div>

              <div className="mt-8 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Drecan's Sustainable Palm Product Portfolio</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-bold">Crude Palm Oil (CPO):</span> 
                      <span className="opacity-90"> Known for its natural red color and high beta-carotene content.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-bold">Palm Kernel (PK):</span> 
                      <span className="opacity-90"> The raw seed extracted from the oil palm fruit.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-bold">Palm Kernel Oil (PKO):</span> 
                      <span className="opacity-90"> Oil extracted from the palm kernels, used in cosmetics and food.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-bold">Palm Kernel Cake (PKC):</span> 
                      <span className="opacity-90"> A nutritious by-product ideal for poultry, livestock, and fish feed.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-bold">Palm Seedlings:</span> 
                      <span className="opacity-90"> High-yield, quality seedlings for expanding sustainable cultivation.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl p-6 sm:p-8 text-white h-full">
                <h3 className="text-xl font-bold mb-6">2025 Production Forecast</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">7,645</div>
                    <div className="text-sm opacity-90">Tonnes of CPO</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">1,257</div>
                    <div className="text-sm opacity-90">Tonnes of PK</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">69</div>
                    <div className="text-sm opacity-90">Tonnes of PKO</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">102</div>
                    <div className="text-sm opacity-90">Tonnes of PKC</div>
                  </div>
                </div>

                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="font-bold mb-3">Why Partner with Drecan?</h4>
                  <p className="text-sm opacity-90 mb-4">
                    Our operational philosophy is rooted in the principle of planet, people, and prosperity, which is rigorously assessed in our annual feasibility report.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span>Premium quality products</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span>Reliable supply chain</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span>Sustainable production practices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span>Ethical sourcing standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI-Powered Disruption */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">AI-Powered Disruption</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-2xl mx-auto">
              Leveraging cutting-edge technology to maximize yield and profitability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-8">
                <motion.div 
                  className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Zap className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">1. Precision Agriculture for Maximum Yield</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We use AI-powered drones and satellite imagery to analyze our plantations. This identifies nutrient deficiencies, pest outbreaks, and irrigation needs before they impact yield. By treating only affected areas, we reduce costs by 15-20% and increase FFB (Fresh Fruit Bunch) yield by 20-30%, directly translating to more Crude Palm Oil (CPO) and higher revenue.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <Shield className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">2. Predictive Maintenance for Uninterrupted Operations</h3>
                  </div>
                  <p className="text-muted-foreground">
                    AI monitors our milling machinery in real-time, predicting failures before they happen. This eliminates costly downtime and ensures peak operational efficiency during high-demand periods, saving 5-7% in maintenance costs and maximizing output.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-cyan-100 p-2 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">3. Data-Driven Harvesting for Premium Quality</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our AI algorithms analyze fruit ripeness across thousands of hectares, directing harvest crews to the optimal areas daily. This ensures a higher oil extraction rate (OER) and superior oil quality, allowing us to command a premium price on the international market.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl p-8 sm:p-10 text-white flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6">The Investor & Partner Advantage:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-bold">Higher Returns:</span> 
                    <span className="opacity-90"> Increased yield and lower costs mean significantly higher profit margins and stronger dividends.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-bold">Scalable Model:</span> 
                    <span className="opacity-90"> Our AI-driven system is a scalable asset, making expansion more profitable and less risky than traditional competitors.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="font-bold">Competitive Moats:</span> 
                    <span className="opacity-90"> This technology creates a high barrier to entry, positioning Drecan as the future-proof, high-tech leader in Nigerian palm oil.</span>
                  </div>
                </li>
              </ul>
              <p className="mt-8 text-lg font-bold">
                By embedding AI into our core operations, Drecan doesn't just compete, we redefine the industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-12 sm:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Meet Our CEO</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto">
              The experienced leader driving Drecan Commodities forward
            </p>
            
            <div className="grid grid-cols-1 gap-6 sm:gap-8 justify-items-center">
              <div className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border max-w-md w-full">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground">John Adeyemi</h3>
                <p className="text-primary font-medium mb-2">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  With over 15 years of experience in agricultural trading and investment, 
                  John leads our vision to transform Nigeria's agricultural landscape.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Join Our Mission?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover how you can invest in agriculture and make a positive impact
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              asChild
            >
              <Link to="/opportunities">Explore Investment Opportunities</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;