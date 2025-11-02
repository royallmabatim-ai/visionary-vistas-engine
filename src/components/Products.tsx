import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MessageCircle } from "lucide-react";
import boxProfileImage from "@/assets/box-profile-roofing.jpg";
import corrugatedImage from "@/assets/corrugated-roofing.jpg";
import tileProfileImage from "@/assets/tile-profile-roofing.jpg";

type ProductType = "all" | "glossy" | "classic" | "tile";

export const Products = () => {
  const [filter, setFilter] = useState<ProductType>("all");

  const products = [
    {
      type: "glossy" as ProductType,
      title: "Box Profile",
      description: "Glossy finish, high durability, ideal for modern homes and commercial buildings.",
      price: "KES 470/meter",
      badge: "Best Seller",
      badgeVariant: "default" as const,
      image: boxProfileImage
    },
    {
      type: "classic" as ProductType,
      title: "Corrugated",
      description: "Traditional design with high strength and weather resistance for all environments.",
      price: "KES 430/meter",
      badge: "Classic",
      badgeVariant: "secondary" as const,
      image: corrugatedImage
    },
    {
      type: "tile" as ProductType,
      title: "Tile Profile",
      description: "Elegant roofing with a tile-like finish, perfect for upscale residential projects.",
      price: "KES 520/meter",
      badge: "Premium",
      badgeVariant: "default" as const,
      image: tileProfileImage
    }
  ];

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(product => product.type === filter);

  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Product Gallery
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Choose from our premium range of roofing sheets, each designed for durability and style.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-gradient-primary" : ""}
            >
              All Products
            </Button>
            <Button
              variant={filter === "glossy" ? "default" : "outline"}
              onClick={() => setFilter("glossy")}
              className={filter === "glossy" ? "bg-gradient-primary" : ""}
            >
              Glossy
            </Button>
            <Button
              variant={filter === "classic" ? "default" : "outline"}
              onClick={() => setFilter("classic")}
              className={filter === "classic" ? "bg-gradient-primary" : ""}
            >
              Classic
            </Button>
            <Button
              variant={filter === "tile" ? "default" : "outline"}
              onClick={() => setFilter("tile")}
              className={filter === "tile" ? "bg-gradient-primary" : ""}
            >
              Tile
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={product.badgeVariant} className="shadow-lg">
                    {product.badge}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-accent">{product.price}</span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white"
                    asChild
                  >
                    <a 
                      href={`https://wa.me/254755199726?text=I'm interested in ${product.title} roofing sheets.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={scrollToQuote}
                    className="flex-1 border-gold text-foreground hover:bg-gold/10"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Note */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Pricing & Estimates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Prices vary by profile, gauge, finish and quantity. Listed prices are starting rates — 
              final quotes depend on specifications and delivery location.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Box Profile:</span>
                <span className="text-muted-foreground">from KES 470/meter</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Corrugated:</span>
                <span className="text-muted-foreground">from KES 430/meter</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Tile Profile:</span>
                <span className="text-muted-foreground">from KES 520/meter</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Discounts available for bulk and contractor orders. Contact our sales team for tiered pricing.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
