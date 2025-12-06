import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate and encode for WhatsApp
    const encodedName = encodeURIComponent(formData.name.trim());
    const encodedEmail = encodeURIComponent(formData.email.trim());
    const encodedPhone = encodeURIComponent(formData.phone.trim());
    const encodedSubject = encodeURIComponent(formData.subject.trim());
    const encodedMessage = encodeURIComponent(formData.message.trim());
    
    const whatsappMessage = `Name: ${encodedName}%0AEmail: ${encodedEmail}%0APhone: ${encodedPhone}%0ASubject: ${encodedSubject}%0AMessage: ${encodedMessage}`;
    window.open(`https://wa.me/254755199726?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your inquiry via WhatsApp for faster response.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const locations = [
    {
      name: "ROYAL MABATI - NAIROBI",
      address: "Industrial Area, Nairobi",
      phone: "+254 755 199 726"
    },
    {
      name: "ROYAL MABATI - MOMBASA",
      address: "Changamwe, Mombasa",
      phone: "+254 755 199 726"
    },
    {
      name: "ROYAL MABATI - KISUMU",
      address: "Kisumu Town, Nyanza",
      phone: "+254 755 199 726"
    }
  ];

  return (
    <section id="quote" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill in the required details. We will respond ASAP. If you have a long list of materials to order, feel free to share it.
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border border-border/50 shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    maxLength={100}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Your email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    maxLength={255}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    maxLength={20}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    maxLength={200}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Your message (optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    maxLength={1000}
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-6">VISIT OUR LOCATIONS</h3>
            <p className="text-muted-foreground mb-8">
              Get in touch with us, we are here to assist you from service dispensation to ordering of our products
            </p>

            <div className="space-y-6">
              {locations.map((location, index) => (
                <Card key={index} className="border border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-secondary mb-3">{location.name}</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a 
                          href={`tel:${location.phone.replace(/\s/g, '')}`}
                          className="hover:text-primary transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:salesroyalmabatii@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  salesroyalmabatii@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};