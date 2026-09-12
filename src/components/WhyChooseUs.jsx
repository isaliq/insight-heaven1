import React from 'react';
import { Compass, Sparkles, HeartHandshake, Shield, Clock, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Compass,
      title: 'Genuine Local Expertise',
      description:
        'Born and raised in the Kashmir valley, we know the secret morning hours of Dal Lake, the quietest meadows of Pahalgam, and reliable Gondola routes that generic aggregators overlook.',
      accent: '100% Native Team',
    },
    {
      icon: Sparkles,
      title: 'Artisan Bespoke Itineraries',
      description:
        'No rushed group buses or rigid schedules. Every itinerary is tailored around your pace, whether you are seeking romantic candlelight on a cedar houseboat or deep powder snow skiing.',
      accent: 'Private & Tailored',
    },
    {
      icon: HeartHandshake,
      title: '24/7 On-Ground Srinagar Care',
      description:
        'From your warm greeting at Srinagar Airport to emergency permit handling or weather shifts, our dedicated on-ground team is always just a phone call or 10 minutes away.',
      accent: 'Round-the-Clock',
    },
    {
      icon: Shield,
      title: 'Transparent Direct Value',
      description:
        'Deal directly with the Kashmiri source. No multiple layers of middleman commissions, hidden vehicle surcharges, or unexpected surprise fees. Honest, clear pricing.',
      accent: 'Zero Middlemen',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-cream-100 relative overflow-hidden border-t border-b border-gold-hairline/30">
      {/* Decorative hairline pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="eyebrow-label text-saffron block mb-3">
            The Insight Heaven Promise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-mountain-blue tracking-tight">
            Why Discerning Travelers Choose Us
          </h2>
          <div className="w-16 h-0.5 bg-gold-hairline mx-auto mt-4 mb-6" />
          <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
            We are not a distant call center booking generic packages. We are Kashmiri hosts opening our homeland's heart to you with safety, authenticity, and refined luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 border border-gold-hairline/30 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Top Corner Gold Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-saffron/40 group-hover:border-saffron transition-colors" />

                <div>
                  <div className="w-12 h-12 rounded-none bg-mountain-blue/5 border border-gold-hairline/40 flex items-center justify-center text-saffron mb-6 group-hover:bg-mountain-blue group-hover:text-cream transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.6]" />
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-eyebrow text-gold-hairline block mb-2">
                    {item.accent}
                  </span>

                  <h3 className="font-display text-xl font-bold text-mountain-blue mb-3 group-hover:text-saffron-dark transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-hairline/20 flex items-center space-x-1 text-[11px] font-semibold text-mountain-blue uppercase tracking-wider">
                  <CheckCircle className="w-3.5 h-3.5 text-saffron" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
