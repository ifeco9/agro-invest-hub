import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const titleText = "Unlock Sustainable Returns: Invest in Nigerian Agriculture Today";
  const [displayedText, setDisplayedText] = useState("");
  const particlesRef = useRef<HTMLDivElement>(null);

  // Animated statistics
  const [stats, setStats] = useState({ investors: 0, returns: 0, projects: 0 });
  const targetStats = { investors: 5000, returns: 12, projects: 50 };

  useEffect(() => {
    setIsVisible(true);
    
    // Animate letters one by one
    let index = 0;
    const timer = setInterval(() => {
      if (index < titleText.length) {
        setDisplayedText(titleText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    // Animate statistics counter
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const statTimer = setInterval(() => {
      if (currentStep < steps) {
        currentStep++;
        const progress = currentStep / steps;
        setStats({
          investors: Math.floor(targetStats.investors * progress),
          returns: Math.floor(targetStats.returns * progress * 10) / 10,
          projects: Math.floor(targetStats.projects * progress),
        });
      } else {
        clearInterval(statTimer);
        setStats(targetStats);
      }
    }, stepTime);

    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    // Create floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        particlesRef.current.appendChild(particle);
      }
    }

    return () => {
      clearInterval(timer);
      clearInterval(statTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center mb-0 pb-0 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-900 via-teal-700 to-emerald-600 animate-gradient-shift" />
      
      {/* Background Image with Overlay and Parallax */}
      <div className="absolute inset-0 z-0 mb-0 pb-0 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            minWidth: "100%"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-teal-800/85 to-emerald-700/80 backdrop-blur-[2px]" />
        
        {/* Floating Particles */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20 mb-0 pb-0">
        <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-2xl">
            {displayedText}
            <span className="ml-1 inline-block w-1 h-16 bg-white align-middle animate-pulse"></span>
          </h1>
          <div className={`text-center mt-4 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-emerald-200 text-lg font-medium drop-shadow-lg">
              Established in Osun State in 2014 — Pioneers in Responsible Nigerian Agriculture
            </p>
          </div>
          
          {/* Animated Stats */}
          <div className={`grid grid-cols-3 gap-6 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stats.investors.toLocaleString()}+</div>
              <div className="text-sm text-emerald-200">Investors</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stats.returns}%</div>
              <div className="text-sm text-emerald-200">Avg Returns</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stats.projects}+</div>
              <div className="text-sm text-emerald-200">Projects</div>
            </div>
          </div>

          <p className={`text-xl md:text-2xl mb-8 text-white/95 drop-shadow-lg transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Yields up to 12% with transparent, low-risk opportunities
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button size="lg" className="bg-white text-teal-900 hover:bg-emerald-100 shadow-2xl hover:shadow-white/50 transition-all hover:scale-105 font-semibold text-lg px-8 py-6" asChild>
              <Link to="/opportunities">Explore Opportunities</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-teal-900 shadow-xl transition-all hover:scale-105 font-semibold text-lg px-8 py-6" asChild>
              <Link to="/how-it-works">How It Works</Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/30 hover:bg-white/25 transition-all hover:scale-105 shadow-lg">
              <TrendingUp className="h-5 w-5 text-emerald-200" />
              <span className="text-sm font-semibold text-white">Proven Returns</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/30 hover:bg-white/25 transition-all hover:scale-105 shadow-lg">
              <Shield className="h-5 w-5 text-emerald-200" />
              <span className="text-sm font-semibold text-white">SEC Regulated</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full border border-white/30 hover:bg-white/25 transition-all hover:scale-105 shadow-lg">
              <Leaf className="h-5 w-5 text-emerald-200" />
              <span className="text-sm font-semibold text-white">Sustainable Impact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 bg-white/10 backdrop-blur-sm">
          <div className="w-1.5 h-2 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;