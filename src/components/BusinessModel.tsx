import { motion } from "framer-motion";
import { Leaf, Warehouse, ShoppingBag, Users, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessModel = () => {
  const businessSegments = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Agricultural Investment & Partnerships",
      description: "Connect investors with profitable agricultural opportunities across Nigeria",
      details: [
        "Direct farm investment opportunities with 15-35% annual returns",
        "Partnership programs with farming communities",
        "Lease-to-own farmland arrangements",
        "Managed farm investment options with professional oversight"
      ],
      engagement: "Investors can participate through direct funding, partnership agreements, or managed investment programs. Engagements are structured with clear ROI expectations, timelines, and exit strategies.",
      link: "/services"
    },
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: "Storage & Scarcity-Based Sales",
      description: "Strategic warehousing and seasonal commodity trading",
      details: [
        "Secure storage facilities for agricultural commodities",
        "Seasonal buying during harvest periods at lower prices",
        "Strategic release during off-season for premium pricing",
        "Risk mitigation through diversified storage locations"
      ],
      engagement: "Clients can engage through bulk storage contracts, seasonal trading partnerships, or futures agreements. We provide transparent reporting on inventory levels, storage conditions, and market timing strategies.",
      link: "/services"
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Purchase & Resale of Agricultural Products",
      description: "Streamlined supply chain from farm to market",
      details: [
        "Direct procurement from farmers at competitive rates",
        "Quality control and packaging for market readiness",
        "Distribution to urban markets, retailers, and exporters",
        "Value-added processing services"
      ],
      engagement: "Partners can engage as suppliers, distributors, or buyers. We offer flexible contracting options, quality assurance guarantees, and efficient logistics solutions tailored to each partner's needs.",
      link: "/services"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Our Core Business Segments</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-2xl mx-auto">
            Clear distinction and explanation of our three primary business areas
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {businessSegments.map((segment, index) => (
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
                {segment.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{segment.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 flex-grow">{segment.description}</p>
              
              <div className="mb-4">
                <h4 className="font-bold text-foreground mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {segment.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm sm:text-base">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-foreground mb-2">How It Works:</h4>
                <p className="text-muted-foreground text-sm">{segment.engagement}</p>
              </div>
              
              <Button 
                className="mt-auto" 
                variant="outline" 
                asChild
              >
                <Link to={segment.link}>Learn More</Link>
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Ready to Engage With Us?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact our business development team to discuss how we can create value together through any of our three core business segments.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModel;