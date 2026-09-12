import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Compass, ChevronRight, MessageCircle } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { BRAND, PHONE_NUMBER, PHONE_TEL, getWhatsAppLink, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants/contact';

export default function Header({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-gold-hairline/20 py-3.5'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-sm bg-mountain-blue flex items-center justify-center border border-gold-hairline/40 text-saffron group-hover:scale-105 transition-transform duration-300 shadow-md">
              <Compass className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-mountain-blue' : 'text-cream'
                }`}
              >
                Insight Heaven
              </span>
              <span
                className={`text-[10px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-charcoal-muted' : 'text-cream/80'
                }`}
              >
                Kashmir Travel Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wider uppercase font-medium transition-all duration-200 relative py-1 ${
                    isScrolled
                      ? isActive
                        ? 'text-saffron font-semibold'
                        : 'text-charcoal hover:text-saffron'
                      : isActive
                      ? 'text-saffron font-semibold'
                      : 'text-cream/90 hover:text-cream'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-saffron rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action: Instagram + Phone CTA (Clickable tel link visible on mobile and desktop) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 transition-all duration-300 rounded-none border border-gold-hairline/40 hover:scale-105 ${
                isScrolled
                  ? 'bg-cream text-[#E1306C] hover:bg-[#E1306C] hover:text-white'
                  : 'bg-black/40 text-cream hover:bg-[#E1306C] hover:text-white'
              }`}
              title="Follow @insight.heavens on Instagram"
              aria-label="Instagram @insight.heavens"
            >
              <InstagramIcon className="w-4 h-4 stroke-[1.8]" />
            </a>

            <a
              href={PHONE_TEL}
              id="header-phone-cta"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-none bg-mountain-blue text-cream hover:bg-mountain-blue-dark border border-gold-hairline/40 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              title="Call Insight Heavens"
            >
              <Phone className="w-3.5 h-3.5 text-saffron fill-current" />
              <span>{PHONE_NUMBER}</span>
            </a>

            <a
              href={getWhatsAppLink("Hi Insight Heavens! I would like to plan a Kashmir trip. Please share package details and customized quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Plan on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls: Instagram + Phone Icon + Hamburger */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={PHONE_TEL}
              className="p-2 rounded-none bg-mountain-blue text-saffron border border-gold-hairline/30 shadow-sm"
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors duration-200 ${
                isScrolled ? 'text-charcoal' : 'text-cream'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-cream border-b border-gold-hairline/30 shadow-2xl px-6 py-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-gold-hairline/20 flex items-center justify-between">
              <span className="text-[11px] font-semibold tracking-eyebrow uppercase text-charcoal-muted">
                Explore the Valley
              </span>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                Reg # JKEA00005384
              </span>
            </div>

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-base py-2 font-medium tracking-wide ${
                    isActive ? 'text-saffron font-semibold' : 'text-charcoal hover:text-saffron'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}

            <div className="pt-4 border-t border-gold-hairline/20 flex flex-col space-y-3">
              <a
                href={PHONE_TEL}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-mountain-blue text-cream text-xs uppercase tracking-wider font-semibold border border-gold-hairline/40"
              >
                <Phone className="w-4 h-4 text-saffron fill-current" />
                <span>Call {PHONE_NUMBER}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-xs uppercase tracking-wider font-semibold shadow-sm"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow {INSTAGRAM_HANDLE}</span>
              </a>

              <a
                href={getWhatsAppLink("Hi Insight Heavens! I would like to plan a tailored Kashmir itinerary. Please share options and quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold shadow-sm flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
