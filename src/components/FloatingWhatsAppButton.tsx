import { MessageCircle } from "lucide-react";

export const FloatingWhatsAppButton = () => {
  const phoneNumber = "254100725081";
  const message = "Hello! I'm interested in your roofing products and services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      
      <div className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 p-4 group-hover:pr-5">
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 text-sm font-semibold whitespace-nowrap">
          Chat with us
        </span>
      </div>
    </a>
  );
};
