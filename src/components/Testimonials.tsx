import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Mwangi",
      location: "Mombasa",
      rating: 5,
      text: "The Box Profile sheets were perfect for our coastal home. Delivery was fast and free! The quality exceeded our expectations."
    },
    {
      name: "David Otieno",
      location: "Nairobi",
      rating: 5,
      text: "Great quality and pricing. The team was responsive and helped us choose the right profile for our commercial building."
    },
    {
      name: "Fatuma Yusuf",
      location: "Kilifi",
      rating: 5,
      text: "I highly recommend Royal Mabati. The tile profile looks amazing on our new house! Professional service from start to finish."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from homeowners and contractors across Kenya who trust Royal Mabati for their roofing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/50 bg-gradient-card hover:-translate-y-2"
            >
              <CardContent className="pt-8 pb-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed mb-6 text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
