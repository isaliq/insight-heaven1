import React from 'react';
import { Heart, MessageCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, BRAND } from '../constants/contact';

export default function InstagramShowcase() {
  const posts = [
    {
      id: 1,
      image: '/images/destinations/srinagar-shikara.jpg',
      location: 'Dal Lake, Srinagar',
      caption: 'Dawn breaks over the cedar waters. The floating market awakens.',
      likes: '482',
      comments: '36',
    },
    {
      id: 2,
      image: '/images/destinations/gulmarg-gondola.jpg',
      location: 'Gulmarg Gondola & Apharwat',
      caption: 'Ascending to 13,780 ft above pine lines. Gulmarg Gondola perfection.',
      likes: '614',
      comments: '58',
    },
    {
      id: 3,
      image: '/images/destinations/pahalgam-betaab.jpg',
      location: 'Betaab Valley, Pahalgam',
      caption: 'Where glacial Lidder waters meet centuries-old deodar pines.',
      likes: '529',
      comments: '41',
    },
    {
      id: 4,
      image: '/images/destinations/sonmarg-thajiwas.jpg',
      location: 'Sonmarg Thajiwas Glacier',
      caption: 'Glacial majesty at the ancient gateway to the Silk Route.',
      likes: '395',
      comments: '28',
    },
    {
      id: 5,
      image: '/images/destinations/doodhpathri-meadow.jpg',
      location: 'Doodhpathri (Valley of Milk)',
      caption: 'Emerald carpets and foaming milky rapids far from the crowd.',
      likes: '441',
      comments: '32',
    },
    {
      id: 6,
      image: '/images/destinations/gurez-habba-khatoon.jpg',
      location: 'Habba Khatoon, Gurez',
      caption: 'The legendary border frontier. Pure Himalayan solitude.',
      likes: '512',
      comments: '47',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-b border-gold-hairline/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Instagram Identity & Tourism Reg */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 text-saffron mb-2">
              <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
              <span className="eyebrow-label text-[#E1306C]">Live From The Valley</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-mountain-blue tracking-tight">
              Follow Our Stories on Instagram
            </h2>

            <div className="w-16 h-0.5 bg-gold-hairline mt-3 mb-4" />

            <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-muted">
              <span className="font-semibold text-mountain-blue">{INSTAGRAM_HANDLE}</span>
              <span>•</span>
              <span className="italic font-medium text-saffron">"{BRAND.tagline}"</span>
              <span>•</span>
              <span className="inline-flex items-center space-x-1 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{BRAND.governmentRegistration}</span>
              </span>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-none text-white text-xs uppercase tracking-widest font-semibold shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow {INSTAGRAM_HANDLE}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6-Grid Real Location Posts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-mountain-blue-deep border border-gold-hairline/25 block shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={post.image}
                alt={post.location}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Hover Overlay with Instagram details */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-4 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <InstagramIcon className="w-4 h-4 text-saffron" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-saffron-light">
                    Kashmir
                  </span>
                </div>

                <div className="text-center">
                  <p className="text-[11px] font-semibold line-clamp-2 leading-snug mb-1">
                    {post.location}
                  </p>
                  <p className="text-[9px] text-cream/70 line-clamp-2 italic">
                    "{post.caption}"
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-4 text-[10px] text-cream/80">
                  <span className="flex items-center space-x-1">
                    <Heart className="w-3 h-3 text-rose-500 fill-current" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{post.comments}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom banner for feed */}
        <div className="mt-8 pt-6 border-t border-gold-hairline/20 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-muted">
          <span className="flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-saffron" />
            <span>Tag <strong>#InsightHeavens</strong> in your Kashmir travel moments to be featured.</span>
          </span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-saffron-dark hover:text-saffron font-semibold underline mt-2 sm:mt-0"
          >
            Visit Instagram Profile →
          </a>
        </div>
      </div>
    </section>
  );
}
