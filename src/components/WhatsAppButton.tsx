import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const whatsappNumber = "573174307397";
  const whatsappMessage = "Hola, me gustaría obtener más información sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Pulsing ring effect */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
        
        {/* Main button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110">
          <MessageCircle className="h-7 w-7 text-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <div className="bg-card border-2 border-green-500/50 px-4 py-2 rounded-lg shadow-elegant">
            <span className="text-sm font-medium">¿Necesitas ayuda?</span>
          </div>
        </div>
      </div>
    </a>
  );
};
