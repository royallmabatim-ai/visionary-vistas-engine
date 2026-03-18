import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedName = encodeURIComponent(formData.name.trim());
    const encodedEmail = encodeURIComponent(formData.email.trim());
    const encodedPhone = encodeURIComponent(formData.phone.trim());
    const encodedSubject = encodeURIComponent(formData.subject.trim());
    const encodedMessage = encodeURIComponent(formData.message.trim());

    const whatsappMessage = `Name: ${encodedName}%0AEmail: ${encodedEmail}%0APhone: ${encodedPhone}%0ASubject: ${encodedSubject}%0AMessage: ${encodedMessage}`;
    window.open(`https://wa.me/254100725081?text=${whatsappMessage}`, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your inquiry via WhatsApp for faster response.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const locations = [
    { name: "NAIROBI", address: "Industrial Area, Nairobi", phone: "+254 752 543 019" },
    { name: "MOMBASA", address: "Changamwe, Mombasa", phone: "+254 752 543 019" },
    { name: "KISUMU", address: "Kisumu Town, Nyanza", phone: "+254 752 543 019" },
  ];

  return (
    <section id="quote" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="section-subtitle">Contact</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get a <span className="text-primary">Free Quote</span> Today
          </h2>
          <p className="text-muted-foreground">
            Fill in the details below and we'll respond within 24 hours. For
            urgent inquiries, call or WhatsApp us directly.
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-3 border-0 shadow-lg rounded-2xl">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="text-xs font-medium text-foreground mb-1.5 block">
=======
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
                  href="tel:+254100725081"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-muted-foreground">0100 725 081</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/254100725081?text=Hello Royal Mabati, I need a quote."
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
>>>>>>> 2fce1df (changed phone number)
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      maxLength={100}
                      placeholder="John Doe"
                      className="rounded-xl h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs font-medium text-foreground mb-1.5 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      maxLength={255}
                      placeholder="john@example.com"
                      className="rounded-xl h-11"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="phone" className="text-xs font-medium text-foreground mb-1.5 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      maxLength={20}
                      placeholder="+254 7XX XXX XXX"
                      className="rounded-xl h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-xs font-medium text-foreground mb-1.5 block">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      maxLength={200}
                      placeholder="e.g. Box Profile Quote"
                      className="rounded-xl h-11"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-xs font-medium text-foreground mb-1.5 block">
                    Message (optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    maxLength={1000}
                    placeholder="Tell us about your project requirements..."
                    className="rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 text-sm font-semibold"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Sidebar Info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Locations */}
            {locations.map((location, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-muted/50 border border-border/50 hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-secondary text-sm mb-3">
                  Royal Mabati — {location.name}
                </h4>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="hover:text-primary transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Contact Details */}
            <div className="p-5 rounded-2xl bg-secondary text-secondary-foreground">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  <a
                    href="mailto:diamondshr623@gmail.com"
                    className="text-sm hover:text-accent transition-colors"
                  >
                    diamondshr623@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-secondary-foreground/80">
                    Mon – Sat: 8:00 AM – 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
