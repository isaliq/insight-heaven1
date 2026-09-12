import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, BRAND } from '../constants/contact';

export default function InstagramButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end group">
      {/* Optional contextual tooltip / prompt */}
      {showTooltip && (
        <div className="mb-2 hidden sm:flex items-center space-x-2 bg-cream text-charcoal px-3.5 py-2 rounded-none shadow-2xl border border-gold-hairline text-xs animate-fade-in relative max-w-xs">
          <div className="flex flex-col">
            <span className="font-semibold text-mountain-blue text-[11px] tracking-wide flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-[#E1306C]" />
              <span>{INSTAGRAM_HANDLE}</span>
            </span>
            <span className="text-[10px] text-charcoal-muted">
              {BRAND.tagline} • Stories & Reels
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

      {/* Floating Instagram Button */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        id="instagram-floating-cta"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/90 text-white bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] hover:shadow-[0_0_25px_rgba(225,48,108,0.6)]"
        aria-label="Follow Insight Heavens on Instagram"
        title="Follow on Instagram: @insight.heavens"
      >
        <InstagramIcon className="w-6 h-6 stroke-[2]" />
      </a>
    </div>
  );
}
