import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle2, Calendar, Users, Phone, User, MapPin } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppLink } from '../constants/contact';
import { PACKAGES } from '../data/packages';

export default function EnquiryModal({ isOpen, onClose, preselectedPackageId }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelDate: '',
    travelers: '2 Adults',
    packageId: preselectedPackageId || '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedPackageId) {
      setFormData((prev) => ({ ...prev, packageId: preselectedPackageId }));
    }
  }, [preselectedPackageId]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectedPkg = PACKAGES.find((p) => p.id === formData.packageId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pkgName = selectedPkg ? selectedPkg.name : 'Custom Kashmir Itinerary';
    const text = `Hi Insight Heavens! I would like to enquire about a Kashmir trip:\n\n• Name: ${formData.name || 'Traveler'}\n• Phone: ${formData.phone || 'N/A'}\n• Package: ${pkgName}\n• Expected Dates: ${formData.travelDate || 'Flexible'}\n• Guests: ${formData.travelers}\n• Preferences: ${formData.notes || 'Please share customized itinerary and quote.'}`;
    window.open(getWhatsAppLink(text), '_blank');
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const pkgName = selectedPkg ? selectedPkg.name : 'Custom Kashmir Itinerary';
    const text = `Hi Insight Heavens! I would like to enquire about a Kashmir trip:\n\n• Name: ${formData.name || 'Traveler'}\n• Phone: ${formData.phone || 'N/A'}\n• Package: ${pkgName}\n• Expected Dates: ${formData.travelDate || 'Flexible'}\n• Guests: ${formData.travelers}\n• Preferences: ${formData.notes || 'Please share customized itinerary and quote.'}`;
    window.open(getWhatsAppLink(text), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-cream w-full max-w-lg shadow-2xl border border-gold-hairline relative overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Border Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-mountain-blue via-saffron to-gold-hairline" />

        {/* Modal Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gold-hairline/20 flex items-start justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-eyebrow uppercase text-saffron block mb-1">
              Insight Heaven Concierge
            </span>
            <h3 className="font-display text-2xl font-bold text-mountain-blue">
              Plan Your Kashmir Journey
            </h3>
            <p className="text-xs text-charcoal-muted mt-0.5">
              Personalized itineraries crafted by native Kashmiri specialists.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-charcoal-subtle hover:text-charcoal p-1 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-mountain-blue">
                Thank You, {formData.name || 'Friend'}!
              </h4>
              <p className="text-sm text-charcoal-muted max-w-sm mx-auto leading-relaxed">
                Your enquiry has been received. Our senior valley concierge will review your travel details and connect with you on <strong className="text-charcoal">{formData.phone || 'your phone'}</strong> within 2 hours.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold shadow-md hover:bg-[#20bd5a] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Now on WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 border border-charcoal/20 text-charcoal text-xs uppercase tracking-wider font-semibold hover:bg-cream-200 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1">
                  Full Name <span className="text-chinar-red">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-charcoal-subtle absolute left-3 top-3" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gold-hairline/40 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none text-charcoal transition-all placeholder:text-charcoal-subtle/70"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1">
                  WhatsApp / Phone Number <span className="text-chinar-red">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-charcoal-subtle absolute left-3 top-3" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gold-hairline/40 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none text-charcoal transition-all placeholder:text-charcoal-subtle/70"
                  />
                </div>
              </div>

              {/* Package Select */}
              <div>
                <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1">
                  Select Preferred Package
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-charcoal-subtle absolute left-3 top-3" />
                  <select
                    name="packageId"
                    value={formData.packageId}
                    onChange={handleChange}
                    className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gold-hairline/40 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none text-charcoal transition-all cursor-pointer"
                  >
                    <option value="">Custom Tailored Kashmir Itinerary</option>
                    {PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} ({pkg.duration})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dates & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1">
                    Travel Dates / Month
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-charcoal-subtle absolute left-3 top-3" />
                    <input
                      type="text"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      placeholder="e.g. Mid-April 2025"
                      className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gold-hairline/40 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none text-charcoal transition-all placeholder:text-charcoal-subtle/70"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-charcoal-subtle absolute left-3 top-3" />
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gold-hairline/40 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none text-charcoal transition-all cursor-pointer"
                    >
                      <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                      <option value="1 Solo Traveler">1 Solo Traveler</option>
                      <option value="Family (2 Adults + 1-2 Kids)">Family (2 Adults + Kids)</option>
                      <option value="Group of 4-6 Friends">Group of 4-6 Friends</option>
                      <option value="Large Group (7+ Guests)">Large Group (7+ Guests)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs uppercase font-medium tracking-wider text-charcoal mb-1">
                  Preferences or Special Requests
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Dal Lake houseboat stay, Gondola Phase 2 tickets, honeymoon decor..."
                  className="w-full px-4 py-2 text-sm bg-white border border-gold-hairline/40 focus:border-saffron focus:ring-1 focus:ring-saffron outline-none text-charcoal transition-all placeholder:text-charcoal-subtle/70"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#20bd5a] transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-charcoal-subtle text-center pt-1">
                Prefer to talk now? Call us directly at{' '}
                <a href={`tel:+917051933349`} className="text-saffron font-semibold underline">
                  {PHONE_NUMBER}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
