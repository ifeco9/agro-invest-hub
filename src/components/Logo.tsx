import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.jpg";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "full" | "icon" | "mobile";
}

const Logo = ({ variant = "full", className, ...props }: LogoProps) => {
  // For mobile view, we show only the text
  if (variant === "mobile") {
    return (
      <div className={cn("flex flex-col", className)} {...props}>
        <div className="font-['Playfair_Display'] text-lg font-bold italic text-foreground whitespace-nowrap">
          DRECAN COMMODITIES
        </div>
        <div className="font-['Montserrat'] text-[0.65rem] font-light italic text-muted-foreground mt-[-2px]">
          From farm to the world
        </div>
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
          className="h-10 w-auto max-w-[60px] rounded-full"
        />
        <div className="hidden sm:block">
          <div className="font-['Playfair_Display'] text-xl font-bold italic text-foreground">
            DRECAN COMMODITIES
          </div>
          <div className="font-['Montserrat'] text-xs font-light italic text-muted-foreground mt-[-4px]">
            From farm to the world
          </div>
        </div>
      </div>
    );
  }

  // Icon-only variant
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <img 
        src={logoImage} 
        alt="DRECAN COMMODITIES" 
        className="w-10 h-10 object-contain rounded-full"
      />
    </div>
  );
};

export default Logo;