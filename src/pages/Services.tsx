import { motion } from "framer-motion";
import { TrendingUp, ShoppingCart, Leaf, Users, Award, Zap, Truck, Shield, Mail, Phone, Calendar, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BusinessModel from "@/components/BusinessModel";

const Services = () => {
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
            Comprehensive Agricultural Solutions
          </motion.h1>
          <motion.p
            className="text-base sm:text-xl max-w-md sm:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From farm to market, we provide end-to-end services that connect producers, members, and consumers
          </motion.p>
        </div>
      </section>

      {/* Business Model */}
      <BusinessModel />

      {/* Main Services */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Our Core Services</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-2xl mx-auto">
              Practical agricultural services designed to support farmers, members, and markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "AgroTrade Operations",
                description: "Short-term commodity aggregation and market distribution. We purchase agricultural produce from farmers and cooperative members and supply urban and institutional markets through structured sales channels.",
                features: [
                  "Market-driven pricing",
                  "Seasonal trading cycles",
                  "Transparent supply records",
                  "Managed operational risk"
                ]
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "AgroFarm Cooperative Program",
                description: "Long-term cooperative farming programs that allow members to participate in agriculture through collective production and professionally managed farms.",
                features: [
                  "Cooperative membership structure",
                  "Shared operational outcomes",
                  "Crop-cycle based participation",
                  "Moderate operational risk"
                ]
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "AgroLink Community Supply Program",
                description: "A community-focused supply initiative delivering affordable food products to schools, hospitals, markets, and community programs while supporting farmer livelihoods.",
                features: [
                  "Community impact focus",
                  "Affordable food access",
                  "Direct farmer support",
                  "Sustainable supply model"
                ]
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "AgroReserve Storage Program",
                description: "Long-term produce storage and market-stabilization service supporting price balance and food security.",
                features: [
                  "Controlled storage facilities",
                  "Market-timed release",
                  "Supply stabilization",
                  "Quality preservation"
                ]
              },
              {
                icon: <Truck className="h-8 w-8" />,
                title: "Supply Chain Management",
                description: "End-to-end logistics services covering transportation, storage, and distribution from rural farms to urban markets.",
                features: [
                  "Nationwide logistics",
                  "Cold-chain options",
                  "Inventory tracking",
                  "Quality assurance"
                ]
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Farmer Support Services",
                description: "Support services aimed at improving farmer productivity and sustainability.",
                features: [
                  "Technical training",
                  "Input access",
                  "Market linkage",
                  "Cooperative support services"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="text-primary mb-3">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 flex-grow">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm sm:text-base">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-12 sm:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">How Our Contribution Process Works</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-2xl mx-auto">
              Simple, transparent, and profitable steps to start your agricultural contribution journey
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Contact our membership team to discuss your goals and explore suitable opportunities. We'll provide detailed information about our programs and help you choose the best fit for your contribution objectives."
              },
              {
                step: "02",
                title: "Due Diligence",
                description: "Review our comprehensive documentation, including financial projections, risk assessments, and farm management plans. Visit our facilities and meet our team to gain confidence in our operations."
              },
              {
                step: "03",
                title: "Contribution Agreement",
                description: "Sign our transparent contribution agreement that clearly outlines terms, shared surplus, timelines, and your rights as a member. All agreements are legally binding and SEC-compliant."
              },
              {
                step: "04",
                title: "Active Participation",
                description: "Receive regular updates on your contribution performance, including monthly reports, farm inspection photos, and market analysis. Stay informed throughout the contribution period."
              },
              {
                step: "05",
                title: "Shared Surplus Distribution",
                description: "Receive your shared surplus according to the agreed schedule. For short-term contributions, this is monthly; for long-term contributions, shared surplus are distributed at harvest or maturity."
              },
              {
                step: "06",
                title: "Re-contribution Opportunity",
                description: "Re-contribute your shared surplus in new opportunities or withdraw your profits. Our team will work with you to plan your next contribution steps based on your evolving goals."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-card rounded-lg shadow-md border border-border"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 bg-primary text-primary-foreground w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {process.step}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Why Choose Drecan Commodities</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-2xl mx-auto">
              What sets us apart in the agricultural cooperative landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Proven Track Record",
                description: "Over a decade of successful agricultural operations with consistent shared surplus and satisfied members."
              },
              {
                icon: <Shield className="h-5 w-5" />,
                title: "Transparent Operations",
                description: "Real-time access to farm operations, financial reports, and performance metrics through our member portal."
              },
              {
                icon: <Leaf className="h-5 w-5" />,
                title: "Sustainable Practices",
                description: "Commitment to environmentally responsible farming methods that protect natural resources for future generations."
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Community Impact",
                description: "Every contribution directly supports farming families and improves food access for local communities."
              },
              {
                icon: <Award className="h-5 w-5" />,
                title: "Regulatory Compliance",
                description: "Fully registered with relevant authorities and compliant with Cooperative Society regulations."
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                title: "Competitive Shared Surplus",
                description: "Industry-leading shared surplus backed by real agricultural commodities and professional farm management."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-3 sm:p-4 bg-card rounded-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="flex-shrink-0 text-primary mt-0.5">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Channels */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Direct Engagement Channels</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-2xl mx-auto">
              Connect directly with our specialized teams for each business segment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-primary mb-3">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">Contributions & Memberships</h3>
              <div className="space-y-3 mb-4 flex-grow">
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">drecanagriculture@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">+234 702 684 1214</span>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 6:00 PM WAT</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact?topic=membership">Schedule Consultation</Link>
              </Button>
            </motion.div>

            <motion.div
              className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-primary mb-3">
                <Warehouse className="h-8 w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">Storage & Trading</h3>
              <div className="space-y-3 mb-4 flex-grow">
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">drecanagriculture@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">+234 702 684 1214</span>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 6:00 PM WAT</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact?topic=storage">Request Quote</Link>
              </Button>
            </motion.div>

            <motion.div
              className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-primary mb-3">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">Procurement & Distribution</h3>
              <div className="space-y-3 mb-4 flex-grow">
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">drecanagriculture@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">+234 702 684 1214</span>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 6:00 PM WAT</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact?topic=procurement">Submit Inquiry</Link>
              </Button>
            </motion.div>
          </div>
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
            Ready to Start Contributing?
          </motion.h2>
          <motion.p
            className="text-base sm:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join our community of members and start earning sustainable shared surplus from Nigerian agriculture
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
              <Link to="/opportunities">Explore Contribution Opportunities</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;