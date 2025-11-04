import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Leaf, 
  TrendingUp, 
  Handshake, 
  Award,
  CheckCircle,
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [counters, setCounters] = useState({
    farmers: 0,
    consumers: 0,
    partners: 0
  });

  // Counter animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        farmers: 15000,
        consumers: 1000000,
        partners: 30
      });
    }, 500);
    
    return () => clearTimeout(timer);
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
            transition={{ duration: 0.5 }}
          >
            About Drecan Commodities Ltd
          </motion.h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">Company Overview</h2>
            <p className="text-gray-700 mb-4">
              Drecan Commodities Ltd is a forward-thinking agribusiness and commodity trading company committed to transforming Nigeria's agricultural landscape through innovation, fairness, and sustainability.
            </p>
            <p className="text-gray-700 mb-4">
              Headquartered in Abuja, Drecan Commodities operates as a bridge between rural farmers and urban markets, ensuring a seamless and profitable movement of agricultural produce while driving food accessibility for every social class.
            </p>
            <p className="text-gray-700">
              We are building an ecosystem where agriculture is profitable, food is affordable, and investment is impactful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">Our Philosophy</h2>
            <p className="text-gray-700 mb-4">
              We believe that agriculture holds the key to national development and food security.
            </p>
            <p className="text-gray-700">
              Every bag of rice, tuber of yam, or bottle of palm oil we move represents more than a transaction — it represents hope for farmers, food for families, and opportunity for investors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border border-teal-100">
                <CardHeader>
                  <h2 className="text-3xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <Target className="h-8 w-8 text-teal-700" />
                    Our Mission
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To create a sustainable agricultural economy that connects farmers, investors, and consumers — ensuring food availability and economic growth through fair trade and responsible innovation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border border-teal-100">
                <CardHeader>
                  <h2 className="text-3xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <Globe className="h-8 w-8 text-teal-700" />
                    Our Vision
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To be Africa's leading agricultural trading and investment company — building a trusted platform where profit meets purpose and communities thrive together.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle, title: "Integrity", desc: "We operate transparently and keep our promises." },
                { icon: Leaf, title: "Sustainability", desc: "Every trade we make supports long-term food security." },
                { icon: TrendingUp, title: "Empowerment", desc: "We uplift farmers and rural communities through fair market access." },
                { icon: Target, title: "Innovation", desc: "We adopt efficient systems that reduce waste and improve delivery." },
                { icon: Handshake, title: "Impact", desc: "We use business as a force for good — reducing hunger and promoting development." },
                { icon: Users, title: "Community", desc: "We prioritize the well-being of the communities we serve." }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-teal-100 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-teal-100 rounded-full">
                      <value.icon className="h-6 w-6 text-teal-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">What We Stand For</h2>
            <p className="text-gray-700 mb-6">
              Drecan Commodities stands at the intersection of commerce and compassion.
            </p>
            <p className="text-gray-700 mb-6">
              While we operate as a for-profit trading enterprise, our ultimate goal is to create shared prosperity — where every stakeholder, from the farmer to the end consumer, benefits.
            </p>
            <p className="text-gray-700 mb-6">
              Our operations reflect our commitment to United Nations Sustainable Development Goals, particularly:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <motion.div
                className="bg-white p-4 rounded-lg shadow-sm border border-teal-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-teal-700 mr-2" />
                  <span className="font-semibold text-teal-900">SDG 2: Zero Hunger</span>
                </div>
                <p className="text-sm text-gray-600">End hunger, achieve food security and improved nutrition</p>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow-sm border border-teal-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-teal-700 mr-2" />
                  <span className="font-semibold text-teal-900">SDG 8: Decent Work and Economic Growth</span>
                </div>
                <p className="text-sm text-gray-600">Promote sustained, inclusive and sustainable economic growth</p>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow-sm border border-teal-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center mb-2">
                  <Leaf className="h-5 w-5 text-teal-700 mr-2" />
                  <span className="font-semibold text-teal-900">SDG 12: Responsible Consumption and Production</span>
                </div>
                <p className="text-sm text-gray-600">Ensure sustainable consumption and production patterns</p>
              </motion.div>
            </div>
            
            <p className="text-gray-700">
              Through fair pricing, efficient logistics, and targeted partnerships, we contribute to reducing hunger, creating jobs, and building sustainable local food systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Activities & Social Commitment */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-teal-900 mb-6">Our Core Activities</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-700 font-bold mr-2">1.</span>
                  <span>Commodity Procurement: Direct sourcing from smallholder farmers and cooperatives.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-700 font-bold mr-2">2.</span>
                  <span>Urban Distribution: Supplying wholesalers, retailers, and markets in major cities like Abuja.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-700 font-bold mr-2">3.</span>
                  <span>Agricultural Partnerships: Supporting investors and organizations who wish to engage in farming.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-700 font-bold mr-2">4.</span>
                  <span>Community Access: Providing affordable food to local institutions and vulnerable households.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-700 font-bold mr-2">5.</span>
                  <span>Investment Opportunities: Offering short- and long-term agribusiness investment cycles with transparent returns.</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-teal-900 mb-6">Social Commitment</h2>
              <p className="text-gray-700 mb-4">
                Drecan Commodities is not just about business — it's about building food security for all Nigerians.
              </p>
              <p className="text-gray-700 mb-4">
                We collaborate with local governments, NGOs, and community organizations to provide affordable food distribution systems and empower rural farmers through training and access to reliable markets.
              </p>
              <p className="text-gray-700">
                By prioritizing affordability and accessibility, we make it possible for every household — rich, poor, or middle-class — to have access to quality food.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6 text-center">Our Impact Goals</h2>
            <p className="text-gray-700 mb-12 text-center">
              By 2027, Drecan Commodities aims to:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: counters.farmers.toLocaleString(), label: "Local farmers with fair market access" },
                { number: counters.consumers.toLocaleString(), label: "Consumers through community food programs" },
                { number: counters.partners, label: "Local and international organizations" }
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white p-6 rounded-lg shadow-md border border-teal-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="text-4xl font-bold text-teal-700 mb-2">
                    {goal.number}
                    {index === 0 && "+"}
                    {index === 1 && "+"}
                    {index === 2 && "+"}
                  </div>
                  <p className="text-gray-700">{goal.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-700">
                • Establish regional distribution hubs in key Nigerian cities for efficient logistics
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Our Promise
          </motion.h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Drecan Commodities promises to operate with transparency, integrity, and community focus.
          </motion.p>
          <motion.p 
            className="text-lg mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are not just building an agribusiness — we are building a movement for food justice, economic inclusion, and sustainable development.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default About;