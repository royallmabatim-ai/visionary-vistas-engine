import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Package, Scissors, Truck, Wrench, Settings, Palette, Shield, Award } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Supply & Sales",
      description: "Box Profile, Corrugated and Tile Profile sheets in multiple gauges and colours.",
      features: [
        "Galvanized, Color-coated, Aluzinc",
        "Wholesale and retail pricing",
        "Custom color batches on request"
      ]
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Cutting & Custom Lengths",
      description: "Precision cutting to your exact specifications to minimize waste.",
      features: [
        "On-site or shop cutting",
        "Lengths up to 6 meters",
        "Edge trimming and deburring"
      ]
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Delivery & Logistics",
      description: "Free nationwide delivery for qualifying orders with express options.",
      features: [
        "Free delivery across Kenya",
        "Scheduled delivery slots",
        "Large contractor support"
      ]
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Installation & Contractors",
      description: "Vetted, insured contractor referrals across major counties.",
      features: [
        "Certified installer network",
        "Quality control checklists",
        "Post-installation inspections"
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Maintenance & Repairs",
      description: "Preventive maintenance to extend roof life and prevent replacements.",
      features: [
        "Annual inspection packages",
        "Leak diagnosis and patching",
        "Re-coating and rust treatment"
      ]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Accessories & Colours",
      description: "Complete range of roofing accessories and multiple finishes.",
      features: [
        "Fasteners, sealants, ridge caps",
        "Vents and flashings",
        "Matte & glossy options"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Comprehensive Roofing Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From supply to installation, we provide complete roofing solutions tailored to Kenya's diverse climate needs.
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="mb-3 p-3 bg-primary/10 rounded-lg w-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warranty Banner */}
        <div className="mt-12 bg-primary rounded-lg p-8 text-primary-foreground">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-background/10 rounded-full">
                <Award className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">25-Year Warranty</h3>
                <p className="text-primary-foreground/80">ISO Certified Quality</p>
              </div>
            </div>
            <div className="flex-1 md:text-right">
              <p className="text-primary-foreground/90 leading-relaxed">
                All our roofing sheets are ISO certified and come with a comprehensive warranty. 
                Coatings carry their own guarantees depending on the finish selected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
