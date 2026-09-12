import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Users,
  User,
  ShieldCheck,
} from 'lucide-react';
import {
  BRAND,
  PHONE_NUMBER,
  PHONE_TEL,
  EMAIL_ADDRESS,
  EMAIL_MAILTO,
  getWhatsAppLink,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from '../constants/contact';
import InstagramIcon from '../components/icons/InstagramIcon';
import { PACKAGES } from '../data/packages';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    travelers: '2 Adults (Couple)',
    packageInterest: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Insight Heavens! I would like to get in touch regarding a Kashmir trip:\n\n• Name: ${formData.name || 'Traveler'}\n• Phone: ${formData.phone || 'N/A'}\n• Email: ${formData.email || 'N/A'}\n• Travel Dates: ${formData.travelDate || 'Flexible'}\n• Guests: ${formData.travelers}\n• Interested In: ${formData.packageInterest || 'Custom Itinerary'}\n• Note: ${formData.message || 'Please share customized package details and quote.'}`;
    window.open(getWhatsAppLink(text), '_blank');
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Insight Heavens! I would like to get in touch regarding a Kashmir trip:\n\n• Name: ${formData.name || 'Traveler'}\n• Phone: ${formData.phone || 'N/A'}\n• Email: ${formData.email || 'N/A'}\n• Travel Dates: ${formData.travelDate || 'Flexible'}\n• Guests: ${formData.travelers}\n• Interested In: ${formData.packageInterest || 'Custom Itinerary'}\n• Note: ${formData.message || 'Please share customized package details and quote.'}`;
    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <div className="bg-cream min-h-screen pt-24 sm:pt-28">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 bg-mountain-blue text-cream overflow-hidden border-b border-gold-hairline/30">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/destinations/srinagar-shikara.jpg"
            alt="Dal Lake Srinagar Shikara"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-mountain-blue-deep via-mountain-blue/90 to-mountain-blue-deep/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow-label text-saffron block mb-2">
            Srinagar Concierge
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream mb-4">
            Connect With Insight Heaven
          </h1>
          <div className="w-16 h-0.5 bg-gold-hairline mx-auto mb-4" />
          <p className="text-cream/80 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            We are based right by the shores of Dal Lake in Srinagar. Speak directly with a senior local travel planner today.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Channels & Office Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Action Box */}
            <div className="bg-white p-8 border border-gold-hairline shadow-luxury space-y-6">
              <div>
                <span className="eyebrow-label text-saffron block mb-1">
                  Instant Access
                </span>
                <h2 className="font-display text-2xl font-bold text-mountain-blue">
                  Speak Directly With Us
                </h2>
                <div className="w-12 h-0.5 bg-gold-hairline mt-2 mb-4" />
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Avoid long email wait times. We are active on WhatsApp and call throughout the day.
                </p>
              </div>

              {/* Click to Call CTA */}
              <div className="p-4 bg-cream-50 border border-gold-hairline/40 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-mountain-blue text-saffron flex items-center justify-center">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-subtle block">
                      Direct Telephone
                    </span>
                    <a
                      href={PHONE_TEL}
                      id="contact-page-call"
                      className="font-display text-lg font-bold text-mountain-blue hover:text-saffron transition-colors"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                <a
                  href={PHONE_TEL}
                  className="px-3.5 py-1.5 bg-mountain-blue text-cream text-[11px] uppercase tracking-wider font-semibold hover:bg-mountain-blue-dark transition-all"
                >
                  Call
                </a>
              </div>

              {/* Click to WhatsApp CTA */}
              <div className="p-4 bg-cream-50 border border-gold-hairline/40 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#25D366] text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-subtle block">
                      WhatsApp Concierge
                    </span>
                    <span className="text-xs text-charcoal font-semibold">
                      Instant Chat & Recommendations
                    </span>
                  </div>
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-page-whatsapp"
                  className="px-3.5 py-1.5 bg-[#25D366] text-white text-[11px] uppercase tracking-wider font-semibold hover:bg-[#20bd5a] transition-all"
                >
                  Chat
                </a>
              </div>

              {/* Click to Instagram CTA */}
              <div className="p-4 bg-cream-50 border border-gold-hairline/40 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center">
                    <InstagramIcon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-subtle block">
                      Instagram Stories & Reels
                    </span>
                    <span className="text-xs text-charcoal font-semibold">
                      {INSTAGRAM_HANDLE}
                    </span>
                  </div>
                </div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-page-instagram"
                  className="px-3.5 py-1.5 bg-gradient-to-r from-[#f09433] to-[#bc1888] text-white text-[11px] uppercase tracking-wider font-semibold hover:opacity-90 transition-all"
                >
                  Follow
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 text-xs text-charcoal-muted pt-2 border-t border-gold-hairline/20">
                <Mail className="w-4 h-4 text-saffron flex-shrink-0" />
                <span>Email: </span>
                <a
                  href={EMAIL_MAILTO}
                  className="text-mountain-blue font-semibold hover:underline"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>

            {/* Office & Operational Hours */}
            <div className="bg-white p-8 border border-gold-hairline/30 shadow-luxury space-y-5">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-saffron flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-base font-bold text-mountain-blue">
                    Srinagar Headquarters
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed mt-1">
                    {BRAND.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-gold-hairline/20">
                <Clock className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-base font-bold text-mountain-blue">
                    Working Hours
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-1">
                    Monday to Sunday: 8:00 AM – 10:00 PM IST
                  </p>
                  <p className="text-[11px] text-emerald-600 font-medium mt-0.5">
                    24/7 on-ground assistance for currently traveling guests
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Map Representation */}
            <div className="bg-white border border-gold-hairline/30 shadow-luxury overflow-hidden">
              <div className="p-4 bg-cream-100 border-b border-gold-hairline/20 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-mountain-blue">
                  Dal Lake, Srinagar
                </span>
                <span className="text-[11px] text-charcoal-subtle">
                  Boulevard Road
                </span>
              </div>
              <div className="aspect-[16/9] w-full bg-mountain-blue-deep relative overflow-hidden">
                <iframe
                  title="Srinagar Dal Lake Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105658.0772097964!2d74.77884107567848!3d34.08365615707019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855686e3c50d%3A0x6b8969446d3381a1!2sDal%20Lake%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 border border-gold-hairline shadow-luxury">
              <div className="mb-6">
                <span className="eyebrow-label text-saffron block mb-1">
                  Plan Your Trip
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-mountain-blue">
                  Send Us Your Travel Details
                </h2>
                <div className="w-12 h-0.5 bg-gold-hairline mt-2 mb-3" />
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Tell us your dream Kashmir experience, and our senior trip designer will craft a bespoke itinerary and transparent pricing estimate.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-mountain-blue">
                    Inquiry Received with Warmth
                  </h3>
                  <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-charcoal">{formData.name}</strong>. Our Srinagar concierge has received your details and will get back to you on <strong className="text-charcoal">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold shadow-md hover:bg-[#20bd5a] transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center px-6 py-3 border border-charcoal/20 text-charcoal text-xs uppercase tracking-wider font-semibold hover:bg-cream-200 transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1.5">
                        Your Name <span className="text-chinar-red">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-charcoal-subtle absolute left-3 top-3.5" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Vikramaditya Sharma"
                          className="w-full pl-9 pr-4 py-3 text-sm bg-cream-50 border border-gold-hairline/40 focus:border-saffron focus:bg-white outline-none text-charcoal transition-all placeholder:text-charcoal-subtle"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1.5">
                        WhatsApp / Phone <span className="text-chinar-red">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-charcoal-subtle absolute left-3 top-3.5" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-9 pr-4 py-3 text-sm bg-cream-50 border border-gold-hairline/40 focus:border-saffron focus:bg-white outline-none text-charcoal transition-all placeholder:text-charcoal-subtle"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Package Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-charcoal-subtle absolute left-3 top-3.5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="vikram@example.com"
                          className="w-full pl-9 pr-4 py-3 text-sm bg-cream-50 border border-gold-hairline/40 focus:border-saffron focus:bg-white outline-none text-charcoal transition-all placeholder:text-charcoal-subtle"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1.5">
                        Preferred Package
                      </label>
                      <select
                        name="packageInterest"
                        value={formData.packageInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm bg-cream-50 border border-gold-hairline/40 focus:border-saffron focus:bg-white outline-none text-charcoal transition-all cursor-pointer"
                      >
                        <option value="">Custom Tailored Kashmir Itinerary</option>
                        {PACKAGES.map((pkg) => (
                          <option key={pkg.id} value={pkg.name}>
                            {pkg.name} ({pkg.duration})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Dates & Travelers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1.5">
                        Expected Travel Month / Dates
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-charcoal-subtle absolute left-3 top-3.5" />
                        <input
                          type="text"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleChange}
                          placeholder="e.g. May 2025"
                          className="w-full pl-9 pr-4 py-3 text-sm bg-cream-50 border border-gold-hairline/40 focus:border-saffron focus:bg-white outline-none text-charcoal transition-all placeholder:text-charcoal-subtle"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1.5">
                        Number of Travelers
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-charcoal-subtle absolute left-3 top-3.5" />
                        <select
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleChange}
                          className="w-full pl-9 pr-4 py-3 text-sm bg-cream-50 border border-gold-hairline/40 focus:border-saffron focus:bg-white outline-none text-charcoal transition-all cursor-pointer"
                        >
                          <option value="2 Adults (Couple / Honeymoon)">2 Adults (Couple / Honeymoon)</option>
                          <option value="1 Solo Traveler">1 Solo Traveler</option>
                          <option value="Family with Kids (3-4 Guests)">Family with Kids (3-4 Guests)</option>
                          <option value="Group of Friends (5-8 Guests)">Group of Friends (5-8 Guests)</option>
                          <option value="Large Group (8+ Guests)">Large Group (8+ Guests)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1.5">
                      Your Preferences or Specific Requests
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. We would love a Dal lake luxury houseboat stay, Gondola Phase 2 tickets, and scenic walks in Pahalgam..."
                      className="w-full px-4 py-3 text-sm bg-cream-50 border border-gold-hairline/40 focus:border-saffron focus:bg-white outline-none text-charcoal transition-all placeholder:text-charcoal-subtle"
                    />
                  </div>

                  {/* Actions - Direct WhatsApp Submission */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#20bd5a] transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send Enquiry on WhatsApp</span>
                    </button>
                  </div>

                  <div className="pt-2 flex items-center justify-center space-x-2 text-[11px] text-charcoal-subtle">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your contact details are strictly confidential and never shared.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
