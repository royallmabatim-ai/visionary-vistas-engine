import { Button } from "./ui/button";

const categories = [
  {
    title: "Box Profile",
    subtitle: "Roofing Sheets",
    description: "Our widest range of high-quality box profile sheets that meet different performance requirements. Available in various gauges, colors, and finishes.",
  },
  {
    title: "Corrugated",
    subtitle: "Roofing Sheets",
    description: "Classic corrugated design with excellent strength and weather resistance. Perfect for both residential and commercial applications.",
  },
  {
    title: "Tile Profile",
    subtitle: "Roofing Sheets",
    description: "Elegant tile profile sheets that give your roof a premium appearance. Durable construction with decorative finish.",
  },
  {
    title: "IBR Profile",
    subtitle: "Roofing Sheets",
    description: "Inverted Box Rib profile with superior structural strength. Widely used in industrial and commercial buildings.",
  },
  {
    title: "Roofing",
    subtitle: "Accessories",
    description: "Complete range of roofing accessories including ridge caps, gutters, flashings, screws, sealants, and more.",
  },
  {
    title: "Stone-Coated",
    subtitle: "Steel Roofing",
    description: "Premium stone-coated steel roofing with exceptional aesthetics and a 50-year lifespan. Ultimate luxury roofing solution.",
  },
  {
    title: "Installation",
    subtitle: "Services",
    description: "Professional roofing installation services by certified contractors. Quality workmanship guaranteed with after-sales support.",
  },
  {
    title: "Delivery",
    subtitle: "Nationwide",
    description: "Free nationwide delivery for qualifying orders. Scheduled delivery slots available for your convenience.",
  },
];

export const ProductCategories = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group p-5 bg-muted/30 hover:bg-muted/50 border border-border/50 rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer"
              onClick={() => scrollToSection("products")}
            >
              <h3 className="font-bold text-secondary group-hover:text-primary transition-colors">
                <span className="text-primary">{category.title}</span>
                <br />
                <span className="text-sm font-normal text-muted-foreground">{category.subtitle}</span>
              </h3>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-3">
                {category.description}
              </p>
              <Button 
                variant="link" 
                className="p-0 h-auto mt-2 text-xs text-secondary hover:text-primary"
              >
                Read More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
