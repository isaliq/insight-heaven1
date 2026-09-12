import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mountain, Calendar } from 'lucide-react';

export default function DestinationCard({ destination }) {
  return (
    <div className="group relative bg-white border border-gold-hairline/30 overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col">
      {/* Image with zoom on hover */}
      <div className="relative aspect-[4/3] overflow-hidden bg-mountain-blue-deep">
        <img
          src={destination.heroImage}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-mountain-blue-deep/80 backdrop-blur-md text-gold-hairline border border-gold-hairline/30 text-[10px] uppercase font-semibold tracking-wider">
            <Mountain className="w-3 h-3" />
            <span>{destination.elevation}</span>
          </span>

          <span className="px-2.5 py-1 bg-cream/90 text-charcoal text-[10px] font-medium tracking-wide shadow-sm">
            {destination.recommendedDays}
          </span>
        </div>

        {/* Bottom Image Caption */}
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-[10px] uppercase font-semibold tracking-eyebrow text-saffron block mb-0.5">
            Destination Guide
          </span>
          <h3 className="font-display text-2xl font-bold text-cream group-hover:text-saffron transition-colors duration-300">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-xs text-saffron-dark font-medium italic mb-2">
            "{destination.tagline}"
          </p>
          <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-3">
            {destination.description}
          </p>
        </div>

        <div className="pt-3 border-t border-gold-hairline/20 space-y-3">
          <div className="flex items-center space-x-2 text-[11px] text-charcoal-muted">
            <Calendar className="w-3.5 h-3.5 text-saffron flex-shrink-0" />
            <span className="truncate">{destination.bestTimeToVisit}</span>
          </div>

          <Link
            to={`/destinations#${destination.id}`}
            className="w-full inline-flex items-center justify-between py-2 text-xs uppercase tracking-wider font-semibold text-mountain-blue group-hover:text-saffron transition-colors"
          >
            <span>Explore {destination.name}</span>
            <div className="w-6 h-6 rounded-none border border-mountain-blue/30 group-hover:border-saffron flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
