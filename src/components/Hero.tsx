import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, MapPin, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND, createWhatsAppUrl } from '../data/content';

export const Hero: React.FC = () => {
  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#products');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-cream via-cream-light to-coconut-white overflow-hidden flex items-center">
      {/* Background Subtle Organic & Botanical Highlights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust Indicator Label Pill as required */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/5 border border-forest/15 text-forest-deep text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Udumalpet, Tamil Nadu | Wholesale Coconut Trading</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-forest-deep leading-[1.14] tracking-tight">
              Connecting <span className="italic font-normal text-leaf">Quality Coconuts</span> to Global Markets.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-charcoal/85 max-w-2xl leading-relaxed font-normal">
              Your trusted partner in wholesale coconut trading and exports, delivering coconut products from Udumalpet, Tamil Nadu, to buyers across India and beyond.
            </p>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2 text-xs font-semibold text-forest-dark">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Wholesale Coconut Trading</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Quality-Focused Sourcing</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <span>India-Wide &amp; Export</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#products"
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase text-forest-deep bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-110 shadow-lg shadow-gold/25 hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppUrl("Hello SKY Traders, I would like to enquire about your wholesale coconut products and supply.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-forest-deep bg-white border border-forest/20 hover:border-forest/50 hover:bg-forest/5 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Premium Commercial Photography Presentation */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            {/* Main Image Frame with Gold Accents */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Border Ring */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-gold/30 via-transparent to-leaf/30 opacity-70 blur-[1px]" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/40 bg-forest-dark aspect-[4/3] sm:aspect-[5/4]">
                <img 
                  src="/assets/images/farm_udumelpet.jpg" 
                  alt="SKY Traders Coconut Plantation in Udumalpet, Tamil Nadu"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  width={1200}
                  height={896}
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Image Overlay Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-cream p-3 rounded-xl bg-forest-dark/80 backdrop-blur-md border border-gold/30 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gold-light font-bold">Plantation Origin</p>
                    <p className="text-sm font-semibold text-white">Udumalpet Coconut Groves, Tamil Nadu</p>
                  </div>
                  <Sparkles className="w-5 h-5 text-gold animate-pulse flex-shrink-0" />
                </div>
              </div>

              {/* Floating Quality Badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 sm:-left-8 bg-cream p-4 rounded-2xl shadow-xl border border-gold/40 flex items-center gap-3.5 max-w-[250px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center flex-shrink-0 text-gold shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest-deep uppercase tracking-wider">Quality Focused</p>
                  <p className="text-[11px] text-charcoal/80 leading-snug">Carefully selected mature wholesale grades</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
