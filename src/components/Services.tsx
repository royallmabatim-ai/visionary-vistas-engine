import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Package, Scissors, Truck, Wrench, Settings, Palette, Award, Shield } from "lucide-react";

const services = [
  {
    icon: <Package className="h-5 w-5" />,
    title: "Supply & Sales",
    description: "Box Profile, Corrugated and Tile Profile sheets in multiple gauges and colours.",
    features: ["Galvanized, Color-coated, Aluzinc", "Wholesale and retail pricing", "Custom color batches"],
  },
  {
    icon: <Scissors className="h-5 w-5" />,
    title: "Custom Cutting",
    description: "Precision cutting to your exact specifications to minimize waste.",
    features: ["On-site or shop cutting", "Lengths up to 6 meters", "Edge trimming & deburring"],
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Free Delivery",
    description: "Nationwide delivery for qualifying orders with express options.",
    features: ["Free delivery across Kenya", "Scheduled delivery slots", "Large contractor support"],
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Installation",
    description: "Vetted, insured contractor referrals across major counties.",
    features: ["Certified installer network", "Quality control checklists", "Post-install inspections"],
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Maintenance",
    description: "Preventive maintenance to extend roof life and avoid replacements.",
    features: ["Annual inspections", "Leak diagnosis & repair", "Re-coating & rust treatment"],
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Accessories",
    description: "Complete range of roofing accessories and multiple finishes.",
    features: ["Fasteners, sealants, ridge caps", "Vents and flashings", "Matte & glossy options"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            End-to-End <span className="text-primary">Roofing Services</span>
          </h2>
          <p className="text-muted-foreground">
            From supply to installation — complete roofing solutions tailored to Kenya's diverse climate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border border-border/50 hover:border-primary/30 rounded-2xl transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="pb-3">
                <div className="mb-3 p-2.5 bg-primary/8 rounded-xl w-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-base text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-xs">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-primary mt-px text-[10px]">●</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warranty Banner */}
        <div className="mt-14 rounded-2xl overflow-hidden bg-secondary text-secondary-foreground">
          <div className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-10">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-primary/20 rounded-2xl flex-shrink-0">
                <Award className="h-10 w-10 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">25-Year Warranty</h3>
                <p className="text-secondary-foreground/70 text-sm">ISO Certified Quality Assurance</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-secondary-foreground/20" />
            <div className="flex-1">
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                All our roofing sheets are ISO certified and come with a comprehensive warranty.
                Coatings carry their own guarantees depending on the finish selected.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Shield className="h-12 w-12 text-accent/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
