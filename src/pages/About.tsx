import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

const About = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-mint-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Logo variant="full" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-900">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* The Company Section */}
      <section 
        id="section-company" 
        className={`py-8 md:py-12 px-4 md:px-6 bg-background transition-opacity duration-700 ${visibleSections['section-company'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-900">THE COMPANY</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-800">REVOLUTIONIZING NIGERIAN AGRICULTURE: THE DRECAN MODEL</h3>
          
          <p className="text-lg text-teal-800 mb-6">
            Established in Osun State in 2014, Drecan Commodities & Oil Palm Company is a disruptive force in Nigerian agritech and agribusiness. We are not just another agricultural company; we are pioneers building a new standard for responsible tropical agriculture in Nigeria.
          </p>
          
          <p className="text-lg text-teal-800 mb-6">
            Our innovative, AI and tech-driven approach to managing our oil palm plantations and farms ensures unparalleled transparency and sustainability. This model is the core of our disruption, guaranteeing long-term economic viability while positively impacting our communities and environment.
          </p>
        </div>
      </section>

      {/* Our Disruptive Ambition Section */}
      <section 
        id="section-ambition" 
        className={`py-8 md:py-12 px-4 md:px-6 bg-mint-100 transition-opacity duration-700 ${visibleSections['section-ambition'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-900">Our Disruptive Ambition: Redefining Tropical Agriculture</h3>
          
          <p className="text-lg text-teal-800 mb-6">
            At Drecan, our mission is to challenge the status quo. We implement key initiatives that merge high-performance agriculture with robust social and environmental governance (ESG). Our integrated focus ensures:
          </p>
          
          <ul className="list-disc list-inside text-lg text-teal-800 mb-6 space-y-3">
            <li><span className="font-semibold">Economic Resilience:</span> Profitable and sustainable operations that attract forward-thinking investment.</li>
            <li><span className="font-semibold">Social Impact:</span> Enhancing community welfare, health, and security for our employees and partners in Osun State and beyond.</li>
            <li><span className="font-semibold">Natural Resource Management:</span> Implementing cutting-edge practices for conservation and sustainable land use.</li>
          </ul>
          
          <p className="text-lg text-teal-800">
            By leveraging AI technology and a commitment to ethical principles, Drecan is proving that agribusiness can be a powerful vehicle for positive change, creating a lasting, positive impact for all stakeholders and setting a new benchmark for the industry in Nigeria.
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section 
        id="section-commitment" 
        className={`py-8 md:py-12 px-4 md:px-6 bg-background transition-opacity duration-700 ${visibleSections['section-commitment'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-900">COMMITMENT</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-800">Sustainable Palm Oil & Food Commodities in Nigeria</h3>
          
          <p className="text-lg text-teal-800 mb-6">
            For over 14 years, Drecan has been a cornerstone of sustainable agribusiness in Nigeria. We are a leading producer, supplier and exporter of premium palm oil products and essential food commodities, including cashew nuts, cocoa, and dried grains (corn, millet, wheat, beans, and rice).
          </p>
          
          <p className="text-lg text-teal-800 mb-6">
            Our integrated model—from our own plantations to our secure storage facilities—is built on a foundation of high-performance, ethical, and sustainable agriculture. We are committed to creating shared value that empowers our employees, partners, and local communities while protecting the environment.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-800">Our Commitment to Sustainable & Responsible Agriculture in Africa</h3>
          
          <p className="text-lg text-teal-800">
            Our approach is formalized in a comprehensive Responsible Management Policy, developed with input from local stakeholders. This policy guides our entire operation and extends to our subcontractors and suppliers, ensuring a consistent, high-standard value chain that is highly rated by our customers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
