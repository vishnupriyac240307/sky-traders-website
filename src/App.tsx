import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { About } from './components/About';
import { Products } from './components/Products';
import { Process } from './components/Process';
import { WhyChoose } from './components/WhyChoose';
import { WhatsAppEnquiryBanner } from './components/WhatsAppEnquiryBanner';
import { EnquiryForm, EnquiryFormHandle } from './components/EnquiryForm';
import { InstagramSection } from './components/InstagramSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteModalProduct, setQuoteModalProduct] = useState('Fully Husked Coconut');
  const enquiryFormRef = useRef<EnquiryFormHandle>(null);

  const handleSelectProductForEnquiry = (productName: string) => {
    // Set the product in the enquiry form
    if (enquiryFormRef.current) {
      enquiryFormRef.current.setProduct(productName);
      enquiryFormRef.current.focus();
    }
    // Scroll smoothly to the enquiry form section
    const enquirySection = document.querySelector('#enquiry');
    if (enquirySection) {
      const offsetTop = enquirySection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenQuoteModal = (productName?: string) => {
    if (productName) {
      setQuoteModalProduct(productName);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-coconut-white text-charcoal flex flex-col selection:bg-gold selection:text-white">
      {/* Sticky Premium Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Business Highlights Cards */}
        <Highlights />

        {/* About SKY Traders */}
        <About />

        {/* Product Showcase */}
        <Products onSelectProductForEnquiry={handleSelectProductForEnquiry} />

        {/* Our Trading Process */}
        <Process />

        {/* Why Choose SKY Traders */}
        <WhyChoose />

        {/* Prominent WhatsApp Enquiry Banner */}
        <WhatsAppEnquiryBanner />

        {/* Interactive WhatsApp Enquiry Form */}
        <EnquiryForm ref={enquiryFormRef} />

        {/* Instagram Integration */}
        <InstagramSection />

        {/* Contact Section & Udumalpet Location Map */}
        <Contact />
      </main>

      {/* Deep Forest-Green Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Fast Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedProduct={quoteModalProduct}
      />
    </div>
  );
};

export default App;
