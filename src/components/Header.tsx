import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { trackPhoneClick, trackEmailClick } from "@/lib/tracking";

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
    { label: "Home", id: "hero" },
    { label: "Products", id: "products" },
    { label: "Services", id: "services" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="tel:0762235510"
                className="flex items-center gap-2 hover:opacity-90 transition-opacity font-semibold text-base"
                onClick={() => trackPhoneClick("0762235510")}
              >
                <Phone className="h-5 w-5" />
                <span>Call: 0762235510</span>
              </a>
              <div className="hidden sm:block w-px h-6 bg-primary-foreground/30"></div>
              <a 
                href="mailto:salesroyalmabatii@gmail.com" 
                className="flex items-center gap-2 hover:opacity-90 transition-opacity font-semibold text-base"
                onClick={() => trackEmailClick("salesroyalmabatii@gmail.com")}
              >
                <Mail className="h-5 w-5" />
                <span>Email: salesroyalmabatii@gmail.com</span>
              </a>
            </div>
            <a 
              href="https://www.facebook.com/share/1AMKUYhVgU /" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity font-medium text-sm"
            >
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img
                src="/logos/royal-mabati-logo.png"
                alt="Royal Mabati Factory Ltd"
                className="h-10 md:h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const text = e.currentTarget.nextElementSibling as HTMLElement;
                  if (text) text.style.display = "block";
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
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 rounded-full" />
                </button>
              ))}
            </nav>

            {/* Phone & Menu */}
            <div className="flex items-center gap-3">
              <a
                href="tel:0762235510"
                className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                onClick={() => trackPhoneClick("0762235510")}
              >
                <Phone className="h-3.5 w-3.5" />
                <span>0762235510</span>
              </a>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="border-t border-border bg-background px-4 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+254762235510"
              className="flex items-center gap-2 py-3 px-3 text-primary font-semibold text-sm"
            >
              <Phone className="h-4 w-4" />
              <span>0762235510</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
