import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppUrl } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = createWhatsAppUrl(
    "Hello SKY Traders, I am browsing your website and would like to enquire about wholesale coconut supply and current market rates."
  );

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Floating Prompt Tooltip */}
      {isOpen && (
        <div className="mb-3 max-w-[280px] sm:max-w-xs bg-white p-4 rounded-2xl shadow-2xl border border-gold/40 text-charcoal animate-in slide-in-from-bottom-3 duration-300 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-charcoal/40 hover:text-charcoal p-1 rounded-md"
            aria-label="Close tooltip"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <p className="text-xs font-bold text-forest-deep uppercase tracking-wider">SKY Traders WhatsApp</p>
          </div>
          
          <p className="text-xs text-charcoal/80 leading-relaxed mb-3">
            Wholesale coconut enquiries, volume quotes, and availability checks.
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Directly Now</span>
          </a>
        </div>
      )}

      {/* Floating Circular Action Button */}
      <div className="relative group">
        {/* Pulsing Aura */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-25 group-hover:opacity-50 animate-ping pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsOpen(true)}
          aria-label="Chat with SKY Traders on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/30 border-2 border-white transition-transform duration-300 transform group-hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </aside>
  );
};
