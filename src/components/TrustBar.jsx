import React from 'react';
import { Award, Users, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL, getWhatsAppLink } from '../constants/contact';

export default function TrustBar() {
  const stats = [
    {
      icon: Award,
      value: '10+ Years',
      label: 'Kashmir Valley Heritage',
    },
    {
      icon: Users,
      value: '15,000+',
      label: 'Delighted Travelers',
    },
    {
      icon: MapPin,
      value: '100% Native',
      label: 'Local Kashmiri Chauffeurs & Guides',
    },
    {
      icon: MessageCircle,
      value: '24/7 Available',
      label: 'Direct WhatsApp & Call Concierge',
      isInteractive: true,
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-cream-50 border border-gold-hairline/40 shadow-xl rounded-none p-6 sm:p-8 backdrop-blur-md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gold-hairline/15">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center space-x-4 ${
                  idx !== 0 ? 'pt-4 lg:pt-0 lg:pl-6' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-none bg-mountain-blue/5 border border-gold-hairline/30 flex items-center justify-center text-saffron flex-shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.6]" />
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-mountain-blue leading-none">
                    {item.value}
                  </div>
                  <div className="text-xs text-charcoal-muted mt-1 font-medium leading-snug">
                    {item.label}
                  </div>
                  {item.isInteractive && (
                    <div className="mt-1 flex items-center space-x-2 text-[11px]">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] font-semibold hover:underline"
                      >
                        WhatsApp
                      </a>
                      <span className="text-charcoal-subtle">|</span>
                      <a href={PHONE_TEL} className="text-mountain-blue font-semibold hover:underline">
                        Call
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Official J&K Tourism Accreditation Ribbon */}
        <div className="mt-6 pt-4 border-t border-gold-hairline/20 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-muted gap-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200 text-[11px]">
              Govt. Registered: J&K Tourism # [JKEA00005384]
            </span>
            <span className="hidden sm:inline text-charcoal-subtle">•</span>
            <span className="hidden sm:inline text-[11px]">Official Licensed Kashmir Valley Operator</span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <span className="italic text-saffron-dark font-medium">"Explore • Dream • Travel"</span>
          </div>
        </div>
      </div>
    </section>
  );
}
