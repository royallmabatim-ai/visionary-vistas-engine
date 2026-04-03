import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick, trackProductClick } from "@/lib/tracking";
import boxProfileImage from "@/assets/box-profile-roofing.jpg";
import corrugatedImage from "@/assets/corrugated-roofing.jpg";
import tileProfileImage from "@/assets/tile-profile-roofing.jpg";
import ibrProfileImage from "@/assets/ibr-profile-roofing.jpg";
import stoneCoatedImage from "@/assets/stone-coated-roofing.jpg";
import kliplokImage from "@/assets/kliplok-roofing.jpg";
import longspanImage from "@/assets/longspan-roofing.jpg";

const products = [
  {
    title: "Box Profile Roofing Sheet",
    description: "Glossy finish, high durability for modern homes and commercial buildings.",
    originalPrice: "520",
    salePrice: "470",
    unit: "/meter",
    image: boxProfileImage,
    alt: "Box profile roofing sheet Kenya - premium galvanized mabati by Royal Mabati Factory",
    onSale: true,
  },
  {
    title: "Corrugated Roofing Sheet",
    description: "Traditional design with excellent strength and weather resistance.",
    originalPrice: "480",
    salePrice: "430",
    unit: "/meter",
    image: corrugatedImage,
    alt: "Corrugated iron roofing sheet Kenya - affordable mabati sheets with free delivery",
    onSale: true,
  },
  {
    title: "Tile Profile Roofing",
    description: "Elegant tile-like finish for upscale residential projects.",
    originalPrice: "580",
    salePrice: "520",
    unit: "/meter",
    image: tileProfileImage,
    alt: "Tile profile roofing sheet Kenya - elegant residential mabati by Royal Mabati",
    onSale: true,
  },
  {
    title: "IBR Profile Sheet",
    description: "Inverted Box Rib design with superior industrial strength.",
    originalPrice: "540",
    salePrice: "490",
    unit: "/meter",
    image: ibrProfileImage,
    alt: "IBR profile roofing sheet Kenya - industrial strength inverted box rib mabati",
    onSale: true,
  },
  {
    title: "Stone-Coated Steel Roofing",
    description: "Luxury finish with exceptional aesthetics and 50-year lifespan.",
    originalPrice: "950",
    salePrice: "850",
    unit: "/meter",
    image: stoneCoatedImage,
    alt: "Stone-coated steel roofing Kenya - luxury roofing with 50-year warranty",
    onSale: true,
  },
  {
    title: "Klip-Lok Standing Seam",
    description: "Concealed fix system for modern architectural applications.",
    originalPrice: "720",
    salePrice: "650",
    unit: "/meter",
    image: kliplokImage,
    alt: "Klip-Lok standing seam roofing Kenya - modern concealed fix roofing system",
    onSale: true,
  },
  {
    title: "Longspan Roofing Profile",
    description: "Wide coverage for fast installation, ideal for warehouses.",
    originalPrice: "600",
    salePrice: "540",
    unit: "/meter",
    image: longspanImage,
    alt: "Longspan roofing profile Kenya - wide coverage warehouse roofing sheets",
    onSale: true,
  },
];

export const Products = () => {
  const scrollToQuote = () => {
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="section-subtitle">Our Products</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Roofing Sheets, Profiles &{" "}
            <span className="text-primary">Accessories</span>
          </h2>
          <p className="text-muted-foreground">
            Premium roofing systems for residential and commercial applications,
            complemented by a complete range of accessories.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl bg-card"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                {product.onSale && (
                  <Badge className="absolute top-3 left-3 z-10 bg-success hover:bg-success text-success-foreground font-semibold text-[10px] px-2.5 py-1 rounded-full">
                    SALE
                  </Badge>
                )}
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 mb-4">
                  {product.onSale && (
                    <span className="text-muted-foreground/60 line-through text-xs">
                      KSh {product.originalPrice}
                    </span>
                  )}
                  <span className="text-primary font-bold text-lg">
                    KSh {product.salePrice}
                    <span className="text-[10px] font-normal text-muted-foreground">
                      {product.unit}
                    </span>
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#25D366] hover:bg-[#1da851] text-background text-xs rounded-full h-9"
                    asChild
                  >
                    <a
                      href={`https://wa.me/254762235510?text=I'm interested in ${product.title}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick(`product_${product.title}`)}
                    >
                      <MessageCircle className="h-3.5 w-3.5 mr-1" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => { trackProductClick(product.title, "get_quote"); scrollToQuote(); }}
                    className="flex-1 text-xs rounded-full h-9 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "25+", label: "Year Warranty" },
            { number: "10K+", label: "Projects Done" },
            { number: "47", label: "Counties Served" },
            { number: "100%", label: "Quality Certified" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-6 px-4 rounded-2xl bg-background border border-border/50 shadow-sm"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</p>
              <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
