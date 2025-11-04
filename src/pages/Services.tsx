import { motion } from "framer-motion";
import { TrendingUp, ShoppingCart, Leaf, Users, Award, Zap, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
            From farm to market, we provide end-to-end services that connect producers, investors, and consumers
          </motion.p>
        </div>
      </section>

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
              Comprehensive solutions designed to maximize value for farmers, investors, and consumers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "AgroTrade Investment",
                description: "Short-term trading opportunities with consistent returns. We purchase agricultural commodities directly from farmers and distribute them to urban markets, providing investors with transparent and profitable opportunities.",
                features: [
                  "8-12% annual returns",
                  "6-12 month duration",
                  "Monthly payouts",
                  "Low-medium risk"
                ]
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "AgroFarm Partnership",
                description: "Long-term farming partnerships with higher returns. Investors can lease farmlands or fund managed farms, allowing them to participate in agriculture without direct involvement.",
                features: [
                  "15-25% annual returns",
                  "12-24 month duration",
                  "At harvest payouts",
                  "Medium risk"
                ]
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "AgroLink Program",
                description: "Community supply initiative connecting farmers with consumers. We deliver affordable food packages to local markets, schools, hospitals, and community programs, ensuring food access for all income levels.",
                features: [
                  "Community impact focus",
                  "Affordable pricing",
                  "Direct farmer support",
                  "Sustainable model"
                ]
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "AgroReserve Premium",
                description: "Premium long-term investment with maximum returns. Our flagship program offers investors the opportunity to participate in large-scale agricultural projects with significant potential for returns.",
                features: [
                  "25-35% annual returns",
                  "24-36 month duration",
                  "At maturity payouts",
                  "Medium-high risk"
                ]
              },
              {
                icon: <Truck className="h-8 w-8" />,
                title: "Supply Chain Management",
                description: "End-to-end logistics and distribution services. We handle transportation, storage, and distribution of agricultural commodities from rural farms to urban markets, ensuring efficiency and quality.",
                features: [
                  "Nationwide distribution",
                  "Cold chain storage",
                  "Real-time tracking",
                  "Quality assurance"
                ]
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Farmer Support Services",
                description: "Comprehensive support for farming communities. We provide technical training, access to quality inputs, and market linkage services to help farmers increase productivity and income.",
                features: [
                  "Technical training",
                  "Input supply",
                  "Market access",
                  "Financial services"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">How Our Investment Process Works</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-2xl mx-auto">
              Simple, transparent, and profitable steps to start your agricultural investment journey
            </p>
          </motion.div>
          
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Contact our investment team to discuss your goals and explore suitable opportunities. We'll provide detailed information about our programs and help you choose the best fit for your investment objectives."
              },
              {
                step: "02",
                title: "Due Diligence",
                description: "Review our comprehensive documentation, including financial projections, risk assessments, and farm management plans. Visit our facilities and meet our team to gain confidence in our operations."
              },
              {
                step: "03",
                title: "Investment Agreement",
                description: "Sign our transparent investment agreement that clearly outlines terms, returns, timelines, and your rights as an investor. All agreements are legally binding and SEC-compliant."
              },
              {
                step: "04",
                title: "Active Participation",
                description: "Receive regular updates on your investment performance, including monthly reports, farm inspection photos, and market analysis. Stay informed throughout the investment period."
              },
              {
                step: "05",
                title: "Returns Distribution",
                description: "Receive your returns according to the agreed schedule. For short-term investments, this is monthly; for long-term investments, returns are distributed at harvest or maturity."
              },
              {
                step: "06",
                title: "Reinvestment Opportunity",
                description: "Reinvest your returns in new opportunities or withdraw your profits. Our team will work with you to plan your next investment steps based on your evolving goals."
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
              What sets us apart in the agricultural investment landscape
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Proven Track Record",
                description: "Over a decade of successful agricultural investments with consistent returns and satisfied investors."
              },
              {
                icon: <Shield className="h-5 w-5" />,
                title: "Transparent Operations",
                description: "Real-time access to farm operations, financial reports, and performance metrics through our investor portal."
              },
              {
                icon: <Leaf className="h-5 w-5" />,
                title: "Sustainable Practices",
                description: "Commitment to environmentally responsible farming methods that protect natural resources for future generations."
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Community Impact",
                description: "Every investment directly supports farming families and improves food access for local communities."
              },
              {
                icon: <Award className="h-5 w-5" />,
                title: "Regulatory Compliance",
                description: "Fully registered with relevant authorities and compliant with all SEC regulations for agricultural investments."
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                title: "Competitive Returns",
                description: "Industry-leading returns backed by real agricultural commodities and professional farm management."
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
            Ready to Start Investing?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join our community of investors and start earning sustainable returns from Nigerian agriculture
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

export default Services;