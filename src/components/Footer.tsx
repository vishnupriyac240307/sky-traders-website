import React from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { BRAND, PRODUCTS, createWhatsAppUrl, getProductWhatsAppUrl } from '../data/content';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-forest-deep text-cream border-t border-gold/30 relative overflow-hidden">
      {/* Decorative Gold Sheen at Top */}
      <div className="h-1 bg-gradient-to-r from-forest-light via-gold to-forest-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-forest-light/30">
          
          {/* Brand & About Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="inline-block focus:outline-none focus:ring-2 focus:ring-gold rounded-xl"
              aria-label="SKY Traders Home"
            >
              {/* Official Brand Logo with matching cream container for natural integration */}
              <Logo size="md" badge={true} />
            </a>

            <p className="text-xs sm:text-sm text-cream/80 leading-relaxed pr-4 font-normal">
              SKY Traders — Wholesale Coconut Trading &amp; Export Enquiries. Sourcing high-grade mature coconuts, semi-husked nuts, dried copra, and coconut shells directly from Udumalpet, Tamil Nadu.
            </p>

            {/* Social & Contact Shortcuts */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={createWhatsAppUrl("Hello SKY Traders, I am connecting from your website footer.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-200 border border-gold/20"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-200 border border-gold/20"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={BRAND.emailMailto}
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-gold-light hover:bg-gold hover:text-forest-deep transition-all duration-200 border border-gold/20"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-light border-b border-forest-light/40 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-cream/70 hover:text-gold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-gold/50">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-light border-b border-forest-light/40 pb-2">
              Product Categories
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <a
                    href={getProductWhatsAppUrl(prod.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 hover:text-gold transition-colors block group"
                  >
                    <span className="font-semibold group-hover:underline text-cream/90">{prod.name}</span>
                    <span className="block text-[11px] text-cream/50 mt-0.5">Price on Enquiry</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Exact Google Maps Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold-light border-b border-forest-light/40 pb-2">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-cream/80">
              {/* Exact Google Maps Location */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href={BRAND.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors block group"
                    title="View SKY Traders on Google Maps"
                  >
                    <strong className="block text-white group-hover:text-gold transition-colors font-semibold">
                      {BRAND.locationTitle}
                    </strong>
                    <span className="block text-cream/75 text-xs">
                      {BRAND.locationCity}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-gold-light font-semibold mt-1 group-hover:underline">
                      <span>View on Google Maps</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={BRAND.phoneTel} className="hover:text-gold transition-colors font-medium">
                  {BRAND.phoneDisplay}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href={createWhatsAppUrl("Hello SKY Traders, I would like to make a commercial enquiry.")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +91 63808 49351
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={BRAND.emailMailto} className="hover:text-gold transition-colors break-all">
                  {BRAND.email}
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a 
                  href={BRAND.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors"
                >
                  {BRAND.instagramHandle}
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar with exact required details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/70">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="font-semibold text-cream/90">
              SKY Traders — Wholesale Coconut Trading &amp; Export Enquiries
            </p>
            <p className="text-[11px] text-cream/60">
              Location: Udumalpet, Tamil Nadu, India
            </p>
          </div>

          <p className="text-center sm:text-right">
            &copy; 2026 SKY Traders. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
