import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Handshake, Shield, Sparkles, Globe, Layers, Truck, PackageCheck } from 'lucide-react';
import { BRAND } from '../data/content';

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Wholesale Coconut Trading",
      desc: "Specialized bulk supply handling commercial requirements for traders, manufacturers, and millers.",
      icon: PackageCheck,
    },
    {
      title: "Multiple Coconut Product Categories",
      desc: "Comprehensive selection covering fully husked coconuts, semi-husked, coconut shells, and copra.",
      icon: Layers,
    },
    {
      title: "Domestic Supply",
      desc: "Seamless logistics coordination delivering bulk coconut consignments to markets across India.",
      icon: Truck,
    },
    {
      title: "Export Enquiries",
      desc: "Equipped to handle international buyer requirements with compliant packaging and transparent communication.",
      icon: Globe,
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream-light/60 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-leaf/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-gold/40 text-forest-deep text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>About SKY Traders</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-deep tracking-tight">
            Rooted in Quality. <span className="italic font-normal text-leaf">Driven by Trust.</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Two Column Layout: Story & Real Agricultural Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Pillars */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Primary Required Paragraph */}
            <p className="text-lg sm:text-xl font-serif text-forest-deep leading-relaxed border-l-4 border-gold pl-5 py-1 bg-cream/40 rounded-r-xl">
              "SKY Traders is a wholesale coconut trading business based in Udumalpet, Tamil Nadu. We deal in a range of coconut products and focus on reliable sourcing, quality-conscious trading, and building long-term business relationships with buyers."
            </p>

            <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
              Situated in the heart of the renowned Udumalpet agricultural belt, SKY Traders leverages geographical advantages, optimal soil conditions, and deep relationships with local plantation networks. We bridge regional coconut growers with domestic and international commercial markets, fostering partnerships built on integrity, market-based pricing, and dependable coordination.
            </p>

            {/* 4 Pillars Grid as specified */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-gold/20 shadow-sm hover:border-gold/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-forest/5 flex items-center justify-center flex-shrink-0 text-leaf">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-forest-deep mb-1">{item.title}</h4>
                        <p className="text-xs text-charcoal/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Business Relationships with Buyers and Suppliers Box */}
            <div className="p-4 rounded-xl bg-forest-dark text-cream flex items-center gap-4 border border-gold/30 shadow-md">
              <div className="w-10 h-10 rounded-lg bg-leaf/30 flex items-center justify-center flex-shrink-0 text-gold">
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-gold-light tracking-wider">Commercial Relationships</p>
                <p className="text-xs sm:text-sm text-cream/90 leading-snug">
                  Building long-term business relationships with buyers and suppliers through honest grading, transparent pricing, and punctual execution.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Composition with real farm photos */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold/30 to-leaf/30 rounded-3xl blur-sm" />
              
              {/* Main Photo: Real Coconut Harvesting & Processing in Udumalpet */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/40 aspect-[4/5] bg-forest-dark">
                <img 
                  src="/assets/images/harvesting.jpg" 
                  alt="Harvesting coconuts in Udumalpet, Tamil Nadu"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={1200}
                  height={896}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/20 to-transparent pointer-events-none" />
                
                {/* Embedded Information Tag */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-cream/95 backdrop-blur-md border border-gold/40 shadow-lg text-forest-deep">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-leaf" />
                    <span className="text-xs font-bold uppercase tracking-wider text-leaf">Agricultural Authenticity</span>
                  </div>
                  <p className="text-xs text-charcoal leading-relaxed">
                    Sourced from Udumalpet groves, recognized across India for rich kernel density, thick copra meat, and superior coconut shell quality.
                  </p>
                </div>
              </div>

              {/* Secondary Corner Accent Image */}
              <div className="hidden sm:block absolute -top-8 -right-8 w-36 h-36 rounded-2xl overflow-hidden border-2 border-cream shadow-xl rotate-3">
                <img 
                  src="/assets/images/fresh_mature.jpg" 
                  alt="Fresh mature coconuts"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={896}
                />
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
