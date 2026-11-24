import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Briefcase, MessageCircle, TrendingUp, Anchor, Handshake, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/content';

export const WhyChoose: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-gold" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-gold" />;
      case 'MessageCircle':
        return <MessageCircle className="w-6 h-6 text-gold" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-gold" />;
      case 'Anchor':
        return <Anchor className="w-6 h-6 text-gold" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-gold" />;
      default:
        return <Layers className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-cream/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-gold/40 text-forest-dark text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-deep tracking-tight">
            Your Reliable <span className="italic font-normal text-leaf">Coconut Trading Partner.</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            We provide wholesale buyers with straightforward trade execution, dependable commodity sourcing, and dedicated communication.
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* 6 Cards Grid (3x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-7 rounded-2xl border border-gold/25 shadow-sm hover:border-gold hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-forest-dark flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-forest-deep mb-2.5 group-hover:text-leaf transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-cream-warm flex items-center text-xs font-semibold text-leaf">
                <span className="w-2 h-2 rounded-full bg-gold mr-2" />
                <span>Commercial Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
