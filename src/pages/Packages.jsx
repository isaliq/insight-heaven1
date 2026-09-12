import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import CTASection from '../components/CTASection';
import { PACKAGES } from '../data/packages';

export default function Packages({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [durationFilter, setDurationFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    'All',
    'Signature Luxury',
    'Honeymoon',
    'Winter & Snow',
    'Offbeat & Nature',
    'Essential',
    'Expedition',
  ];

  const filteredPackages = useMemo(() => {
    return PACKAGES.filter((pkg) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || pkg.category === selectedCategory;

      // Search query (name, destinations, highlights)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        pkg.name.toLowerCase().includes(q) ||
        pkg.overview.toLowerCase().includes(q) ||
        pkg.destinations.some((d) => d.toLowerCase().includes(q));

      // Duration filter
      let matchesDuration = true;
      if (durationFilter === 'short') matchesDuration = pkg.durationDays <= 5;
      else if (durationFilter === 'medium') matchesDuration = pkg.durationDays >= 6 && pkg.durationDays <= 7;
      else if (durationFilter === 'long') matchesDuration = pkg.durationDays >= 8;

      return matchesCategory && matchesSearch && matchesDuration;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'duration') return a.durationDays - b.durationDays;
      if (sortBy === 'alphabetical') return a.name.localeCompare(b.name);
      return 0; // default featured
    });
  }, [selectedCategory, searchQuery, durationFilter, sortBy]);

  return (
    <div className="bg-cream min-h-screen pt-24 sm:pt-28">
      {/* Page Header Banner */}
      <section className="relative py-16 sm:py-20 bg-mountain-blue text-cream overflow-hidden border-b border-gold-hairline/30">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/destinations/gulmarg-gondola.jpg"
            alt="Gulmarg Gondola and pine mountain peaks"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-blue-deep via-mountain-blue/90 to-mountain-blue-deep/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow-label text-saffron block mb-2">
            Handcrafted Itineraries
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream mb-4">
            Curated Kashmir Tour Packages
          </h1>
          <div className="w-16 h-0.5 bg-gold-hairline mx-auto mb-4" />
          <p className="text-cream/80 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Every itinerary is 100% customizable. Privately driven, thoughtfully paced, and hosted by native Kashmiri specialists.
          </p>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Sort Controls */}
        <div className="bg-white border border-gold-hairline/30 shadow-luxury p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input (5 cols) */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-charcoal-subtle absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by destination (Gulmarg, Dal Lake, Pahalgam...)"
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-cream/40 border border-gold-hairline/30 focus:border-saffron focus:bg-white outline-none text-charcoal transition-all placeholder:text-charcoal-subtle text-xs sm:text-sm"
              />
            </div>

            {/* Duration Filter (3 cols) */}
            <div className="md:col-span-3">
              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-cream/40 border border-gold-hairline/30 focus:border-saffron focus:bg-white outline-none text-charcoal transition-all cursor-pointer"
              >
                <option value="all">All Durations</option>
                <option value="short">4 – 5 Days (Quick Escapes)</option>
                <option value="medium">6 – 7 Days (Standard Holidays)</option>
                <option value="long">8+ Days (Deep Expeditions)</option>
              </select>
            </div>

            {/* Sort Select (4 cols) */}
            <div className="md:col-span-4">
              <div className="flex items-center space-x-2">
                <span className="text-[11px] uppercase tracking-wider text-charcoal-subtle whitespace-nowrap hidden sm:inline">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm bg-cream/40 border border-gold-hairline/30 focus:border-saffron focus:bg-white outline-none text-charcoal transition-all cursor-pointer"
                >
                  <option value="featured">Featured / Recommended</option>
                  <option value="rating">Top Rated by Guests</option>
                  <option value="duration">Trip Duration</option>
                  <option value="alphabetical">Alphabetical (A – Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="mt-5 pt-4 border-t border-gold-hairline/20 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <span className="text-xs uppercase font-semibold tracking-wider text-charcoal-subtle mr-1 flex items-center space-x-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Theme:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-mountain-blue text-cream border border-mountain-blue shadow-sm font-semibold'
                    : 'bg-cream/70 text-charcoal hover:bg-cream-200 border border-gold-hairline/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs text-charcoal-muted uppercase tracking-wider font-medium">
            Showing <strong className="text-mountain-blue">{filteredPackages.length}</strong> Handcrafted Kashmir Packages
          </p>

          {(selectedCategory !== 'All' || searchQuery || durationFilter !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setDurationFilter('all');
              }}
              className="text-xs text-saffron-dark underline font-medium hover:text-saffron"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onOpenEnquiry={onOpenEnquiry} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-gold-hairline/30 p-8 shadow-luxury max-w-lg mx-auto">
            <Sparkles className="w-10 h-10 text-saffron mx-auto mb-3" />
            <h3 className="font-display text-xl font-bold text-mountain-blue mb-2">
              No exact match found
            </h3>
            <p className="text-xs text-charcoal-muted mb-6 leading-relaxed">
              We customize 100% of our Kashmir itineraries. Contact our local concierge directly and we will design a personalized plan for you within hours.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setDurationFilter('all');
              }}
              className="btn-saffron text-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Conversion Banner */}
      <CTASection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
