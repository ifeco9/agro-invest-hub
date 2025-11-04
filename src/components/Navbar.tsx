import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Opportunities", path: "/opportunities" },
    { name: "Services", path: "/services" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Load cart count from localStorage
  const updateCartCount = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const cart = JSON.parse(savedCart);
        const count = cart.reduce((total: number, item: any) => total + (item.quantity || 0), 0);
        setCartCount(count);
      } catch (e) {
        setCartCount(0);
      }
    } else {
      setCartCount(0);
    }
  };

  // Initialize cart count
  updateCartCount();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-teal-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
            <div className="flex items-center">
              {/* Icon logo for mobile, full logo for desktop */}
              <div className="block sm:hidden">
                <Logo variant="mobile" />
              </div>
              <div className="hidden sm:block">
                <Logo variant="full" />
              </div>
              {/* DRECAN COMMODITIES text for desktop only */}
              <div className="hidden sm:block ml-2">
                <span className="font-bold text-lg text-teal-900">DRECAN COMMODITIES</span>
                <span className="block text-xs text-teal-700 italic">from farm to the world</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-teal-700 relative ${
                  isActive(link.path) ? "text-teal-900" : "text-foreground"
                }`}
              >
                {isActive(link.path) && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-700 rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
                {link.name}
              </Link>
            ))}
            
            {/* Cart icon */}
            <Link to="/shop" className="relative p-2 text-teal-900 hover:text-teal-700">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Auth buttons for desktop */}
            <div className="flex items-center gap-2">
              <Button size="sm" className="bg-teal-700 hover:bg-teal-800 text-white" asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Cart icon for mobile */}
            <Link to="/shop" className="relative p-2 text-teal-900 hover:text-teal-700 md:hidden">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Auth buttons for mobile */}
            <div className="md:hidden">
              <Button variant="outline" size="sm" className="border-teal-100 text-teal-900 hover:bg-teal-50" asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
            </div>
            
            <button
              className="md:hidden p-2 text-teal-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden py-4 border-t border-teal-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-teal-700 relative py-2 ${
                    isActive(link.path) ? "text-teal-900" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-700 rounded-full"></span>
                  )}
                  {link.name}
                </Link>
              ))}
              <Button size="sm" className="w-full bg-teal-700 hover:bg-teal-800 text-white" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Reserve Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;