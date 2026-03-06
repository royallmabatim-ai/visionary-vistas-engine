import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import boxProfileImage from "@/assets/box-profile-roofing.jpg";
import corrugatedImage from "@/assets/corrugated-roofing.jpg";
import tileProfileImage from "@/assets/tile-profile-roofing.jpg";

const categories = [
  {
    title: "Residential Roofing",
    image: tileProfileImage,
    description:
      "Transform your home with premium tile profile, stone-coated, and box profile sheets in a variety of colors and finishes designed for lasting beauty.",
    link: "products",
  },
  {
    title: "Commercial Roofing",
    image: boxProfileImage,
    description:
      "Durable longspan and IBR profiles engineered for warehouses, factories, and office buildings. Built to perform under Kenya's demanding conditions.",
    link: "products",
  },
  {
    title: "Roofing Accessories",
    image: corrugatedImage,
    description:
      "Complete your project with our full range of ridge caps, gutters, flashings, fasteners, sealants, and finishing products — all in one place.",
    link: "products",
  },
];

export const IntroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Main Introduction */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-subtitle">About Us</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-5">
            Kenya's Most Trusted Name in{" "}
            <span className="text-primary">Roofing Solutions</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Royal Mabati Factory Ltd produces and supplies premium roofing
            sheets and building materials across Kenya. We are market leaders
            delivering innovative, effective, and sustainable roofing systems
            for modern architecture.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 rounded-2xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-background">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {category.description}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary font-semibold group-hover:gap-2 transition-all"
                  onClick={() => scrollToSection(category.link)}
                >
                  Explore Products
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
