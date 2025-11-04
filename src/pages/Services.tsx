import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Link, Truck, Handshake, Sprout } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Sprout,
      title: "AgroTrade Cycle",
      subtitle: "Empowering Farmers, Supplying Cities",
      description: "This is our core trading and distribution service, where we purchase key commodities such as rice, beans, maize, egusi, and palm oil directly from local farmers and trusted cooperatives at fair market prices.\n\nWe then distribute these products to wholesalers and retailers in Abuja and other major cities — efficiently, transparently, and affordably.",
      benefits: [
        "Eliminates middlemen and stabilizes market prices",
        "Ensures timely delivery to urban markets",
        "Provides farmers with fair income and investors with reliable returns",
        "Supports community food programs and local market access"
      ],
      clients: "Wholesalers, retailers, food distributors, hotels, and institutions across Nigeria."
    },
    {
      icon: Link,
      title: "AgroLink Community Program",
      subtitle: "Connecting Farmers, Consumers, and Communities",
      description: "The AgroLink Program is our social impact service, designed to ensure that food remains affordable and accessible for every Nigerian household — from the wealthy to the low-income class.\n\nWe collaborate with NGOs, local councils, and food access programs to supply community food packs, grains, and household commodities at discounted rates.",
      benefits: [
        "Promotes food affordability across all income levels",
        "Supports SDG 2 (Zero Hunger) by ensuring food accessibility",
        "Builds partnerships with humanitarian organizations and government agencies",
        "Creates a sustainable food ecosystem that benefits both producers and consumers"
      ],
      partners: "Nonprofits, local government programs, community development organizations, and faith-based initiatives."
    },
    {
      icon: Leaf,
      title: "AgroFarm Partnership",
      subtitle: "Invest in Land. Grow with Purpose.",
      description: "Our AgroFarm Partnership program allows individuals and organizations to participate in farming without the stress of daily management.\n\nClients can either lease land to cultivate specific crops or fund managed farms handled by our professional agricultural team.\n\nWe handle everything from land preparation and planting to crop care, harvest, and post-harvest processing — ensuring a seamless and profitable experience for our partners.",
      options: [
        "Land Leasing: Clients lease farmland for specific crops",
        "Managed Farming: Clients fund farms managed by our team",
        "Crop Selection: Rice, maize, beans, cassava, palm oil, and more",
        "Full-Service Management: End-to-end farm operations"
      ],
      examples: "A ₦5 million investment in a rice farm can yield ₦7.5 million after 12 months, while a ₦10 million cassava project can return ₦14 million after 18 months."
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      subtitle: "Moving Agriculture Forward",
      description: "Our logistics arm ensures seamless transportation of agricultural produce from rural farms to urban markets.\n\nWith a modern fleet and strategic partnerships, we maintain cold chain integrity for perishable goods and ensure timely delivery across Nigeria.",
      features: [
        "Cold chain management for perishable goods",
        "Real-time tracking and delivery updates",
        "Strategic warehousing in key locations",
        "Nationwide distribution network"
      ]
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      subtitle: "Building Agricultural Alliances",
      description: "We forge partnerships with local cooperatives, international buyers, financial institutions, and government agencies to strengthen the agricultural value chain.\n\nThese collaborations enhance our reach, improve market access, and ensure sustainable growth for all stakeholders.",
      focus: [
        "Cooperative Development: Strengthening farmer networks",
        "Market Access: Connecting to international buyers",
        "Financial Inclusion: Linking farmers to credit facilities",
        "Policy Advocacy: Supporting favorable agricultural policies"
      ]
    }
  ];

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
            Empowering Agriculture, Enabling Prosperity
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            At Drecan Commodities Ltd., our services connect farmers, investors, and markets into one powerful system — ensuring fair trade, reliable food supply, and profitable investment opportunities.
          </motion.p>
          <motion.p 
            className="text-lg mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a fully integrated model that covers procurement, processing, distribution, and agricultural partnership — all designed to make agribusiness sustainable and beneficial for everyone.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-teal-100">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-teal-100 rounded-full">
                        <service.icon className="h-6 w-6 text-teal-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-teal-900">{service.title}</h3>
                        <p className="text-teal-700 font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-line mb-4">{service.description}</p>
                    
                    {service.benefits && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-teal-900 mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-teal-600 font-bold mr-2">•</span>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {service.options && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-teal-900 mb-2">Program Options:</h4>
                        <ul className="space-y-1">
                          {service.options.map((option, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-teal-600 font-bold mr-2">•</span>
                              <span className="text-gray-700">{option}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {service.features && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-teal-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-teal-600 font-bold mr-2">•</span>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {service.focus && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-teal-900 mb-2">Focus Areas:</h4>
                        <ul className="space-y-1">
                          {service.focus.map((focus, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-teal-600 font-bold mr-2">•</span>
                              <span className="text-gray-700">{focus}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {service.clients && (
                      <div className="mb-2">
                        <h4 className="font-semibold text-teal-900">Target Clients:</h4>
                        <p className="text-gray-700">{service.clients}</p>
                      </div>
                    )}
                    
                    {service.partners && (
                      <div className="mb-2">
                        <h4 className="font-semibold text-teal-900">Target Partners:</h4>
                        <p className="text-gray-700">{service.partners}</p>
                      </div>
                    )}
                    
                    {service.examples && (
                      <div className="mb-2">
                        <h4 className="font-semibold text-teal-900">Examples:</h4>
                        <p className="text-gray-700">{service.examples}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Flow */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A simple three-step approach to connecting agriculture with investment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Source & Procure",
                description: "We directly source quality agricultural produce from farmers and cooperatives at fair prices.",
              },
              {
                step: "2",
                title: "Process & Distribute",
                description: "Our team handles processing, packaging, and efficient distribution to urban markets.",
              },
              {
                step: "3",
                title: "Invest & Grow",
                description: "Investors participate in our programs and earn returns while supporting sustainable agriculture.",
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md border border-teal-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-teal-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
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
            transition={{ duration: 0.5 }}
          >
            Ready to Partner with Us?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join Drecan Commodities in building a sustainable agricultural future for Nigeria
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-8 py-3 rounded-full font-bold text-lg"
            >
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;