import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { BRAND, createWhatsAppUrl } from '../data/content';

export const WhatsAppEnquiryBanner: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    "Hello SKY Traders, I am looking for coconut products in bulk and would like to discuss availability, quantity, and pricing."
  );

  return (
    <section className="py-20 bg-forest-dark relative overflow-hidden text-cream border-y border-gold/30">
      {/* Decorative gradient glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-leaf/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest border border-gold/40 text-gold-light text-xs font-bold uppercase tracking-widest">
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>Direct Trade Desk</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
          Let's Discuss Your <span className="italic font-normal text-gold-light">Coconut Requirements.</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-cream/90 max-w-2xl mx-auto leading-relaxed">
          Looking for coconut products in bulk? Contact SKY Traders directly to discuss product availability, quantity, pricing, and business enquiries.
        </p>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base uppercase tracking-wider text-forest-deep bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-110 shadow-xl shadow-gold/25 hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 text-forest-deep" />
            <span>Chat with SKY Traders on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={BRAND.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-cream bg-white/10 hover:bg-white/15 border border-gold/30 transition-all duration-300"
          >
            <PhoneCall className="w-4 h-4 text-gold" />
            <span>Call {BRAND.phoneDisplay}</span>
          </a>
        </div>

        <p className="text-xs text-cream/60 pt-2">
          WhatsApp: +91 63808 49351 • Swift response during commodity market hours
        </p>

      </div>
    </section>
  );
};
