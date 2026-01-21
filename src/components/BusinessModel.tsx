import { motion } from "framer-motion";
import { Users, Warehouse, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessModel = () => {
  const businessSegments = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Cooperative Membership & Agricultural Participation",
      description: "Empowering members through structured agricultural participation across Nigeria",
      details: [
        "Membership-based participation in agricultural value chains",
        "Collective farming and produce aggregation through the Cooperative Society",
        "Access to farmland through lease-to-use and cooperative farming arrangements",
        "Professionally managed agricultural projects for cooperative members"
      ],
      engagement: "Members participate through cooperative membership, joint production programs, or managed agricultural projects coordinated by the Cooperative Society. All activities are structured around shared responsibility, transparent surplus sharing, and agreed participation terms, in line with cooperative principles.",
      link: "/opportunities"
    },
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: "Storage & Scarcity-Based Sales (Product Department)",
      description: "Strategic warehousing, preservation, and market-timed commodity release",
      details: [
        "Secure storage facilities for agricultural commodities",
        "Seasonal aggregation during harvest periods",
        "Controlled release during off-season to stabilize supply and pricing",
        "Risk management through diversified storage locations"
      ],
      engagement: "Clients and members engage through storage services, produce aggregation programs, and structured commodity sales arrangements. We provide transparent inventory records, storage conditions, and market distribution schedules.",
      link: "/services"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Purchase & Resale of Agricultural Products (Product Department)",
      description: "Efficient supply chain connecting farms to markets",
      details: [
        "Direct sourcing from farmers and cooperative members",
        "Quality control, grading, and packaging",
        "Distribution to urban markets, retailers, and institutional buyers",
        "Value-addition and basic processing services"
      ],
      engagement: "Members and partners may participate as suppliers, distributors, or buyers. Transactions are guided by transparent pricing, quality standards, and efficient logistics tailored to each engagement.",
      link: "/shop"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Our Core Business Segments</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-2xl mx-auto">
            Clear distinction and explanation of our two operational platforms
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
                      <span className="text-muted-foreground text-left">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-foreground mb-2">How It Works:</h4>
                <p className="text-muted-foreground text-sm text-left">{segment.engagement}</p>
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
            Contact our team to explore cooperative membership or product-based services.
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