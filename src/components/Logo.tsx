import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo1.jpg";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "full" | "icon" | "mobile";
}

const Logo = ({ variant = "full", className, ...props }: LogoProps) => {
  // For mobile view, we don't show any logo on the right
  if (variant === "mobile") {
    return null;
  }

  // For desktop view, we show the full logo with text
  if (variant === "full") {
    return (
      <div className={cn("flex items-center", className)} {...props}>
        <img 
          src={logoImage} 
          alt="DRECAN COMMODITIES" 
          className="w-32 h-auto drop-shadow-sm rounded-full"
        />
      </div>
    );
  }

  // Icon-only variant (not used in this update)
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <img 
        src={logoImage} 
        alt="DRECAN COMMODITIES" 
        className="w-12 h-12 object-contain"
      />
    </div>
  );
};

export default Logo;