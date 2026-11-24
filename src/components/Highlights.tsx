import React from 'react';
import { motion } from 'framer-motion';
import { PackageCheck, ShieldCheck, Truck, Globe2 } from 'lucide-react';
import { HIGHLIGHTS } from '../data/content';

export const Highlights: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-gold" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-gold" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-gold" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-gold" />;
      default:
        return <PackageCheck className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {HIGHLIGHTS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white p-6 rounded-2xl border border-gold/25 shadow-lg shadow-forest-dark/5 hover:border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Top Row: Icon Container & Pill */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-forest-dark flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                {getIcon(item.icon)}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-cream text-forest-deep border border-gold/20">
                {item.subtitle}
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-bold text-forest-deep mb-2 group-hover:text-leaf transition-colors duration-200">
              {item.title}
            </h3>
            <p className="text-xs text-charcoal/75 leading-relaxed">
              {item.description}
            </p>

            {/* Subtle Bottom Gold Accent line */}
            <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
