import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-teal-50 border-t border-teal-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-teal-900">
              <Logo variant="icon" />
              <span>Drecan Commodities</span>
            </Link>
            <p className="text-sm text-teal-800">
              Transparent agricultural investment opportunities with sustainable returns.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-teal-800 hover:text-teal-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-teal-800 hover:text-teal-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-teal-800 hover:text-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-teal-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/opportunities" className="text-teal-800 hover:text-teal-600 transition-colors">
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-teal-800 hover:text-teal-600 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-teal-800 hover:text-teal-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-teal-800 hover:text-teal-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-teal-900">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-teal-800 hover:text-teal-600 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-teal-800 hover:text-teal-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-teal-800 hover:text-teal-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-teal-800 hover:text-teal-600 transition-colors">
                  Insights & Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-teal-900">Stay Updated</h3>
            <p className="text-sm text-teal-800 mb-4">
              Get the latest investment opportunities and insights.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1 border-teal-100 focus:border-teal-700 focus:ring-teal-700 placeholder:text-teal-400" />
              <Button size="sm" className="bg-teal-700 hover:bg-teal-800 text-white">Subscribe</Button>
            </div>
              <div className="mt-4 space-y-2 text-sm text-teal-800">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-700" />
                <span>info@drecancommodities.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-700" />
                <span>+234 803 456 7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">Responsible Management Policy</span>
          <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">Stakeholder-Developed</span>
          <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">Full Supply Chain Standards</span>
          <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">Customer-Rated Excellence</span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-teal-100 text-center text-sm text-teal-800">
          <p>&copy; {new Date().getFullYear()} Drecan Commodities. All rights reserved. SEC Regulated.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;