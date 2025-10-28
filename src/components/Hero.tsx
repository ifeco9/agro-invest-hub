import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleText = "Unlock Sustainable Returns: Invest in Nigerian Agriculture Today";
  const [displayedText, setDisplayedText] = useState("");

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

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay and Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: "translateZ(-1px) scale(1.2)",
            transformStyle: "preserve-3d"
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className={`max-w-3xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
            {displayedText}
            <span className="ml-1 inline-block w-1 h-16 bg-primary-foreground align-middle animate-pulse"></span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Yields up to 12% with transparent, low-risk opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="xl" variant="hero" asChild>
              <Link to="/opportunities">Explore Opportunities</Link>
            </Button>
            <Button size="xl" variant="outline" className="bg-background/90 hover:bg-background" asChild>
              <Link to="/how-it-works">How It Works</Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 animate-slide-up">
            <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Proven Returns</span>
            </div>
            <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">SEC Regulated</span>
            </div>
            <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Sustainable Impact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;