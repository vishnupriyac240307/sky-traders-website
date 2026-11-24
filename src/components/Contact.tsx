import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, MessageCircle, ExternalLink, Sparkles, Globe, Navigation } from 'lucide-react';
import { BRAND, createWhatsAppUrl } from '../data/content';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-cream/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-gold/40 text-forest-deep text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Direct Commercial Connect</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-deep tracking-tight">
            Contact <span className="italic font-normal text-leaf">SKY Traders</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal/80 max-w-xl mx-auto leading-relaxed">
            Reach out to our trade desk in Udumalpet, Tamil Nadu for wholesale pricing, container order specifications, or farm visits.
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Contact Grid: Cards on left, Location Card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-gold/25 shadow-sm hover:border-gold transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-dark flex items-center justify-center flex-shrink-0 text-gold shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-leaf">Phone / WhatsApp</span>
                  <div className="mt-1">
                    <a
                      href={BRAND.phoneTel}
                      className="text-base sm:text-lg font-bold text-forest-deep hover:text-leaf transition-colors"
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <a
                      href={createWhatsAppUrl("Hello SKY Traders, I am connecting regarding wholesale coconut supply.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href={BRAND.phoneTel}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-forest-deep bg-cream hover:bg-cream-warm transition-colors border border-gold/30"
                    >
                      <span>Direct Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-gold/25 shadow-sm hover:border-gold transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-dark flex items-center justify-center flex-shrink-0 text-gold shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-leaf">Email Address</span>
                  <div className="mt-1">
                    <a
                      href={BRAND.emailMailto}
                      className="text-base sm:text-lg font-bold text-forest-deep hover:text-leaf transition-colors break-all"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                  <p className="text-xs text-charcoal/60 mt-1">Official commercial correspondence &amp; contract enquiries</p>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-white p-6 rounded-2xl border border-gold/25 shadow-sm hover:border-gold transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-dark flex items-center justify-center flex-shrink-0 text-pink-400 shadow-sm">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-leaf">Instagram</span>
                  <div className="mt-1">
                    <a
                      href={BRAND.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-forest-deep hover:text-pink-600 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{BRAND.instagramHandle}</span>
                      <ExternalLink className="w-4 h-4 text-charcoal/40" />
                    </a>
                  </div>
                  <p className="text-xs text-charcoal/60 mt-1">Follow for daily harvesting and coconut supply updates</p>
                </div>
              </div>
            </div>

            {/* Business Location Card */}
            <div className="bg-white p-6 rounded-2xl border border-gold/25 shadow-sm hover:border-gold transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-dark flex items-center justify-center flex-shrink-0 text-gold shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-leaf">Business Location</span>
                  
                  {/* Clickable Location opening exact Google Maps link */}
                  <a
                    href={BRAND.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group mt-1"
                    title="Click to view SKY Traders on Google Maps"
                  >
                    <strong className="text-base sm:text-lg font-bold text-forest-deep group-hover:text-leaf transition-colors block leading-snug">
                      SKY Traders
                    </strong>
                    <span className="text-sm text-charcoal/85 font-medium block">
                      Udumalpet, Tamil Nadu, India
                    </span>
                  </a>

                  {/* Explicit View Location on Google Maps Button */}
                  <div className="mt-3">
                    <a
                      href={BRAND.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-forest-deep bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-110 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>View Location on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Location Showcase & Official Map Integration */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-3xl overflow-hidden border border-gold/30 shadow-luxury flex-1 flex flex-col">
              
              {/* Card Header Bar */}
              <div className="p-5 bg-forest-dark text-cream flex items-center justify-between border-b border-gold/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-gold border border-gold/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">SKY Traders</h3>
                    <p className="text-xs text-cream/80">Udumalpet, Tamil Nadu, India</p>
                  </div>
                </div>

                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-forest-deep bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-110 shadow-sm transition-colors"
                >
                  <span>View Location on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Location Card Body with Real Farm Visual & Interactive Map */}
              <div className="relative flex-1 min-h-[360px] sm:min-h-[420px] bg-cream-warm flex flex-col">
                <iframe
                  title="SKY Traders Udumalpet Location Map"
                  src={BRAND.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full flex-1 min-h-[300px]"
                />
              </div>

              {/* Map Footer & Direct Action */}
              <div className="p-4 bg-cream/70 border-t border-gold/20 flex flex-wrap items-center justify-between gap-3 text-xs text-charcoal/80">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-leaf flex-shrink-0" />
                  <span className="font-medium">Direct wholesale supply across India &amp; overseas export dispatch</span>
                </div>
                
                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-forest-deep hover:text-leaf transition-colors bg-white px-3 py-1.5 rounded-lg border border-gold/30 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-gold" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
