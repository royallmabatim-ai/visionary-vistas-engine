import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "What a wonderful team! My house now looks amazing with their quality roofing work. Highly recommended for anyone looking for reliable roofing solutions.",
    author: "Mr. James Kimani",
    location: "Nairobi",
    rating: 5,
  },
  {
    quote:
      "Your work is exemplary. I cannot hesitate to recommend you guys. The roofing sheets are top quality and the installation was professional.",
    author: "Mrs. Grace Ochieng",
    location: "Kisumu",
    rating: 5,
  },
  {
    quote:
      "Excellent service from start to finish. The team was professional, punctual, and the quality of the roofing exceeded my expectations.",
    author: "Mr. Peter Mwangi",
    location: "Mombasa",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Thousands</span> Across Kenya
          </h2>
          <p className="text-muted-foreground">
            Hear from homeowners and contractors who chose Royal Mabati
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-lg transition-all duration-500 rounded-2xl bg-background"
            >
              <CardContent className="p-7">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground/80 text-sm mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
