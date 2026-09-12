import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, MapPin, Check, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../constants/contact';

export default function PackageCard({ pkg }) {
  const whatsappMsg = `Hi Insight Heavens! I am inquiring about the "${pkg.name}" (${pkg.duration}) tour package. Please share customized details and quote.`;

  return (
    <div className="group bg-white border border-gold-hairline/30 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col overflow-hidden relative">
      {/* Top Media Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-mountain-blue-deep">
        <img
          src={pkg.heroImage}
          alt={pkg.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <span className="px-3 py-1 bg-saffron text-white text-[10px] uppercase font-bold tracking-wider shadow-md">
            {pkg.badge || pkg.category}
          </span>

          <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium">
            <Star className="w-3 h-3 text-amber-400 fill-current" />
            <span>{pkg.rating}</span>
            <span className="text-white/60 text-[10px]">({pkg.reviewsCount})</span>
          </span>
        </div>

        {/* Duration Badge Bottom Left */}
        <div className="absolute bottom-3 left-3.5 flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-cream/95 text-mountain-blue text-xs font-semibold tracking-wide shadow-sm">
            <Clock className="w-3.5 h-3.5 text-saffron" />
            <span>{pkg.duration}</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Destination route tags */}
          <div className="flex items-center space-x-1.5 text-xs text-charcoal-muted mb-2 overflow-hidden">
            <MapPin className="w-3.5 h-3.5 text-saffron flex-shrink-0" />
            <span className="truncate">{pkg.destinations.join(' • ')}</span>
          </div>

          <h3 className="font-display text-xl font-bold text-mountain-blue group-hover:text-saffron transition-colors duration-200 leading-snug">
            <Link to={`/packages/${pkg.id}`}>{pkg.name}</Link>
          </h3>

          <p className="text-xs text-charcoal-muted mt-2 line-clamp-2 leading-relaxed">
            {pkg.overview}
          </p>

          {/* Key highlights (first 2) */}
          <div className="mt-4 pt-3 border-t border-gold-hairline/20 space-y-1.5">
            {pkg.highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-[11px] text-charcoal-muted">
                <Check className="w-3.5 h-3.5 text-saffron flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customized Booking & WhatsApp Inquiry */}
        <div className="pt-4 border-t border-gold-hairline/25 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-saffron-dark font-bold block">
              Bespoke Pricing
            </span>
            <span className="text-xs text-charcoal font-semibold">
              Quote on WhatsApp
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to={`/packages/${pkg.id}`}
              className="px-3 py-2 text-xs uppercase tracking-wider font-semibold border border-mountain-blue/30 text-mountain-blue hover:bg-mountain-blue hover:text-cream transition-all duration-300"
            >
              Details
            </Link>

            <a
              href={getWhatsAppLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs uppercase tracking-wider font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all duration-300 shadow-sm flex items-center space-x-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
