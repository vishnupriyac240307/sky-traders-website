import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Sparkles, Scale, Info, Tag } from 'lucide-react';
import { PRODUCTS, getProductWhatsAppUrl } from '../data/content';
import { Product } from '../types';

interface ProductsProps {
  onSelectProductForEnquiry: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProductForEnquiry }) => {
  return (
    <section id="products" className="py-24 bg-coconut-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-gold/40 text-forest-deep text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Product Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-deep tracking-tight">
            Premium Coconut <span className="italic font-normal text-leaf">Wholesale Catalogue</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            Directly from Udumalpet, Tamil Nadu. Carefully graded and prepared to meet rigorous commercial standards for domestic wholesale trading and export supply.
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Pricing Transparency Note */}
        <div className="mb-12 max-w-2xl mx-auto bg-cream/70 border border-gold/30 rounded-2xl p-4 flex items-center gap-3.5 text-xs sm:text-sm text-forest-deep shadow-sm">
          <Info className="w-5 h-5 text-gold flex-shrink-0" />
          <p>
            <strong className="font-bold text-forest-deep">Commodity Market Pricing:</strong> In accordance with real-time agricultural market rates, live prices are provided on direct enquiry based on requested volume, grade, and destination.
          </p>
        </div>

        {/* Product Cards Grid: 2 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PRODUCTS.map((product: Product, index: number) => {
            const whatsappUrl = getProductWhatsAppUrl(product.name);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gold/25 shadow-luxury hover:shadow-luxury-hover hover:border-gold transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Product Photography Container */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-forest-dark">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={1200}
                      height={896}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-transparent to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-forest-deep/90 text-gold-light border border-gold/30 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {product.availability}
                      </span>

                      {/* Explicit "Price on Enquiry" Badge on Image Top-Right */}
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-cream text-forest-deep border border-gold/50 shadow-md">
                        <Tag className="w-3.5 h-3.5 text-gold" />
                        <span>Price on Enquiry</span>
                      </span>
                    </div>

                    {/* Product Name Overlay */}
                    <div className="absolute bottom-4 left-5 right-5 text-cream">
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide drop-shadow-sm">
                        {product.name}
                      </h3>
                      <p className="text-xs text-cream/90 mt-1 font-sans">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-5">
                    {/* Primary Short Description as required */}
                    <div className="bg-cream/50 p-4 rounded-xl border border-gold/20">
                      <p className="text-sm font-semibold text-forest-deep leading-relaxed">
                        "{product.description}"
                      </p>
                    </div>

                    {/* Prominent Price On Enquiry Row */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-forest-dark text-cream border border-gold/30">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-cream/70 uppercase tracking-wider font-semibold">Pricing Structure:</span>
                        <span className="text-sm font-bold text-gold-light">Price on Enquiry</span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-medium">Real-time market rate</span>
                    </div>

                    {/* Specifications List */}
                    <div className="space-y-2 pt-1">
                      <p className="text-[11px] uppercase font-bold tracking-widest text-leaf">
                        Wholesale Specifications
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {product.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="bg-coconut-white p-2.5 rounded-lg border border-gold/15">
                            <span className="block text-charcoal/60 text-[10px] uppercase font-medium">{spec.label}</span>
                            <span className="font-semibold text-forest-deep">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Packaging Info */}
                    <div className="flex items-start gap-2 text-xs text-charcoal/80 bg-cream/40 p-3 rounded-xl border border-gold/15">
                      <Scale className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span><strong className="text-forest-deep font-semibold">Packaging:</strong> {product.packaging}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-7 pt-0 border-t border-cream-warm flex flex-col sm:flex-row gap-3">
                  {/* Request Price Button */}
                  <button
                    onClick={() => onSelectProductForEnquiry(product.name)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-forest-deep bg-cream hover:bg-cream-warm border border-gold/40 hover:border-gold transition-all duration-300 shadow-sm"
                  >
                    <FileText className="w-4 h-4 text-leaf" />
                    <span>Request Price</span>
                  </button>

                  {/* WhatsApp Enquiry Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 shadow-md hover:shadow-emerald-900/20 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
