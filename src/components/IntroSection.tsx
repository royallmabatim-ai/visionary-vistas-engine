import { Card } from "./ui/card";
import { Button } from "./ui/button";
import boxProfileImage from "@/assets/box-profile-roofing.jpg";
import corrugatedImage from "@/assets/corrugated-roofing.jpg";
import tileProfileImage from "@/assets/tile-profile-roofing.jpg";

const categories = [
  {
    title: "Residential Roofing",
    image: tileProfileImage,
    description: "Royal Mabati Factory has transformed residential construction in Kenya with premium roofing solutions. Our high-end decorative roofing includes tile profile, stone-coated, and box profile sheets in various colors and finishes.",
    link: "products"
  },
  {
    title: "Commercial Roofing", 
    image: boxProfileImage,
    description: "Our roofing products are integral to Kenya's commercial sector. We supply durable, sustainable products like longspan and IBR profiles for warehouses, factories, and office buildings with guaranteed quality.",
    link: "products"
  },
  {
    title: "Roofing Materials",
    image: corrugatedImage,
    description: "Royal Mabati is a one-stop shop for roofing sheets and accessories. Our range includes box profile, corrugated, tile profile, IBR, stone-coated, klip-lok, and longspan sheets with all necessary accessories.",
    link: "products"
  }
];

export const IntroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Main Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Leading Supplier of Roofing Sheets in Kenya: A Trusted Brand
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Royal Mabati Factory Ltd produces and supplies premium roofing sheets and building materials in Kenya. 
            We are a market leader in roofing solutions that enhance well-being in living spaces through innovative, 
            effective, and sustainable systems. Our products are integral, functional elements that support modern, 
            sustainable architecture and design.
          </p>
        </div>

        {/* Decorative Divider - Like the reference site */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="h-px bg-border flex-1 max-w-xs" />
          <div className="flex gap-1">
            <div className="w-2 h-6 bg-secondary rounded-sm" />
            <div className="w-2 h-6 bg-primary rounded-sm" />
            <div className="w-2 h-6 bg-secondary rounded-sm" />
          </div>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-background">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-secondary font-semibold hover:text-primary"
                  onClick={() => scrollToSection(category.link)}
                >
                  Read More →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
