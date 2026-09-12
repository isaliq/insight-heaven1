import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL, getWhatsAppLink } from '../constants/contact';

export default function CTASection({ onOpenEnquiry }) {
  return (
    <section className="relative py-20 sm:py-28 bg-mountain-blue text-cream overflow-hidden">
      {/* Background with texture & subtle Kashmiri landscape */}
      <div className="absolute inset-0 opacity-15 mix-blend-luminosity">
        <img
          src="/images/destinations/gulmarg-apharwat.jpg"
          alt="Gulmarg Apharwat snow mountains"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-mountain-blue via-mountain-blue/90 to-mountain-blue-deep/95" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 mb-6 border border-gold-hairline/50 bg-mountain-blue-dark/50 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-saffron" />
          <span className="eyebrow-label text-gold-hairline text-[11px]">
            Your Kashmir Dream Awaits
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cream mb-6 leading-tight">
          Ready to Walk Through Paradise? <br />
          <span className="italic font-normal text-saffron">Call or WhatsApp Our Srinagar Team</span>
        </h2>

        <p className="text-cream/80 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Whether you have specific travel dates in mind or simply want advice on the best season to experience Kashmir, our senior valley concierges are ready to assist you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Clickable tel link */}
          <a
            href={PHONE_TEL}
            id="cta-banner-phone"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-saffron text-white text-xs uppercase tracking-widest font-semibold hover:bg-saffron-dark transition-all duration-300 shadow-2xl hover:shadow-[0_0_25px_rgba(217,142,58,0.5)] border border-gold-hairline/40 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call {PHONE_NUMBER}</span>
          </a>

          {/* Clickable WhatsApp link */}
          <a
            href={getWhatsAppLink('Hi Insight Heaven! I would love to discuss planning a custom Kashmir trip.')}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-banner-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#20bd5a] transition-all duration-300 shadow-2xl border border-white/20 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Us Instantly</span>
          </a>

          <a
            href={getWhatsAppLink('Hi Insight Heavens! I would like to request a tailored Kashmir itinerary and pricing quote.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-md text-cream text-xs uppercase tracking-widest font-semibold border border-gold-hairline/60 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-saffron" />
            <span>Request Quote on WhatsApp</span>
          </a>
        </div>

        {/* Small reassurance note */}
        <p className="mt-8 text-xs text-cream/60">
          Instant responses during valley daytime hours (8:00 AM – 10:00 PM IST)
        </p>
      </div>
    </section>
  );
}
