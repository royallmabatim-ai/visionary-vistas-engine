import { Home, Building2, Layers, Wrench, Gem, Package, Truck, Scissors } from "lucide-react";

const categories = [
  { icon: <Layers className="h-5 w-5" />, title: "Box Profile", subtitle: "Sheets" },
  { icon: <Home className="h-5 w-5" />, title: "Corrugated", subtitle: "Sheets" },
  { icon: <Gem className="h-5 w-5" />, title: "Tile Profile", subtitle: "Sheets" },
  { icon: <Building2 className="h-5 w-5" />, title: "IBR Profile", subtitle: "Sheets" },
  { icon: <Package className="h-5 w-5" />, title: "Roofing", subtitle: "Accessories" },
  { icon: <Gem className="h-5 w-5" />, title: "Stone-Coated", subtitle: "Steel" },
  { icon: <Wrench className="h-5 w-5" />, title: "Installation", subtitle: "Services" },
  { icon: <Truck className="h-5 w-5" />, title: "Free Delivery", subtitle: "Nationwide" },
];

export const ProductCategories = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-6 px-4 bg-muted/40 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => scrollToSection("products")}
              className="group flex flex-col items-center gap-2 py-4 px-2 rounded-xl hover:bg-background hover:shadow-md transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {cat.icon}
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-foreground leading-tight">{cat.title}</p>
                <p className="text-[10px] text-muted-foreground">{cat.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
