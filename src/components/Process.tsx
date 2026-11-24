import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, Boxes, CheckCircle2, Truck, Sparkles } from 'lucide-react';
import { TRADING_STEPS } from '../data/content';

export const Process: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-gold" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-gold" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-gold" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-gold" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-forest-dark via-forest to-forest-deep text-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-deep/80 border border-gold/30 text-gold-light text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Our Trading Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Simple. Reliable. <span className="italic font-normal text-gold-light">Business-Focused.</span>
          </h2>

          <p className="text-sm sm:text-base text-cream/80 max-w-2xl mx-auto leading-relaxed">
            A structured commercial workflow ensuring seamless communication, accurate grading, and reliable order dispatch from Udumalpet.
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Desktop Horizontal Timeline (hidden on mobile, visible on lg screens) */}
        <div className="hidden lg:block relative mb-16">
          {/* Horizontal Golden Connecting Track Line */}
          <div className="absolute top-20 left-16 right-16 h-0.5 bg-gradient-to-r from-gold/20 via-gold/70 to-gold/20 z-0" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {TRADING_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step Circle with Step Number & Icon */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-forest-deep border-2 border-gold/40 group-hover:border-gold flex items-center justify-center shadow-lg group-hover:shadow-gold-glow transition-all duration-300 transform group-hover:-translate-y-1">
                    {getIcon(step.iconName)}
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-gold-light to-gold-dark text-forest-deep text-[11px] font-black tracking-wider shadow">
                    {step.step}
                  </div>
                </div>

                {/* Step Card Content */}
                <div className="w-full bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-gold/20 group-hover:border-gold/50 group-hover:bg-white/10 transition-all duration-300 min-h-[170px] flex flex-col justify-start">
                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold-light transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-cream/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline (visible on screens below lg) */}
        <div className="lg:hidden relative pl-6 space-y-8 mb-16">
          {/* Vertical Golden Connecting Line */}
          <div className="absolute top-6 bottom-6 left-10 w-0.5 bg-gradient-to-b from-gold/50 via-gold to-gold/30 z-0" />

          {TRADING_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-start gap-5"
            >
              {/* Step Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-forest-deep border-2 border-gold/40 flex items-center justify-center shadow-md">
                  {getIcon(step.iconName)}
                </div>
                <div className="absolute -top-2 -right-1 px-1.5 py-0.5 rounded-full bg-gold text-forest-deep text-[10px] font-bold">
                  {step.step}
                </div>
              </div>

              {/* Step Details */}
              <div className="flex-1 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-gold/20">
                <h3 className="text-base font-serif font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-cream/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Natural Supporting Photographs of Coconut Handling & Wholesale Sourcing */}
        <div className="mt-12 pt-8 border-t border-forest-light/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="rounded-2xl overflow-hidden border border-gold/30 bg-forest-deep group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/assets/images/harvesting.jpg" 
                  alt="Coconut sourcing in Udumalpet" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={1200}
                  height={896}
                />
              </div>
              <div className="p-4 bg-forest-deep/90">
                <p className="text-xs font-bold text-gold-light uppercase tracking-wider">Step 01 — Direct Farm Sourcing</p>
                <p className="text-[11px] text-cream/70 mt-1">Sourcing mature coconuts directly from trusted Udumalpet growers.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold/30 bg-forest-deep group">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/assets/images/fresh_mature.jpg" 
                  alt="Coconut handling and quality grading" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={1200}
                  height={896}
                />
              </div>
              <div className="p-4 bg-forest-deep/90">
                <p className="text-xs font-bold text-gold-light uppercase tracking-wider">Step 02 &amp; 03 — Quality Grading</p>
                <p className="text-[11px] text-cream/70 mt-1">Strict grading according to husk state, weight, and shell thickness.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold/30 bg-forest-deep group sm:col-span-2 lg:col-span-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/assets/images/container_loading.jpg" 
                  alt="Wholesale coconut dispatch and logistics" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={1200}
                  height={896}
                />
              </div>
              <div className="p-4 bg-forest-deep/90">
                <p className="text-xs font-bold text-gold-light uppercase tracking-wider">Step 04 — Order Dispatch</p>
                <p className="text-[11px] text-cream/70 mt-1">Coordinated loading and transport for domestic markets &amp; export ports.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
