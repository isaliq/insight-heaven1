import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER } from '../constants/contact';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end group">
      {/* Optional contextual tooltip / prompt */}
      {showTooltip && (
        <div className="mb-2 hidden sm:flex items-center space-x-2 bg-cream text-charcoal px-3.5 py-2 rounded-none shadow-2xl border border-gold-hairline text-xs animate-fade-in relative max-w-xs">
          <div className="flex flex-col">
            <span className="font-semibold text-mountain-blue text-[11px] tracking-wide">
              Planning a Kashmir trip?
            </span>
            <span className="text-[10px] text-charcoal-muted">
              Talk directly with a local specialist
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-charcoal-subtle hover:text-charcoal p-0.5 ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-cream border-b border-r border-gold-hairline transform rotate-45" />
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={getWhatsAppLink("Hi Insight Heaven! I'm planning a trip to Kashmir and would love personalized recommendations.")}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-floating-cta"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 group-hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
        aria-label="Chat with Insight Heaven on WhatsApp"
        title="Chat on WhatsApp: +91 70519 33349"
      >
        {/* Subtle pulsating outer ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-75" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
