import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vibrant UK farmland with sustainable agriculture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
            Unlock Sustainable Returns: Invest in Nigerian Agriculture Today
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
