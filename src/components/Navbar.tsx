import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { BRAND, createWhatsAppUrl } from '../data/content';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const sections = ['home', 'about', 'products', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Our Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream shadow-md border-b border-gold/30 py-2.5 sm:py-3' 
          : 'bg-cream/90 backdrop-blur-sm border-b border-gold/20 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Cream Surface Blend */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center focus:outline-none focus:ring-2 focus:ring-gold rounded-xl transition-transform duration-200 hover:scale-[1.02]"
            aria-label="SKY Traders Home"
          >
            <Logo size="md" badge={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-2 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 relative group ${
                    isActive 
                      ? 'text-forest-deep bg-cream-warm/70' 
                      : 'text-forest-dark/85 hover:text-forest-deep hover:bg-cream-warm/40'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-gold transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} 
                  />
                </a>
              );
            })}
          </nav>

          {/* Action Buttons Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={createWhatsAppUrl("Hello SKY Traders, I would like to enquire about wholesale coconut supply.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 border border-forest/20 text-forest-deep hover:border-forest/50 hover:bg-forest/5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-widest text-forest-deep bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-110 shadow-md hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: WhatsApp Quick Shortcut + Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={createWhatsAppUrl("Hello SKY Traders, I have an urgent wholesale coconut enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Enquiry"
              className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-forest-deep bg-cream-warm/80 hover:bg-cream-warm transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream border-t border-gold/30 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="max-w-7xl mx-auto px-4 pt-4 pb-6 space-y-3">
            
            {/* Brand Logo in Mobile Navigation */}
            <div className="pb-3 border-b border-gold/20 flex justify-center">
              <Logo size="md" badge={true} />
            </div>

            {/* Navigation Links */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-4 py-3 text-base font-semibold rounded-xl transition-colors ${
                      isActive 
                        ? 'text-forest-deep bg-cream-warm/80 border-l-4 border-gold font-bold' 
                        : 'text-charcoal hover:text-forest-deep hover:bg-cream-warm/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-gold/20 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold uppercase tracking-wider text-xs text-forest-deep bg-gradient-to-r from-gold-light via-gold to-gold-dark shadow-md"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={createWhatsAppUrl("Hello SKY Traders, I would like to make an enquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={BRAND.phoneTel}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold text-forest-deep bg-cream-warm hover:bg-cream-dark transition-colors border border-gold/30"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
