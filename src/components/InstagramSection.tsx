import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND, INSTAGRAM_POSTS } from '../data/content';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-24 bg-coconut-white border-t border-cream-warm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-gold/40 text-forest-deep text-xs font-bold uppercase tracking-widest">
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span>Social Trading Channel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-deep tracking-tight">
            Follow Our <span className="italic font-normal text-leaf">Coconut Trading Updates.</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal/80 max-w-xl mx-auto leading-relaxed">
            Stay connected with SKY Coconuts for product updates, market information, and business enquiries.
          </p>

          {/* Social Profile Details: Icon, @sky_coconuts_, and "Follow on Instagram" button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cream border border-gold/30 text-forest-deep text-sm font-bold">
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>{BRAND.instagramHandle}</span>
            </div>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:brightness-110 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Authentic Coconut Photography Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <motion.a
              key={post.id}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden aspect-square border border-gold/30 bg-forest-dark shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={1200}
                height={896}
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-forest-deep/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-cream">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="px-2 py-0.5 rounded bg-gold/30 text-gold-light text-[10px] uppercase tracking-wider">
                    {post.tag}
                  </span>
                  <Instagram className="w-4 h-4 text-gold-light" />
                </div>

                <div>
                  <p className="text-xs text-cream/90 line-clamp-3 leading-snug">
                    {post.caption}
                  </p>
                  <p className="text-[10px] text-gold-light mt-2 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span>View on Instagram</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
