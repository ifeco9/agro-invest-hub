import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import SparkleEffect from "./SparkleEffect";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const titleText = "Join Drecan Cooperative Society";
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    // Create floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 20; i++) { // Reduced number of particles for better performance
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`; // Reduced animation delay
        particle.style.animationDuration = `${10 + Math.random() * 5}s`; // Reduced animation duration
        particlesRef.current.appendChild(particle);
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Split text into words for animation
  const words = titleText.split(" ");

  return (
    <section className="relative min-h-screen flex items-center pb-32 overflow-hidden bg-teal-900">
      {/* Sparkling Effect */}
      <SparkleEffect />

      {/* Background Image with Overlay and Parallax */}
      <div className="absolute inset-0 z-0 mb-0 pb-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            minWidth: "100%"
          }}
        />
        {/* Improved semi-transparent overlay for better image visibility */}
        <div className="absolute inset-0 bg-teal-900/70" />

        {/* Floating Particles */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20 mb-0 pb-0">
        <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-2xl">
            {words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.3, // Reduced duration for smoother performance
                  delay: wordIndex * 0.05, // Reduced delay
                  type: "tween", // Using tween instead of spring for better performance
                  ease: "easeOut"
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
            <span className="ml-1 inline-block w-1 h-16 bg-white align-middle animate-pulse"></span>
          </h1>
          <div className={`text-center mt-4 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-teal-100 text-lg font-medium drop-shadow-lg">
              Established in Osun State in 2014 — Pioneers in Responsible Nigerian Agriculture
            </p>
          </div>

          <p className={`text-xl md:text-2xl mb-8 text-white/95 drop-shadow-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            From farm to market, we deliver practical, member-driven agricultural services
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button size="lg" className="bg-teal-700 text-white hover:bg-teal-800 shadow-2xl hover:shadow-teal-900/50 transition-all hover:scale-105 font-semibold text-lg px-8 py-6" asChild>
              <Link to="/opportunities">Explore Opportunities</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-teal-50/10 backdrop-blur-md border-2 border-teal-200 text-white hover:bg-teal-50 hover:text-teal-900 shadow-xl transition-all hover:scale-105 font-semibold text-lg px-8 py-6" asChild>
              <Link to="/how-it-works">How It Works</Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 bg-teal-50/15 backdrop-blur-md px-5 py-3 rounded-full border border-teal-200/30 hover:bg-teal-50/25 transition-all hover:scale-105 shadow-lg shadow-teal-900/20">
              <TrendingUp className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">Proven Shared Surplus</span>
            </div>
            <div className="flex items-center gap-2 bg-teal-50/15 backdrop-blur-md px-5 py-3 rounded-full border border-teal-200/30 hover:bg-teal-50/25 transition-all hover:scale-105 shadow-lg shadow-teal-900/20">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">Registered Cooperative Society</span>
            </div>
            <div className="flex items-center gap-2 bg-teal-50/15 backdrop-blur-md px-5 py-3 rounded-full border border-teal-200/30 hover:bg-teal-50/25 transition-all hover:scale-105 shadow-lg shadow-teal-900/20">
              <Leaf className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">Sustainable Impact</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;