import { Phone, Mail, MapPin, Facebook, ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Royal Mabati Factory Ltd</h3>
            <p className="text-secondary-foreground/70 mb-5 leading-relaxed text-sm max-w-md">
              Premium roofing solutions for Kenya's diverse climate. Quality you
              can trust, service you can count on. Market leaders in roofing
              sheets, accessories, and installation services.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1AMKUYhVgU/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-secondary-foreground/10 hover:bg-primary rounded-xl transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-secondary-foreground/60">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Home", id: "hero" },
                { label: "Products", id: "products" },
                { label: "Services", id: "services" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact", id: "quote" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() =>
                    document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
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
                href="tel:+254100725081"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>0100 725 081</span>
              </a>
              <a
                href="mailto:diamondshr623@gmail.com"
                className="flex items-center gap-3 text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>diamondshr623@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-secondary-foreground/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Nationwide Delivery in Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-xs text-center md:text-left">
            © {currentYear} Royal Mabati Factory Ltd. All Rights Reserved.
          </p>
          <p className="text-secondary-foreground/50 text-xs text-center md:text-right">
            25-Year Warranty · ISO Certified · Free Nationwide Delivery
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-40 bg-secondary hover:bg-secondary/90 text-secondary-foreground p-3 rounded-full shadow-lg transition-all border border-secondary-foreground/10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
};
