import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export const FloatingWhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "254752543019";
  const message = "Hello! I'm interested in your roofing products and services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-4"
      >
        <MessageCircle className="h-6 w-6" />
        {isHovered && (
          <span className="text-sm font-semibold whitespace-nowrap">Chat on WhatsApp</span>
        )}
      </a>
    </div>
  );
};
