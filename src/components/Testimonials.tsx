import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "What a wonderful team! My house now looks amazing with their quality roofing work. Highly recommended for anyone looking for reliable roofing solutions.",
    author: "Mr. James Kimani",
    location: "Nairobi"
  },
  {
    quote: "Your work is exemplary. I cannot hesitate to recommend you guys. The roofing sheets are top quality and the installation was professional.",
    author: "Mrs. Grace Ochieng",
    location: "Kisumu"
  },
  {
    quote: "Excellent service from start to finish. The team was professional, punctual, and the quality of the roofing exceeded my expectations.",
    author: "Mr. Peter Mwangi",
    location: "Mombasa"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of homeowners and contractors across Kenya
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};