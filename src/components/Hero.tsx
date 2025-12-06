import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-roofing.jpg";
import boxProfileImage from "@/assets/box-profile-roofing.jpg";
import tileProfileImage from "@/assets/tile-profile-roofing.jpg";

const slides = [
  {
    image: heroImage,
    title: "Best Roofing Sheets Supplier in Kenya",
    subtitle: "Royal Mabati Factory Ltd is a One Stop shop for Roofing Sheets and Accessories Supplier in Kenya"
  },
  {
    image: boxProfileImage,
    title: "Premium Box Profile & Corrugated Sheets",
    subtitle: "Wide range of roofing profiles including galvanized, color-coated, and aluzinc options across Kenya"
  },
  {
    image: tileProfileImage,
    title: "Quality Tile Profile Roofing",
    subtitle: "Elegant roofing solutions with superior durability and weather resistance"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-background/90 mb-6 leading-relaxed">
                  {slide.subtitle}
                </p>
                <Button 
                  onClick={() => scrollToSection("products")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                >
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-background p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-background p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-background/50 hover:bg-background/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
