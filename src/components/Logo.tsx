import { cn } from "@/lib/utils";
import logoImage from "@/assets/drecanlogonew.png";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "full" | "icon" | "mobile";
}

const Logo = ({ variant = "full", className, ...props }: LogoProps) => {
  // For mobile view, we show a small logo
  if (variant === "mobile") {
    return (
      <div className={cn("flex items-center", className)} {...props}>
        <img
          src={logoImage}
          alt="DRECAN COMMODITIES"
          className="w-8 h-8 object-contain rounded-full"
        />
      </div>
    );
  }

  // Icon-only variant
  if (variant === "icon") {
    return (
      <div className={cn("flex items-center", className)} {...props}>
        <img
          src={logoImage}
          alt="DRECAN COMMODITIES"
          className="w-10 h-10 object-contain rounded-full"
        />
      </div>
    );
  }

  // For desktop view, we show the full logo with text
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <img
        src={logoImage}
        alt="DRECAN COMMODITIES"
        className="w-12 h-auto drop-shadow-sm rounded-full"
      />
    </div>
  );
};

export default Logo;