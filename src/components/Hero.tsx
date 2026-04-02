import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroImage from "@/assets/hero-roofing.jpg";
import boxProfileImage from "@/assets/box-profile-roofing.jpg";
import tileProfileImage from "@/assets/tile-profile-roofing.jpg";

const slides = [
  {
    image: heroImage,
    tag: "Kenya's #1 Roofing Supplier",
    title: "Premium Roofing Sheets for Every Project",
    subtitle:
      "From residential homes to commercial buildings — durable, beautiful roofing solutions backed by a 25-year warranty.",
    alt: "Premium roofing sheets Kenya - Royal Mabati Factory residential and commercial roofing solutions",
  },
  {
    image: boxProfileImage,
    tag: "Box Profile & Corrugated",
    title: "Built to Withstand Kenya's Toughest Weather",
    subtitle:
      "Galvanized, color-coated, and aluzinc options. Wide range of gauges and finishes for any application.",
    alt: "Box profile and corrugated iron roofing sheets Kenya - galvanized and color-coated mabati",
  },
  {
    image: tileProfileImage,
    tag: "Tile Profile & Stone-Coated",
    title: "Elegant Roofing That Lasts a Lifetime",
    subtitle:
      "Superior aesthetics with unmatched durability. Transform your home with our premium tile and stone-coated sheets.",
    alt: "Tile profile and stone-coated steel roofing Kenya - elegant premium mabati sheets",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, goToSlide]);

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
              <div className="max-w-xl">
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 transition-all duration-500 delay-200 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {slide.tag}
                </span>
                <h1
                  className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-background mb-5 leading-[1.1] transition-all duration-500 delay-300 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-base md:text-lg text-background/80 mb-8 leading-relaxed max-w-lg transition-all duration-500 delay-[400ms] ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {slide.subtitle}
                </p>
                <div
                  className={`flex flex-wrap gap-3 transition-all duration-500 delay-500 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <Button
                    onClick={() => scrollToSection("products")}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full"
                  >
                    View Products
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button
                    onClick={() => scrollToSection("quote")}
                    variant="outline"
                    className="border-background/40 text-background hover:bg-background/10 px-6 py-3 text-sm font-semibold rounded-full"
                  >
                    Get Free Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-background/10 hover:bg-background/20 backdrop-blur-sm text-background p-3 rounded-full transition-all border border-background/20"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-background/10 hover:bg-background/20 backdrop-blur-sm text-background p-3 rounded-full transition-all border border-background/20"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide Progress */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-background/40 w-4 hover:bg-background/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
