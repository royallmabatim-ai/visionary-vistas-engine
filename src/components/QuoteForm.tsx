import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { Phone, Mail, MessageCircle, Award } from "lucide-react";

export const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Quote request submitted successfully! We'll contact you shortly.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="quote" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Request a Quote
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a personalized roofing quote within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Prefer to reach out directly? Contact us through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="tel:+254755199726"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-muted-foreground">+254 755 199 726</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/254755199726?text=Hello Royal Mabati, I need a quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all group"
                >
                  <div className="p-2 bg-[#25D366]/10 rounded-lg group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                  </div>
                </a>

                <a 
                  href="mailto:salesroyalmabatii@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-muted-foreground">salesroyalmabatii@gmail.com</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary border-0 shadow-xl overflow-hidden relative">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 translate-x-24" />
              <CardContent className="pt-8 pb-6 text-primary-foreground relative">
                  <h3 className="font-bold text-xl mb-5 flex items-center gap-2">
                  <Award className="h-6 w-6 text-gold" />
                  Why Choose Royal Mabati?
                </h3>
                <ul className="space-y-3 text-sm text-primary-foreground/95">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold mt-0.5">✓</span>
                    <span>25-year warranty on all products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold mt-0.5">✓</span>
                    <span>Free nationwide delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold mt-0.5">✓</span>
                    <span>ISO certified quality standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold mt-0.5">✓</span>
                    <span>Expert consultation and support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold mt-0.5">✓</span>
                    <span>Competitive pricing with bulk discounts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <Card>
            <CardHeader>
              <CardTitle>Request Your Quote</CardTitle>
              <CardDescription>
                Provide your details and we'll prepare a customized quote for your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+254 7XX XXX XXX" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Location *
                  </label>
                  <Input 
                    id="location"
                    name="location"
                    placeholder="e.g., Kilifi, Mombasa, Nairobi" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="product" className="text-sm font-medium">
                    Roofing Type *
                  </label>
                  <Select name="product" required>
                    <SelectTrigger id="product">
                      <SelectValue placeholder="Select roofing type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="box-profile">Box Profile</SelectItem>
                      <SelectItem value="corrugated">Corrugated</SelectItem>
                      <SelectItem value="tile-profile">Tile Profile</SelectItem>
                      <SelectItem value="not-sure">Not Sure / Need Advice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Additional Details
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell us about your project requirements, dimensions, timeline, etc."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="accent"
                  size="lg"
                  className="w-full text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Your Free Quote →"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
