import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Heart, ShieldCheck, Users, Award, MapPin, ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import { BRAND } from '../constants/contact';

export default function About({ onOpenEnquiry }) {
  const values = [
    {
      title: 'Mehmaan Nawazi (Sacred Hospitality)',
      description:
        'In Kashmiri culture, a guest is revered as a blessing from the Divine. We treat every traveler not as a tourist or client, but as an honored guest in our personal home.',
      icon: Heart,
    },
    {
      icon: Compass,
      title: 'Deep Unhurried Travel',
      description:
        'We reject superficial "touch-and-go" bus tourism. We believe Kashmir reveals its soul in the quiet moments: sipping steaming saffron Kahwa on cedar decks, breathing pine scent by Lidder River, or admiring sunset over Pir Panjal.',
    },
    {
      icon: ShieldCheck,
      title: 'Local Empowerment & Fair Ethics',
      description:
        'Our chauffeurs, mountain guides, shikara boatmen, and cooks are native valley residents. We practice fair-wage tourism that protects our alpine ecology and directly sustains Kashmiri artisan families.',
    },
    {
      icon: Award,
      title: 'Uncompromised Safety & Care',
      description:
        'With deep knowledge of Himalayan mountain passes, changing weather patterns, and local administration, we provide absolute peace of mind 24 hours a day.',
    },
  ];

  const team = [
    {
      name: 'Tariq Ahmad Mir',
      role: 'Founder & Senior Valley Concierge',
      bio: 'Born beside Dal Lake, Tariq has spent over 14 years introducing international travelers and families to the hidden glades of Kashmir.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Zahoor Rather',
      role: 'Head of High-Altitude & Ski Expeditions',
      bio: 'Certified mountaineer and native of Gulmarg, Zahoor coordinates winter backcountry skiing and high-altitude Gurez expeditions.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Shabnam Begum',
      role: 'Guest Hospitality & Heritage Specialist',
      bio: 'Passionate about Kashmiri culinary heritage and traditional craftsmanship, Shabnam curates authentic Wazwan dining and boutique stays.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-cream min-h-screen pt-24 sm:pt-28">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 bg-mountain-blue text-cream overflow-hidden border-b border-gold-hairline/30">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/destinations/srinagar-dal-lake.jpg"
            alt="Kashmir Dal Lake sunrise"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-blue-deep via-mountain-blue/90 to-mountain-blue-deep/95" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow-label text-saffron block mb-2">
            The Soul of Insight Heaven
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream mb-6">
            Rooted in the Valley of Saints
          </h1>
          <div className="w-16 h-0.5 bg-gold-hairline mx-auto mb-6" />
          <p className="text-cream/80 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            We are not a tech aggregator in Bangalore or Delhi. We are native Kashmiris whose families have walked these cedar shores and alpine glades for generations.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow-label text-saffron block">Our Origins</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-mountain-blue tracking-tight">
              Why We Founded Insight Heaven
            </h2>
            <div className="w-12 h-0.5 bg-gold-hairline" />

            <div className="space-y-4 text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
              <p>
                In an era dominated by faceless travel booking algorithms, travelers visiting Kashmir were increasingly pushed into rushed, commercial itineraries — overcrowded buses, commission-driven souvenir shops, and detached service that missed the poetry of Kashmir entirely.
              </p>
              <p>
                Insight Heaven was born out of a simple conviction: <em>Kashmir cannot be experienced in a hurry.</em> It must be savored. The morning light filtering through Chinar leaves at Nishat Bagh, the gentle lap of water against a cedar Shikara at twilight, and the warm aroma of saffron and cardamom Kahwa shared by a fireplace.
              </p>
              <p>
                Today, our Srinagar-based team crafts bespoke private journeys for travelers from across India, the UK, the Middle East, and beyond — maintaining the highest standard of boutique luxury while honoring our timeless traditions of Himalayan hospitality.
              </p>
            </div>

            <div className="pt-4 flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-xs font-semibold text-mountain-blue uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-saffron" />
                <span>Headquartered in Srinagar, Kashmir</span>
              </div>
            </div>
          </div>

          {/* Right Imagery (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-gold-hairline shadow-luxury">
                <img
                  src="/images/destinations/pahalgam-betaab.jpg"
                  alt="Scenic Betaab Valley in Pahalgam"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 border border-gold-hairline shadow-2xl max-w-xs hidden sm:block">
                <span className="font-display text-3xl font-bold text-saffron block leading-none mb-1">
                  10+ Years
                </span>
                <p className="text-xs text-charcoal font-medium">
                  Safeguarding the heritage of luxury travel across Jammu & Kashmir
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Insight Heaven vs Generic OTAs */}
      <section className="py-20 sm:py-24 bg-cream-100 border-t border-b border-gold-hairline/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow-label text-saffron block mb-2">
              The Real Difference
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-mountain-blue">
              Local Specialist vs Generic Booking Sites
            </h2>
            <div className="w-16 h-0.5 bg-gold-hairline mx-auto mt-3 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Generic OTAs */}
            <div className="bg-white/80 p-8 border border-charcoal/15 shadow-sm space-y-4">
              <h3 className="font-display text-xl font-bold text-charcoal-muted line-through">
                Generic Global Aggregator
              </h3>
              <ul className="space-y-3 text-xs text-charcoal-muted">
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Call center agents based hundreds of miles away who have never visited Kashmir</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Rigid group buses and packed itineraries that leave no room for serendipity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Hidden vehicle surcharges and surprise extra costs at tourist spots</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>No on-ground support if flights or mountain weather shifts unexpectedly</span>
                </li>
              </ul>
            </div>

            {/* Insight Heaven */}
            <div className="bg-white p-8 border-2 border-saffron shadow-luxury space-y-4 relative">
              <div className="absolute top-0 right-0 bg-saffron text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                The Insight Heaven Way
              </div>
              <h3 className="font-display text-xl font-bold text-mountain-blue">
                Insight Heaven (Local Srinagar Team)
              </h3>
              <ul className="space-y-3 text-xs text-charcoal">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Direct phone & WhatsApp access to senior local valley specialists in Srinagar</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>100% private, dedicated vehicles and hand-curated boutique luxury accommodations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Transparent upfront pricing with zero hidden surcharges</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Immediate on-ground assistance 24/7 for Gondola coordination, permits, and emergencies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow-label text-saffron block mb-2">Our Guiding Light</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-mountain-blue">
            Principles We Honor
          </h2>
          <div className="w-16 h-0.5 bg-gold-hairline mx-auto mt-3 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-white p-8 border border-gold-hairline/30 shadow-luxury space-y-4">
                <div className="w-12 h-12 bg-mountain-blue/5 border border-gold-hairline flex items-center justify-center text-saffron">
                  <Icon className="w-6 h-6 stroke-[1.6]" />
                </div>
                <h3 className="font-display text-lg font-bold text-mountain-blue">
                  {v.title}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-24 bg-cream-50 border-t border-gold-hairline/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow-label text-saffron block mb-2">Our Srinagar Hosts</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-mountain-blue">
              Meet Your Valley Curators
            </h2>
            <div className="w-16 h-0.5 bg-gold-hairline mx-auto mt-3 mb-4" />
            <p className="text-xs sm:text-sm text-charcoal-muted font-light">
              The people who know every turn of the Lidder River, every snow trail on Apharwat, and every artisan woodcarver in the old city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white border border-gold-hairline/30 shadow-luxury overflow-hidden flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-mountain-blue-deep">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-eyebrow text-saffron block mb-1">
                      {member.role}
                    </span>
                    <h3 className="font-display text-xl font-bold text-mountain-blue mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <CTASection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
