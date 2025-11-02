import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Self Mabati</h3>
            <p className="text-primary-foreground/80 mb-4">
              Premium roofing solutions for Kenya's diverse climate. Quality you can trust, service you can count on.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/1AMKUYhVgU/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:+254755199726"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+254 755 199 726</span>
              </a>
              <a 
                href="mailto:salesroyalmabati@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>salesroyalmabati@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Nationwide Delivery in Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-primary-foreground/80 hover:text-gold transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-primary-foreground/80 hover:text-gold transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-primary-foreground/80 hover:text-gold transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-primary-foreground/80 hover:text-gold transition-colors"
              >
                Get Quote
              </button>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {currentYear} Self Mabati. All rights reserved. | 25-Year Warranty | ISO Certified | Free Nationwide Delivery
          </p>
        </div>
      </div>
    </footer>
  );
};
