import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Calendar, Compass, ArrowRight, CheckCircle2, Sparkles, MapPin, MessageCircle } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { PACKAGES } from '../data/packages';
import { getWhatsAppLink } from '../constants/contact';
import CTASection from '../components/CTASection';

export default function Destinations({ onOpenEnquiry }) {
  return (
    <div className="bg-cream min-h-screen pt-24 sm:pt-28">
      {/* Page Header */}
      <section className="relative py-16 sm:py-20 bg-mountain-blue text-cream overflow-hidden border-b border-gold-hairline/30">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/destinations/srinagar-dal-lake.jpg"
            alt="Dal Lake Srinagar landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-blue-deep via-mountain-blue/90 to-mountain-blue-deep/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow-label text-saffron block mb-2">
            The Valley Guide
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream mb-4">
            Destinations in Kashmir
          </h1>
          <div className="w-16 h-0.5 bg-gold-hairline mx-auto mb-4" />
          <p className="text-cream/80 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            From the calm waters of Dal Lake to the rugged glaciers of Sonmarg and the secluded paradise of Gurez.
          </p>
        </div>
      </section>

      {/* Destination Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {DESTINATIONS.map((dest, index) => {
          const isReversed = index % 2 === 1;
          const linkedPackages = PACKAGES.filter((p) =>
            dest.linkedPackageIds?.includes(p.id)
          );

          return (
            <section
              key={dest.id}
              id={dest.id}
              className="scroll-mt-32 pt-6 border-b border-gold-hairline/25 pb-20 last:border-b-0"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Media Column (6 cols) */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-mountain-blue-deep border border-gold-hairline/40 shadow-luxury group">
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-mountain-blue/90 text-gold-hairline border border-gold-hairline/30 text-xs uppercase font-semibold tracking-wider backdrop-blur-md">
                        <Mountain className="w-3 h-3" />
                        <span>{dest.elevation}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-cream/90 text-charcoal text-xs font-semibold shadow-sm">
                        Recommended: {dest.recommendedDays}
                      </span>
                    </div>
                  </div>

                  {/* Secondary small thumbnails */}
                  {dest.gallery && dest.gallery.length > 1 && (
                    <div className="grid grid-cols-3 gap-3 mt-3">
                      {dest.gallery.map((img, i) => (
                        <div
                          key={i}
                          className="aspect-[4/3] overflow-hidden border border-gold-hairline/30 shadow-sm"
                        >
                          <img
                            src={img}
                            alt={`${dest.name} preview ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details Column (6 cols) */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <div className="flex items-center space-x-2 text-saffron mb-1.5">
                      <MapPin className="w-4 h-4" />
                      <span className="eyebrow-label">{dest.tagline}</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-mountain-blue tracking-tight">
                      {dest.name}
                    </h2>
                    <div className="w-12 h-0.5 bg-gold-hairline mt-3 mb-4" />
                    <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
                      {dest.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="bg-white p-6 border border-gold-hairline/25 shadow-sm space-y-3">
                    <h4 className="text-xs uppercase font-bold tracking-eyebrow text-mountain-blue">
                      Top Valley Experiences
                    </h4>
                    <ul className="space-y-2 text-xs text-charcoal-muted">
                      {dest.highlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Season & Climate Tip */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-cream-50 border border-gold-hairline/30">
                      <span className="text-[10px] uppercase tracking-wider text-charcoal-subtle block font-semibold mb-1">
                        Best Season to Visit
                      </span>
                      <div className="flex items-center space-x-1.5 text-mountain-blue font-medium">
                        <Calendar className="w-4 h-4 text-saffron flex-shrink-0" />
                        <span>{dest.bestTimeToVisit}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-cream-50 border border-gold-hairline/30">
                      <span className="text-[10px] uppercase tracking-wider text-charcoal-subtle block font-semibold mb-1">
                        Insider Tip
                      </span>
                      <p className="text-charcoal-muted text-[11px] leading-snug">
                        {dest.climateTip}
                      </p>
                    </div>
                  </div>

                  {/* Linked Tour Packages */}
                  {linkedPackages.length > 0 && (
                    <div className="pt-2">
                      <span className="text-xs uppercase font-bold tracking-eyebrow text-charcoal-subtle block mb-2">
                        Featured Itineraries Including {dest.name}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {linkedPackages.map((pkg) => (
                          <Link
                            key={pkg.id}
                            to={`/packages/${pkg.id}`}
                            className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-gold-hairline/40 text-mountain-blue text-xs font-medium hover:border-saffron hover:text-saffron transition-colors"
                          >
                            <span>{pkg.name} ({pkg.duration})</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Inquiry CTA */}
                  <div className="pt-2">
                    <a
                      href={getWhatsAppLink(`Hi Insight Heavens! I am interested in planning a custom trip to ${dest.name}, Kashmir. Please share recommended options and pricing quote.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold shadow-sm hover:bg-[#20bd5a] transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Plan Trip to {dest.name} on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Conversion Banner */}
      <CTASection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
