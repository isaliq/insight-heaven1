import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import DestinationCard from '../components/DestinationCard';
import PackageCard from '../components/PackageCard';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import InstagramShowcase from '../components/InstagramShowcase';
import CTASection from '../components/CTASection';
import { DESTINATIONS } from '../data/destinations';
import { PACKAGES } from '../data/packages';

export default function Home({ onOpenEnquiry }) {
  // Select top 3 featured destinations for the homepage
  const featuredDestinations = DESTINATIONS.slice(0, 3);
  // Select popular packages for the homepage
  const popularPackages = PACKAGES.slice(0, 3);

  return (
    <div className="bg-cream">
      {/* 1. Cinematic Hero */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Featured Destinations */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 text-saffron mb-2">
              <Compass className="w-4 h-4" />
              <span className="eyebrow-label">The Crown Jewels</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-mountain-blue tracking-tight">
              Iconic Valley Destinations
            </h2>
            <div className="w-16 h-0.5 bg-gold-hairline mt-3 mb-3" />
            <p className="text-charcoal-muted text-sm sm:text-base font-light max-w-xl">
              From the mirrored waters of Dal Lake to the snow-cloaked peaks of Apharwat, each corner of Kashmir offers its own timeless poetry.
            </p>
          </div>

          <Link
            to="/destinations"
            className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-mountain-blue hover:text-saffron transition-colors group"
          >
            <span>View All 6 Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 4. Popular Tour Packages */}
      <section className="py-24 sm:py-32 bg-cream-100 border-t border-b border-gold-hairline/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <div className="inline-flex items-center space-x-2 text-saffron mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="eyebrow-label">Curated Himalayan Journeys</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-mountain-blue tracking-tight">
                Most Cherished Itineraries
              </h2>
              <div className="w-16 h-0.5 bg-gold-hairline mt-3 mb-3" />
              <p className="text-charcoal-muted text-sm sm:text-base font-light max-w-xl">
                Carefully paced, privately chauffeured packages designed to showcase the purest essence of Kashmir without the rush of commercial group tours.
              </p>
            </div>

            <Link
              to="/packages"
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-mountain-blue hover:text-saffron transition-colors group"
            >
              <span>Explore All Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onOpenEnquiry={onOpenEnquiry} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Traveler Testimonials */}
      <Testimonials />

      {/* 7. Instagram Valley Showcase */}
      <InstagramShowcase />

      {/* 8. Conversion CTA Banner */}
      <CTASection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
