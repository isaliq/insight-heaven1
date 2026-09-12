import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin, MessageCircle, Heart, ArrowUp, ShieldCheck } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { BRAND, PHONE_NUMBER, PHONE_TEL, EMAIL_ADDRESS, EMAIL_MAILTO, getWhatsAppLink, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants/contact';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-mountain-blue-deep text-cream/90 pt-20 pb-12 border-t border-gold-hairline/30 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-mountain-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-cream/10">
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-sm bg-mountain-blue flex items-center justify-center border border-gold-hairline text-saffron">
                <Compass className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-cream tracking-tight block">
                  Insight Heavens
                </span>
                <span className="text-[10px] tracking-eyebrow uppercase text-gold-hairline block font-medium">
                  {BRAND.tagline}
                </span>
              </div>
            </Link>

            <p className="text-cream/70 text-sm leading-relaxed max-w-md font-light">
              Insight Heavens is a native Kashmiri travel specialist rooted in the heart of Srinagar. 
              We curate slow, soulful, and bespoke Himalayan journeys that celebrate ancient cedar waters, 
              alpine powder peaks, pastoral pine valleys, and heartfelt mountain hospitality.
            </p>

            <div className="inline-flex items-center space-x-2 text-[11px] text-emerald-400 bg-mountain-blue/40 px-3 py-1.5 border border-gold-hairline/30">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BRAND.governmentRegistration}</span>
            </div>

            <div className="pt-1 flex items-center space-x-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-none border border-gold-hairline/40 flex items-center justify-center text-cream/80 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300"
                aria-label="Instagram"
                title="Follow @insight.heavens"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-none border border-gold-hairline/40 flex items-center justify-center text-cream/80 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={PHONE_TEL}
                className="w-9 h-9 rounded-none border border-gold-hairline/40 flex items-center justify-center text-cream/80 hover:text-saffron hover:border-saffron transition-all duration-300"
                aria-label="Call Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={EMAIL_MAILTO}
                className="w-9 h-9 rounded-none border border-gold-hairline/40 flex items-center justify-center text-cream/80 hover:text-saffron hover:border-saffron transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-eyebrow text-gold-hairline">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-cream/70 hover:text-saffron transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-cream/70 hover:text-saffron transition-colors duration-200">
                  Curated Packages
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-cream/70 hover:text-saffron transition-colors duration-200">
                  Kashmir Destinations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/70 hover:text-saffron transition-colors duration-200">
                  Our Story & Roots
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/70 hover:text-saffron transition-colors duration-200">
                  Contact & Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Signature Journeys */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-eyebrow text-gold-hairline">
              Signature Tours
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/packages/grand-kashmir-odyssey" className="text-cream/70 hover:text-saffron transition-colors duration-200">
                  Grand Kashmir Odyssey
                </Link>
              </li>
              <li>
                <Link to="/packages/romantic-kashmir-honeymoon" className="text-cream/70 hover:text-saffron transition-colors duration-200">
                  Romantic Honeymoon & Houseboat
                </Link>
              </li>
              <li>
                <Link to="/packages/glimpse-of-paradise" className="text-cream/70 hover:text-saffron transition-colors duration-200">
                  Glimpse of Paradise (5D)
                </Link>
              </li>
              <li>
                <Link to="/packages/winter-wonderland-ski" className="text-cream/70 hover:text-saffron transition-colors duration-200">
                  Winter Wonderland & Ski Gulmarg
                </Link>
              </li>
              <li>
                <Link to="/packages/gurez-high-altitude-frontier" className="text-cream/70 hover:text-saffron transition-colors duration-200">
                  Gurez Valley Frontier
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-eyebrow text-gold-hairline">
              Kashmir Concierge
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-saffron mt-1 flex-shrink-0" />
                <span className="text-cream/70 text-xs leading-relaxed">
                  {BRAND.fullAddress}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-saffron flex-shrink-0" />
                <a
                  href={PHONE_TEL}
                  className="text-cream font-medium hover:text-saffron transition-colors duration-200 text-sm tracking-wide"
                >
                  {PHONE_NUMBER}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 hover:text-saffron transition-colors duration-200 text-xs"
                >
                  Instant WhatsApp Booking
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-saffron flex-shrink-0" />
                <a
                  href={EMAIL_MAILTO}
                  className="text-cream/70 hover:text-saffron transition-colors duration-200 text-xs"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/50 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()} Insight Heaven. All rights reserved. Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-chinar-red fill-current mx-1 inline" />
            <span>in Srinagar, Kashmir.</span>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-cream/60 hover:text-saffron transition-colors uppercase tracking-wider text-[11px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
