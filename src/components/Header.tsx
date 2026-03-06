import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "HOME", id: "hero", active: true },
    { label: "ROOFING SHEETS", id: "products" },
    { label: "SERVICES", id: "services" },
    { label: "TESTIMONIALS", id: "testimonials" },
    { label: "CONTACT US", id: "contact" },
  ];

  return (
    <>
      {/* Top Accent Bar - Like the reference site */}
      <div className="accent-bar" />
      
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-background transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img 
                src="/logos/royal-mabati-logo.png" 
                alt="Royal Mabati Factory Ltd" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const text = e.currentTarget.nextElementSibling as HTMLElement;
                  if (text) text.style.display = 'block';
                }}
              />
              <span className="hidden text-xl font-bold text-primary">
                Royal Mabati
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                    item.active 
                      ? 'text-primary' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                  {item.active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </nav>

            {/* Phone & Menu */}
            <div className="flex items-center gap-4">
               <a 
                 href="tel:+254752543019"
                 className="hidden md:flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
               >
                 <Phone className="h-4 w-4" />
                 <span>+254 752 543 019</span>
               </a>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-primary p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-4 py-2">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className={`block w-full text-left py-3 px-4 text-sm font-medium border-b border-border/50 last:border-0 ${
                    item.active 
                      ? 'text-primary bg-primary/5' 
                      : 'text-foreground hover:text-primary hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
               <a 
                 href="tel:+254752543019"
                 className="flex items-center gap-2 py-3 px-4 text-primary font-semibold"
               >
                 <Phone className="h-4 w-4" />
                 <span>+254 752 543 019</span>
               </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
