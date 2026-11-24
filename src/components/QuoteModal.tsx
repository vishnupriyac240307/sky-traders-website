import React, { useState } from 'react';
import { X, MessageCircle, ArrowRight, Package, User, Phone, MapPin, Sparkles } from 'lucide-react';
import { BRAND } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose,
  selectedProduct = 'Fully Husked Coconut' 
}) => {
  const [product, setProduct] = useState(selectedProduct);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('');
  const [destination, setDestination] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !quantity.trim() || !destination.trim()) {
      setError('Please fill in all required fields to generate your quote.');
      return;
    }

    const message = [
      "Hello SKY Traders,",
      "I would like to request an official wholesale quote.",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Product: ${product}`,
      `Quantity: ${quantity.trim()}`,
      `Destination: ${destination.trim()}`,
      "Please provide the current rate, packing terms, and estimated dispatch timeline.",
      "Thank you."
    ].join("\n");

    const url = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-deep/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gold/40 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal/50 hover:text-charcoal hover:bg-cream transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-gold/30 text-forest text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Fast Wholesale Quote</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-forest-deep">
            Request Price &amp; Volume Quote
          </h3>
          <p className="text-xs text-charcoal/70">
            Send your requirement directly to our Udumalpet desk on WhatsApp for instant confirmation.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-1">
              Select Product *
            </label>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gold/30 text-sm font-medium bg-cream-light/40 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30"
            >
              <option value="Fully Husked Coconut">Fully Husked Coconut</option>
              <option value="Semi-Husked Coconut">Semi-Husked Coconut</option>
              <option value="Coconut Shell">Coconut Shell</option>
              <option value="Copra">Copra</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ramesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gold/30 text-sm bg-cream-light/40 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gold/30 text-sm bg-cream-light/40 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-1">
                Required Volume *
              </label>
              <input
                type="text"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g. 10,000 Pcs"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gold/30 text-sm bg-cream-light/40 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-forest-deep mb-1">
                Destination *
              </label>
              <input
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Chennai / Dubai"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gold/30 text-sm bg-cream-light/40 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-forest-deep bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-110 shadow-md transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-forest-deep" />
              <span>Generate Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-charcoal/60 mt-2">
              Opens WhatsApp chat with the pre-filled quote request.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
