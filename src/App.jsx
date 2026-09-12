import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import InstagramButton from './components/InstagramButton';
import EnquiryModal from './components/EnquiryModal';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Packages from './pages/Packages';
import PackageDetail from './pages/PackageDetail';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState('');

  const handleOpenEnquiry = (packageId = '') => {
    setSelectedPackageId(packageId);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
    setSelectedPackageId('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream selection:bg-saffron selection:text-white">
      <ScrollToTop />

      {/* Sticky Header */}
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Page Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/packages" element={<Packages onOpenEnquiry={handleOpenEnquiry} />} />
          <Route
            path="/packages/:id"
            element={<PackageDetail onOpenEnquiry={handleOpenEnquiry} />}
          />
          <Route
            path="/destinations"
            element={<Destinations onOpenEnquiry={handleOpenEnquiry} />}
          />
          <Route path="/about" element={<About onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instagram Action Button */}
      <InstagramButton />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Global Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={handleCloseEnquiry}
        preselectedPackageId={selectedPackageId}
      />
    </div>
  );
}
