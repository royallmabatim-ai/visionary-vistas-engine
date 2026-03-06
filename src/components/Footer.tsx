import { Phone, Mail, MapPin, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Royal Mabati Factory Ltd</h3>
            <p className="text-background/70 mb-4 leading-relaxed">
              Premium roofing solutions for Kenya's diverse climate. Quality you can trust, 
              service you can count on. We are market leaders in roofing sheets, accessories, 
              and installation services.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/1AMKUYhVgU/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-primary rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: "Home", id: "hero" },
                { label: "Products", id: "products" },
                { label: "Services", id: "services" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact", id: "quote" },
              ].map((link) => (
                <button 
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-background/70 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
               <a 
                 href="tel:+254752543019"
                 className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
               >
                 <Phone className="h-4 w-4 flex-shrink-0" />
                 <span>+254 752 543 019</span>
               </a>
               <a 
                 href="mailto:diamondshr623@gmail.com"
                 className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
               >
                 <Mail className="h-4 w-4 flex-shrink-0" />
                 <span>diamondshr623@gmail.com</span>
               </a>
              <div className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Nationwide Delivery in Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-background/60 text-sm">
              © {currentYear} Royal Mabati Factory Ltd. All Rights Reserved
            </p>
            <p className="text-background/60 text-sm">
              25-Year Warranty | ISO Certified | Free Nationwide Delivery
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
