import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-mint-50 border-t border-mint-200">
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
              <a href="#" className="text-teal-800 hover:text-teal-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-teal-800 hover:text-teal-600 transition-colors">
                <Twitter className="h-5 w-5" />
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
                <Link to="/how-it-works" className="text-teal-800 hover:text-teal-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-teal-800 hover:text-teal-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-teal-800 hover:text-teal-600 transition-colors">
                  Insights & Blog
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
                <Link to="/contact" className="text-teal-800 hover:text-teal-600 transition-colors">
                  Contact Us
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
              <Input type="email" placeholder="Your email" className="flex-1 border-mint-200 focus:border-teal-600 placeholder:text-teal-400" />
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">Subscribe</Button>
            </div>
              <div className="mt-4 space-y-2 text-sm text-teal-800">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-600" />
                <span>info@drecancommodities.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-600" />
                <span>+234 803 456 7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-mint-200 text-center text-sm text-teal-800">
          <p>&copy; {new Date().getFullYear()} Drecan Commodities. All rights reserved. SEC Regulated.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;