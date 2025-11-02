import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Shield, Truck, Award } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium roofing installation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl">
          <Badge className="mb-6 bg-gold hover:bg-gold text-gold-foreground border-0 shadow-lg text-sm px-4 py-2">
            <Award className="h-4 w-4 mr-2" />
            ISO Certified | 25-Year Warranty
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Durable. Affordable.
            <br />
            <span className="text-gold">Delivered Free.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Premium roofing sheets tailored for Kenya's climate. Experience quality craftsmanship with nationwide delivery and expert support.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Shield className="h-5 w-5 text-gold" />
              <span className="text-primary-foreground font-medium">25-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Truck className="h-5 w-5 text-gold" />
              <span className="text-primary-foreground font-medium">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Award className="h-5 w-5 text-gold" />
              <span className="text-primary-foreground font-medium">ISO Certified</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection("products")}
              className="bg-white text-primary hover:bg-white/90 shadow-xl font-semibold"
            >
              Browse Roofing Sheets
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("quote")}
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
