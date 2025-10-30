import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo1.jpg";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "full" | "icon" | "mobile";
}

const Logo = ({ variant = "full", className, ...props }: LogoProps) => {
  // For mobile view, we show only the icon
  if (variant === "mobile") {
    return (
      <div className={cn("flex items-center", className)} {...props}>
        <img 
          src={logoImage} 
          alt="DRECAN COMMODITIES" 
          className="w-12 h-12 object-contain filter brightness-110 contrast-120 rounded-full"
        />
      </div>
    );
  }

  // For desktop view, we show the full logo with text
  if (variant === "full") {
    return (
      <div className={cn("flex items-center gap-3", className)} {...props}>
        <img 
          src={logoImage} 
          alt="DRECAN COMMODITIES" 
          className="w-50 h-auto max-w-[200px] filter brightness-110 contrast-120 rounded-full"
        />
      </div>
    );
  }

  // Icon-only variant
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <img 
        src={logoImage} 
        alt="DRECAN COMMODITIES" 
        className="w-12 h-12 object-contain filter brightness-110 contrast-120 rounded-full"
      />
    </div>
  );
};

export default Logo;