import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MessageCircle, ShoppingCart } from "lucide-react";
import boxProfileImage from "@/assets/box-profile-roofing.jpg";
import corrugatedImage from "@/assets/corrugated-roofing.jpg";
import tileProfileImage from "@/assets/tile-profile-roofing.jpg";
import ibrProfileImage from "@/assets/ibr-profile-roofing.jpg";
import stoneCoatedImage from "@/assets/stone-coated-roofing.jpg";
import kliplokImage from "@/assets/kliplok-roofing.jpg";
import longspanImage from "@/assets/longspan-roofing.jpg";

export const Products = () => {
  const products = [
    {
      title: "Box Profile Roofing Sheet",
      description: "Glossy finish, high durability, ideal for modern homes and commercial buildings.",
      originalPrice: "520",
      salePrice: "470",
      unit: "/meter",
      image: boxProfileImage,
      onSale: true
    },
    {
      title: "Corrugated Roofing Sheet",
      description: "Traditional design with high strength and weather resistance.",
      originalPrice: "480",
      salePrice: "430",
      unit: "/meter",
      image: corrugatedImage,
      onSale: true
    },
    {
      title: "Tile Profile Roofing",
      description: "Elegant roofing with tile-like finish for upscale projects.",
      originalPrice: "580",
      salePrice: "520",
      unit: "/meter",
      image: tileProfileImage,
      onSale: true
    },
    {
      title: "IBR Profile Sheet",
      description: "Inverted Box Rib design with superior strength for industrial use.",
      originalPrice: "540",
      salePrice: "490",
      unit: "/meter",
      image: ibrProfileImage,
      onSale: true
    },
    {
      title: "Stone-Coated Steel Roofing",
      description: "Luxury finish with exceptional aesthetics and 50-year lifespan.",
      originalPrice: "950",
      salePrice: "850",
      unit: "/meter",
      image: stoneCoatedImage,
      onSale: true
    },
    {
      title: "Klip-Lok Standing Seam",
      description: "Concealed fix system for modern architectural applications.",
      originalPrice: "720",
      salePrice: "650",
      unit: "/meter",
      image: kliplokImage,
      onSale: true
    },
    {
      title: "Longspan Roofing Profile",
      description: "Wide coverage for fast installation, ideal for warehouses.",
      originalPrice: "600",
      salePrice: "540",
      unit: "/meter",
      image: longspanImage,
      onSale: true
    }
  ];

  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Explore Roofing Solutions, Profiles and Accessories
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            Royal Mabati product range includes roofing sheet systems for residential and commercial applications. 
            Our systems are complemented with a strong range of accessories and finishing products.
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="h-px bg-border flex-1 max-w-xs" />
          <div className="flex gap-1">
            <div className="w-2 h-6 bg-secondary rounded-sm" />
            <div className="w-2 h-6 bg-primary rounded-sm" />
            <div className="w-2 h-6 bg-secondary rounded-sm" />
          </div>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 bg-card"
            >
              {/* Image with Sale Badge */}
              <div className="relative overflow-hidden aspect-square">
                {product.onSale && (
                  <Badge className="absolute top-3 right-3 z-10 bg-success hover:bg-success text-success-foreground font-semibold text-xs px-2 py-1">
                    Sale!
                  </Badge>
                )}
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <CardContent className="p-4">
                <h3 className="font-semibold text-secondary hover:text-primary transition-colors cursor-pointer mb-2 line-clamp-2">
                  {product.title}
                </h3>
                
                {/* Pricing */}
                <div className="flex items-baseline gap-2 mb-4">
                  {product.onSale && (
                    <span className="text-muted-foreground line-through text-sm">
                      KSh {product.originalPrice}
                    </span>
                  )}
                  <span className="text-primary font-bold text-lg">
                    KSh {product.salePrice}
                    <span className="text-xs font-normal text-muted-foreground">{product.unit}</span>
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    size="sm"
                    className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-background text-xs"
                    asChild
                  >
                    <a 
                      href={`https://wa.me/254755199726?text=I'm interested in ${product.title}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-3 w-3 mr-1" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    onClick={scrollToQuote}
                    className="flex-1 text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Royal Mabati is a Market Leader in Roofing Solutions in Kenya
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We are the leading supplier of a wide range of roofing systems and products. Our roofing sheets 
            and accessories are backed by maximum guarantee, fair prices, and unmatched professionalism. 
            Some of our notable roofing products include:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">1.</span>
                <span><strong>Box Profile Sheets</strong> – Available in various gauges and colors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">2.</span>
                <span><strong>Corrugated Sheets</strong> – Classic design with excellent durability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">3.</span>
                <span><strong>Tile Profile</strong> – Elegant finish for modern homes</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">4.</span>
                <span><strong>IBR Profile</strong> – Industrial strength for commercial use</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">5.</span>
                <span><strong>Stone-Coated</strong> – Premium aesthetics with 50-year warranty</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">6.</span>
                <span><strong>Longspan</strong> – Wide coverage for warehouses and factories</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
