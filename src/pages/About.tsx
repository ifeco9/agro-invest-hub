import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Leaf, TrendingUp, Globe, Heart, Zap } from "lucide-react";

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
              <p>
                Established in Osun State in 2014, Drecan Commodities & Oil Palm Company is a disruptive force in Nigerian agritech and agribusiness. We are not just another agricultural company; we are pioneers building a new standard for responsible tropical agriculture in Nigeria.
              </p>
              <p>
                Our mission is to revolutionize Nigeria's agricultural sector by creating transparent, ethical, and profitable investment opportunities that directly benefit both investors and farming communities.
              </p>
              <p>
                We are committed to building a sustainable agricultural ecosystem that eliminates unnecessary middlemen, ensures fair pricing for farmers, and provides affordable food access for all income levels.
              </p>
              <p>
                Our vision is to become Nigeria's leading agricultural investment platform that transforms the way people invest in agriculture while creating sustainable food systems for future generations.
              </p>
              <p>
                We envision a Nigeria where food security is guaranteed, farmers are empowered, investors earn consistent returns, and communities thrive through sustainable agricultural practices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-2xl mx-auto">
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
                className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="text-primary mb-3">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
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
                    Our journey began when our founders witnessed firsthand the challenges faced by smallholder farmers 
                    who struggled to get fair prices for their produce, while urban consumers paid inflated prices for basic 
                    food items. This disconnect inspired us to build a bridge between rural producers and urban markets.
                  </p>
                  <p>
                    Over the years, we have grown from a small local trading operation into a comprehensive agricultural 
                    investment platform that connects thousands of investors with profitable opportunities in Nigeria's 
                    agricultural sector. Today, we work with over 500 farmers across multiple states and have facilitated 
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
                  { year: "2022", event: "Partnered with 500+ farmers across 5 states" },
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Meet Our Leadership</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto">
              The experienced team driving Drecan Commodities forward
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground">John Adeyemi</h3>
                <p className="text-primary font-medium mb-2">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  With over 15 years of experience in agricultural trading and investment, 
                  John leads our vision to transform Nigeria's agricultural landscape.
                </p>
              </div>
              
              <div className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Sarah Okafor</h3>
                <p className="text-primary font-medium mb-2">Head of Operations</p>
                <p className="text-muted-foreground text-sm">
                  Sarah oversees our farm management and supply chain operations, 
                  ensuring efficiency and quality in all our agricultural activities.
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