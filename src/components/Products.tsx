import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MessageCircle } from "lucide-react";
import boxProfileImage from "@/assets/box-profile-roofing.jpg";
import corrugatedImage from "@/assets/corrugated-roofing.jpg";
import tileProfileImage from "@/assets/tile-profile-roofing.jpg";
import ibrProfileImage from "@/assets/ibr-profile-roofing.jpg";
import stoneCoatedImage from "@/assets/stone-coated-roofing.jpg";
import kliplokImage from "@/assets/kliplok-roofing.jpg";
import longspanImage from "@/assets/longspan-roofing.jpg";

type ProductType = "all" | "glossy" | "classic" | "tile" | "ibr" | "stone" | "kliplok" | "longspan";



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
    },
    {
      type: "ibr" as ProductType,
      title: "IBR Profile",
      description: "Inverted Box Rib design with superior strength, widely used in industrial applications.",
      price: "KES 490/meter",
      badge: "Industrial",
      badgeVariant: "secondary" as const,
      image: ibrProfileImage
    },
    {
      type: "stone" as ProductType,
      title: "Stone-Coated",
      description: "Luxury stone-coated steel with exceptional aesthetics and 50-year lifespan.",
      price: "KES 850/meter",
      badge: "Luxury",
      badgeVariant: "default" as const,
      image: stoneCoatedImage
    },
    {
      type: "kliplok" as ProductType,
      title: "Klip-Lok",
      description: "Concealed fix standing seam system for modern architectural applications.",
      price: "KES 650/meter",
      badge: "Architectural",
      badgeVariant: "secondary" as const,
      image: kliplokImage
    },
    {
      type: "longspan" as ProductType,
      title: "Longspan",
      description: "Wide coverage profile for fast installation, ideal for warehouses and factories.",
      price: "KES 540/meter",
      badge: "Commercial",
      badgeVariant: "secondary" as const,
      image: longspanImage
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
              Box Profile
            </Button>
            <Button
              variant={filter === "classic" ? "default" : "outline"}
              onClick={() => setFilter("classic")}
              className={filter === "classic" ? "bg-gradient-primary" : ""}
            >
              Corrugated
            </Button>
            <Button
              variant={filter === "tile" ? "default" : "outline"}
              onClick={() => setFilter("tile")}
              className={filter === "tile" ? "bg-gradient-primary" : ""}
            >
              Tile
            </Button>
            <Button
              variant={filter === "ibr" ? "default" : "outline"}
              onClick={() => setFilter("ibr")}
              className={filter === "ibr" ? "bg-gradient-primary" : ""}
            >
              IBR
            </Button>
            <Button
              variant={filter === "stone" ? "default" : "outline"}
              onClick={() => setFilter("stone")}
              className={filter === "stone" ? "bg-gradient-primary" : ""}
            >
              Stone-Coated
            </Button>
            <Button
              variant={filter === "kliplok" ? "default" : "outline"}
              onClick={() => setFilter("kliplok")}
              className={filter === "kliplok" ? "bg-gradient-primary" : ""}
            >
              Klip-Lok
            </Button>
            <Button
              variant={filter === "longspan" ? "default" : "outline"}
              onClick={() => setFilter("longspan")}
              className={filter === "longspan" ? "bg-gradient-primary" : ""}
            >
              Longspan
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
        <Card className="mt-12 border-primary/20 shadow-elegant bg-gradient-to-br from-background via-background to-primary/5">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Pricing & Estimates
            </CardTitle>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Transparent pricing for quality roofing solutions. All prices are starting rates for standard specifications.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Price Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                { name: "Box Profile", price: "470", popular: true },
                { name: "Corrugated", price: "430", popular: false },
                { name: "Tile Profile", price: "520", popular: false },
                { name: "IBR Profile", price: "490", popular: false },
                { name: "Stone-Coated", price: "850", popular: false },
                { name: "Klip-Lok", price: "650", popular: false },
                { name: "Longspan", price: "540", popular: false }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className={`relative p-5 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    item.popular 
                      ? 'border-primary bg-primary/5 shadow-md' 
                      : 'border-border/50 bg-card hover:border-primary/50'
                  }`}
                >
                  {item.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-gradient-primary">
                      Popular
                    </Badge>
                  )}
                  <div className="text-center">
                    <h3 className="font-bold text-foreground mb-2">{item.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-xs text-muted-foreground">from</span>
                      <span className="text-2xl font-bold text-accent">KES {item.price}</span>
                      <span className="text-sm text-muted-foreground">/meter</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Important Notes */}
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Pricing Factors:</span> Final quotes depend on profile type, gauge thickness, color finish, quantity ordered, and delivery location.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Bulk Discounts:</span> Special tiered pricing available for contractor orders and large projects. Contact our sales team for volume quotes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Free Consultation:</span> Our experts will help you choose the right roofing solution for your specific needs and budget.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
