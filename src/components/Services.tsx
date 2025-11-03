import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Package, Scissors, Truck, Wrench, Settings, Palette, Award } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Supply & Sales",
      description: "Box Profile, Corrugated and Tile Profile sheets in multiple gauges and colours.",
      features: [
        "Galvanized, Color-coated, Aluzinc materials",
        "Wholesale and retail pricing",
        "Custom color batches on request"
      ]
    },
    {
      icon: <Scissors className="h-8 w-8 text-primary" />,
      title: "Cutting & Custom Lengths",
      description: "Precision cutting to your exact specifications to minimize waste and simplify transport.",
      features: [
        "On-site or shop cutting available",
        "Lengths up to 6 meters",
        "Edge trimming and deburring"
      ]
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Delivery & Logistics",
      description: "Free nationwide delivery for qualifying orders with express options available.",
      features: [
        "Free delivery across Kenya",
        "Scheduled delivery slots",
        "Large contractor order support"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Installation & Contractors",
      description: "Vetted, insured contractor referrals across major counties for quality installations.",
      features: [
        "Certified installer network",
        "Quality control checklists",
        "Post-installation inspections"
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Maintenance & Repairs",
      description: "Preventive maintenance services to extend roof life and prevent costly replacements.",
      features: [
        "Annual inspection packages",
        "Leak diagnosis and patching",
        "Re-coating and rust treatment"
      ]
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Accessories & Colours",
      description: "Complete range of roofing accessories and multiple colour-coated finishes.",
      features: [
        "Fasteners, sealants, ridge caps",
        "Vents and flashings",
        "Matte & glossy colour options"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Comprehensive Roofing Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From supply to installation, we provide complete roofing solutions tailored to Kenya's diverse climate needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/50 bg-gradient-card hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-4 p-4 bg-gradient-primary rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {service.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className="text-accent mt-0.5 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warranty Section */}
        <Card className="mt-16 bg-gradient-primary border-0 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
          <CardHeader className="relative">
            <CardTitle className="text-3xl text-primary-foreground flex items-center gap-3">
              <Award className="h-8 w-8 text-gold" />
              Warranty & Certifications
            </CardTitle>
          </CardHeader>
          <CardContent className="text-primary-foreground/95 relative">
            <p className="mb-6 text-lg leading-relaxed">
              All our roofing sheets are ISO certified and come with a comprehensive 25-year manufacturing warranty. 
              Coatings carry their own guarantees depending on the finish selected.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="font-bold mb-4 text-primary-foreground text-lg">What the warranty covers</h4>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold mt-0.5">✓</span>
                    <span>Manufacturing defects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold mt-0.5">✓</span>
                    <span>Coating failure under normal use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold mt-0.5">✓</span>
                    <span>Replacement guidance for covered failures</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="font-bold mb-4 text-primary-foreground text-lg">Documentation</h4>
                <p className="text-sm leading-relaxed">
                  Warranty certificates provided with each invoice. Contact our sales team for full terms and conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
