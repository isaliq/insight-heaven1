import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  Star,
  MapPin,
  CheckCircle2,
  XCircle,
  Phone,
  MessageCircle,
  Calendar,
  ChevronDown,
  ChevronUp,
  Share2,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { PACKAGES } from '../data/packages';
import { PHONE_NUMBER, PHONE_TEL, getWhatsAppLink } from '../constants/contact';
import CTASection from '../components/CTASection';

export default function PackageDetail({ onOpenEnquiry }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = PACKAGES.find((p) => p.id === id) || PACKAGES[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openDay, setOpenDay] = useState(1); // Day 1 open by default

  const toggleDay = (dayNum) => {
    setOpenDay(openDay === dayNum ? null : dayNum);
  };

  const packageWhatsAppMessage = `Hi Insight Heavens! I am interested in booking / inquiring about "${pkg.name}" (${pkg.duration}). Please share customized itinerary details and pricing quote.`;

  return (
    <div className="bg-cream min-h-screen pt-24 sm:pt-28">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/packages"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-charcoal-muted hover:text-mountain-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Packages</span>
        </Link>
      </div>

      {/* Main Package Header & Gallery Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Gallery & Itinerary (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Gallery */}
            <div className="space-y-3">
              <div className="relative aspect-[16/10] overflow-hidden bg-mountain-blue-deep border border-gold-hairline/40 shadow-luxury">
                <img
                  src={pkg.gallery[activeImageIndex] || pkg.heroImage}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 bg-saffron text-white text-xs uppercase font-bold tracking-wider shadow-md">
                    {pkg.category}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {pkg.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {pkg.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[16/10] overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-saffron shadow-md scale-95'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${pkg.name} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Overview & Key Highlights */}
            <div className="bg-white p-8 border border-gold-hairline/30 shadow-luxury space-y-6">
              <div>
                <span className="eyebrow-label text-saffron block mb-1">
                  Trip Overview
                </span>
                <h2 className="font-display text-2xl font-bold text-mountain-blue">
                  The Experience
                </h2>
                <div className="w-12 h-0.5 bg-gold-hairline mt-2 mb-4" />
                <p className="text-charcoal-muted text-sm leading-relaxed">
                  {pkg.overview}
                </p>
              </div>

              <div className="pt-4 border-t border-gold-hairline/20">
                <h3 className="font-display text-lg font-bold text-mountain-blue mb-3">
                  Curated Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-charcoal-muted">
                      <Sparkles className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day-by-Day Itinerary Accordion / Timeline */}
            <div className="bg-white p-8 border border-gold-hairline/30 shadow-luxury space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="eyebrow-label text-saffron block mb-1">
                    Day-by-Day Plan
                  </span>
                  <h2 className="font-display text-2xl font-bold text-mountain-blue">
                    Complete Itinerary
                  </h2>
                </div>
                <button
                  onClick={() => setOpenDay(openDay ? null : 1)}
                  className="text-xs text-saffron font-semibold hover:underline"
                >
                  {openDay ? 'Collapse All' : 'Expand View'}
                </button>
              </div>

              <div className="space-y-4 pt-2">
                {pkg.itinerary.map((dayItem) => {
                  const isOpen = openDay === dayItem.day;
                  return (
                    <div
                      key={dayItem.day}
                      className="border border-gold-hairline/25 transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleDay(dayItem.day)}
                        className="w-full flex items-center justify-between p-4 bg-cream/40 hover:bg-cream/80 text-left transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-8 h-8 bg-mountain-blue text-cream text-xs font-bold flex items-center justify-center flex-shrink-0">
                            D{dayItem.day}
                          </span>
                          <div>
                            <h4 className="font-display text-base font-bold text-mountain-blue">
                              {dayItem.title}
                            </h4>
                            <div className="flex items-center space-x-3 text-[11px] text-charcoal-subtle mt-0.5">
                              <span>Stay: {dayItem.stay}</span>
                              <span>•</span>
                              <span>Meals: {dayItem.meals}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-charcoal-subtle">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-saffron" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="p-5 bg-white text-xs text-charcoal-muted leading-relaxed border-t border-gold-hairline/20 animate-fade-in space-y-3">
                          <p>{dayItem.description}</p>
                          <div className="flex flex-wrap gap-2 pt-2 text-[11px]">
                            <span className="px-2.5 py-1 bg-cream border border-gold-hairline/30 text-mountain-blue font-medium">
                              Accommodation: {dayItem.stay}
                            </span>
                            <span className="px-2.5 py-1 bg-cream border border-gold-hairline/30 text-mountain-blue font-medium">
                              Meals Included: {dayItem.meals}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white p-8 border border-gold-hairline/30 shadow-luxury grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div>
                <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-display text-lg font-bold text-mountain-blue">
                    What’s Included
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-charcoal-muted">
                  {pkg.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div>
                <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-rose-500/20">
                  <XCircle className="w-5 h-5 text-rose-500" />
                  <h3 className="font-display text-lg font-bold text-mountain-blue">
                    What’s Excluded
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-charcoal-muted">
                  {pkg.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Pricing & Booking Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white border border-gold-hairline shadow-2xl p-6 sm:p-8 space-y-6">
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold tracking-eyebrow text-saffron">
                    {pkg.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    <span className="font-semibold text-charcoal">{pkg.rating}</span>
                    <span className="text-charcoal-subtle">({pkg.reviewsCount} reviews)</span>
                  </div>
                </div>

                <h1 className="font-display text-3xl font-bold text-mountain-blue leading-tight mb-2">
                  {pkg.name}
                </h1>
                <p className="text-xs text-charcoal-muted italic">
                  "{pkg.tagline}"
                </p>
              </div>

              {/* Pricing & Customization Banner */}
              <div className="p-4 bg-cream-50 border border-gold-hairline/40">
                <span className="text-[10px] uppercase tracking-wider text-saffron-dark font-bold block">
                  Bespoke Private Itinerary
                </span>
                <div className="flex items-baseline space-x-2 mt-0.5">
                  <span className="font-display text-2xl font-bold text-mountain-blue">
                    Pricing on Request
                  </span>
                </div>
                <p className="text-[11px] text-charcoal-muted font-medium mt-1">
                  Tailored to your dates, group size, and preferred stays with an instant WhatsApp quote.
                </p>
              </div>

              {/* Trip Quick Facts */}
              <div className="grid grid-cols-2 gap-3 text-xs border-t border-b border-gold-hairline/20 py-4">
                <div>
                  <span className="text-charcoal-subtle uppercase text-[10px] tracking-wider block">
                    Duration
                  </span>
                  <span className="font-semibold text-mountain-blue">
                    {pkg.duration}
                  </span>
                </div>
                <div>
                  <span className="text-charcoal-subtle uppercase text-[10px] tracking-wider block">
                    Destinations
                  </span>
                  <span className="font-semibold text-mountain-blue">
                    {pkg.destinations.length} Key Stops
                  </span>
                </div>
                <div>
                  <span className="text-charcoal-subtle uppercase text-[10px] tracking-wider block">
                    Pick-up & Drop
                  </span>
                  <span className="font-semibold text-mountain-blue">
                    Srinagar Airport (SXR)
                  </span>
                </div>
                <div>
                  <span className="text-charcoal-subtle uppercase text-[10px] tracking-wider block">
                    Tour Type
                  </span>
                  <span className="font-semibold text-mountain-blue">
                    Private Dedicated Tour
                  </span>
                </div>
              </div>

              {/* Booking CTAs - All Inquiries Redirect to WhatsApp */}
              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppLink(packageWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#20bd5a] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire / Book on WhatsApp</span>
                </a>

                {/* Direct Phone Call */}
                <a
                  href={PHONE_TEL}
                  className="w-full py-3.5 bg-mountain-blue text-cream text-xs uppercase tracking-widest font-semibold hover:bg-mountain-blue-dark transition-all duration-300 flex items-center justify-center space-x-2 border border-gold-hairline/40"
                >
                  <Phone className="w-4 h-4 text-saffron fill-current" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-gold-hairline/20 space-y-2 text-[11px] text-charcoal-muted">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero booking fee until itinerary is 100% finalized</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-saffron flex-shrink-0" />
                  <span>Dedicated private chauffeurs & vehicles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <CTASection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
