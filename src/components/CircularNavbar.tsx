import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import Logo from "@/components/Logo";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

const CircularNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Opportunities", path: "/opportunities" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About Us", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Circular Navbar */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="relative h-32 flex items-center justify-center">
          {/* Central Logo */}
          <Link to="/" className="absolute z-20">
            <Logo variant="icon" />
          </Link>

          {/* Orbiting Links Container */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[600px] h-32">
              {navLinks.map((link, i) => {
                const totalLinks = navLinks.length;
                const angleOffset = -90; // Start from top
                const angle = angleOffset + (i * 180) / (totalLinks - 1);
                const radius = 220;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="absolute top-1/2 left-1/2 pointer-events-auto"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <span
                      className={`block px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 whitespace-nowrap ${
                        isActive(link.path) ? "text-primary font-bold" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="absolute right-8 z-20">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{user.email}</span>
                <Button size="sm" variant="outline" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button size="sm" asChild>
                <Link to="/auth">Sign In / Sign Up</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Floating Action Button */}
      <div className="md:hidden">
        {/* Top bar with logo and menu */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <Link to="/" className="flex items-center">
              <Logo variant="mobile" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm animate-fade-in">
            <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-border w-full max-w-xs flex flex-col gap-3">
                {user ? (
                  <>
                    <span className="text-sm text-muted-foreground text-center">{user.email}</span>
                    <Button className="w-full" onClick={() => { handleSignOut(); setIsOpen(false); }}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button className="w-full" asChild>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      Sign In / Sign Up
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CircularNavbar;
