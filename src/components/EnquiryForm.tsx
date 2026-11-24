import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Sparkles, MessageCircle, User, Phone, Package, MapPin, AlignLeft } from 'lucide-react';
import { BRAND } from '../data/content';
import { FormData, FormErrors } from '../types';

export interface EnquiryFormHandle {
  setProduct: (productName: string) => void;
  focus: () => void;
}

interface EnquiryFormProps {
  initialProduct?: string;
}

export const EnquiryForm = forwardRef<EnquiryFormHandle, EnquiryFormProps>(({ initialProduct = '' }, ref) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    product: initialProduct || 'Fully Husked Coconut',
    quantity: '',
    destination: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  useImperativeHandle(ref, () => ({
    setProduct: (productName: string) => {
      setFormData(prev => ({ ...prev, product: productName }));
    },
    focus: () => {
      const el = document.getElementById('enquiry-fullname');
      if (el) el.focus();
    }
  }));

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (8-15 digits)';
    }

    if (!formData.product) {
      newErrors.product = 'Please select a product';
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Required quantity is required (e.g., 10,000 Pcs, 25 Tonnes)';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination location or port is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Exact professional message structure as specified
    const textLines = [
      "Hello SKY Traders,",
      "I would like to make a business enquiry.",
      `Name: ${formData.fullName.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Product: ${formData.product}`,
      `Quantity: ${formData.quantity.trim()}`,
      `Destination: ${formData.destination.trim()}`,
      "Message:",
      formData.message.trim() || "Please share current market price and minimum dispatch availability.",
      "Please share the current price, availability, and further details.",
      "Thank you."
    ];

    const finalMessage = textLines.join("\n");
    const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;

    // Show required notification: "Your enquiry is ready. Continue in WhatsApp to send your message."
    setShowSuccessNotification(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section id="enquiry" className="py-24 bg-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold/40 text-forest-deep text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Direct Commercial Enquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-deep tracking-tight">
            Wholesale Business <span className="italic font-normal text-leaf">Enquiry Form</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal/80 max-w-xl mx-auto leading-relaxed">
            Fill in your coconut requirements below. Your details will be formatted into an official enquiry and opened directly in WhatsApp.
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gold/30 shadow-luxury relative overflow-hidden">
          
          {/* Notification Toast as required */}
          <AnimatePresence>
            {showSuccessNotification && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-start gap-3 shadow-md"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <p className="font-bold text-emerald-900">Your enquiry is ready. Continue in WhatsApp to send your message.</p>
                  <p className="text-emerald-800 text-xs mt-0.5">Opening WhatsApp with your prefilled details now. Please press Send in WhatsApp.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label htmlFor="enquiry-fullname" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  <User className="w-4 h-4 text-leaf" />
                  <span>Full Name <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  id="enquiry-fullname"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal bg-cream-light/40 focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName ? 'border-red-400 focus:ring-red-300 bg-red-50/20' : 'border-gold/30 focus:border-forest focus:ring-gold/30'
                  }`}
                  required
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="enquiry-phone" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  <Phone className="w-4 h-4 text-leaf" />
                  <span>Phone Number <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="tel"
                  id="enquiry-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210 or +91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal bg-cream-light/40 focus:outline-none focus:ring-2 transition-all ${
                    errors.phone ? 'border-red-400 focus:ring-red-300 bg-red-50/20' : 'border-gold/30 focus:border-forest focus:ring-gold/30'
                  }`}
                  required
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Product Interested In Dropdown */}
              <div>
                <label htmlFor="enquiry-product" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  <Package className="w-4 h-4 text-leaf" />
                  <span>Product Interested In <span className="text-red-500">*</span></span>
                </label>
                <select
                  id="enquiry-product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gold/30 text-sm font-medium bg-cream-light/40 text-charcoal focus:outline-none focus:border-forest focus:ring-2 focus:ring-gold/30 transition-all"
                  required
                >
                  <option value="Fully Husked Coconut">Fully Husked Coconut</option>
                  <option value="Semi-Husked Coconut">Semi-Husked Coconut</option>
                  <option value="Coconut Shell">Coconut Shell</option>
                  <option value="Copra">Copra</option>
                </select>
                {errors.product && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.product}</span>
                  </p>
                )}
              </div>

              {/* Required Quantity */}
              <div>
                <label htmlFor="enquiry-quantity" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  <Sparkles className="w-4 h-4 text-leaf" />
                  <span>Required Quantity <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  id="enquiry-quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 15,000 Nuts or 20 Tons"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal bg-cream-light/40 focus:outline-none focus:ring-2 transition-all ${
                    errors.quantity ? 'border-red-400 focus:ring-red-300 bg-red-50/20' : 'border-gold/30 focus:border-forest focus:ring-gold/30'
                  }`}
                  required
                />
                {errors.quantity && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.quantity}</span>
                  </p>
                )}
              </div>

              {/* Destination / Location */}
              <div>
                <label htmlFor="enquiry-destination" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                  <MapPin className="w-4 h-4 text-leaf" />
                  <span>Destination / Location <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  id="enquiry-destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai, Delhi, Port, etc."
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal bg-cream-light/40 focus:outline-none focus:ring-2 transition-all ${
                    errors.destination ? 'border-red-400 focus:ring-red-300 bg-red-50/20' : 'border-gold/30 focus:border-forest focus:ring-gold/30'
                  }`}
                  required
                />
                {errors.destination && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.destination}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="enquiry-message" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-deep mb-2">
                <AlignLeft className="w-4 h-4 text-leaf" />
                <span>Message</span>
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention any specific quality parameters, bag packing preference, delivery schedule, etc."
                className="w-full px-4 py-3 rounded-xl border border-gold/30 text-sm text-charcoal bg-cream-light/40 focus:outline-none focus:border-forest focus:ring-2 focus:ring-gold/30 transition-all resize-y"
              />
            </div>

            {/* Submit Action Button as required */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 shadow-lg shadow-emerald-900/20 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-300 disabled:opacity-50"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{isSubmitting ? 'Preparing WhatsApp Enquiry...' : 'Send Enquiry on WhatsApp'}</span>
              </button>

              <p className="mt-3 text-xs text-charcoal/60">
                Direct trade desk destination: <strong className="text-forest-deep">+91 63808 49351</strong>. Your message will be prefilled automatically.
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
});

EnquiryForm.displayName = 'EnquiryForm';
