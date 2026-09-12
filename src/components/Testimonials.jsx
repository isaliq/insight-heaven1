import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 sm:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow-label text-saffron block mb-3">
            Words From Our Guests
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-mountain-blue tracking-tight">
            Memories Made in Paradise
          </h2>
          <div className="w-16 h-0.5 bg-gold-hairline mx-auto mt-4 mb-4" />
          <p className="text-charcoal-muted text-sm font-light">
            Read firsthand accounts from families, honeymooners, and adventurers who experienced Kashmir with Insight Heaven.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-white border border-gold-hairline/40 shadow-luxury p-8 sm:p-12 lg:p-16 relative">
          <Quote className="w-16 h-16 text-saffron/15 absolute top-6 right-8 pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Avatar & Guest Details */}
            <div className="flex-shrink-0 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-none border-2 border-gold-hairline overflow-hidden shadow-md mb-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="font-display text-lg font-bold text-mountain-blue">
                {current.name}
              </h4>
              <p className="text-xs text-charcoal-muted font-medium">
                {current.location}
              </p>

              <div className="mt-2 inline-flex items-center space-x-1 px-2.5 py-1 bg-cream border border-gold-hairline/30 text-[10px] text-mountain-blue font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Verified Traveler</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              {/* Star Rating */}
              <div className="flex items-center justify-center lg:justify-start space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              <blockquote className="font-display text-lg sm:text-xl md:text-2xl text-charcoal leading-relaxed italic">
                "{current.quote}"
              </blockquote>

              <div className="pt-2 text-xs text-saffron font-semibold uppercase tracking-wider">
                Journey: {current.trip} • {current.date}
              </div>
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-gold-hairline/25 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-8 bg-saffron'
                      : 'w-2 bg-charcoal/20 hover:bg-charcoal/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border border-gold-hairline/40 text-charcoal hover:bg-mountain-blue hover:text-cream transition-all duration-200 flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border border-gold-hairline/40 text-charcoal hover:bg-mountain-blue hover:text-cream transition-all duration-200 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
