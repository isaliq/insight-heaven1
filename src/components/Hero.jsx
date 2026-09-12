import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Phone, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL, BRAND, getWhatsAppLink } from '../constants/contact';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-mountain-blue-deep pt-20">
      {/* Background Image with Cinematic Ken Burns Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/destinations/srinagar-shikara.jpg"
          alt="Tranquil Shikara boat on Dal Lake Srinagar with mist and Himalayan mountains"
          className="w-full h-full object-cover object-center animate-ken-burns scale-105"
        />
        {/* Soft Multi-stop Luxury Dark Gradient Overlay for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-blue-deep via-mountain-blue-deep/60 to-black/50" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
        {/* Luxury Eyebrow Label */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 mb-6 border border-gold-hairline/60 bg-mountain-blue/40 backdrop-blur-md rounded-none shadow-lg animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-saffron" />
          <span className="eyebrow-label text-gold-hairline text-[11px] sm:text-xs">
            Kashmir, India • Local Boutique Specialist
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-bold tracking-tight leading-[1.08] drop-shadow-md mb-6">
          Discover Paradise <br />
          <span className="italic font-normal text-saffron">on Earth.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-cream/85 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow">
          Handcrafted private journeys across Srinagar’s timeless cedar houseboats, the powder snow of Gulmarg, and the pine glades of Pahalgam. Guided by native Kashmiri specialists.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
          <a
            href={getWhatsAppLink("Hi Insight Heavens! I would like to plan a custom trip to Kashmir. Please share recommendations and pricing quote.")}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-plan-trip-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#20bd5a] transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] border border-white/30 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Plan Trip on WhatsApp</span>
          </a>

          <Link
            to="/packages"
            id="hero-view-packages-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-mountain-blue/80 backdrop-blur-md text-cream text-xs uppercase tracking-widest font-semibold border border-gold-hairline/70 hover:bg-mountain-blue hover:border-gold-hairline transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>View Packages</span>
          </Link>

          <a
            href={PHONE_TEL}
            id="hero-phone-direct-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 bg-transparent text-cream/90 hover:text-saffron text-xs uppercase tracking-widest font-semibold transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5 text-saffron fill-current" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>

        {/* Subtle trust badge below hero */}
        <div className="pt-4 flex items-center justify-center space-x-6 text-xs text-cream/70">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-saffron" />
            <span>100% Tailored Private Itineraries</span>
          </div>
          <span className="text-gold-hairline/40">•</span>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>On-Ground Srinagar Concierge</span>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  );
}
