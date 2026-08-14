"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    service: "Wholesale Product Supply",
    quantity: "",
    city: "",
    requirements: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-all duration-300 animate-in fade-in">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-200 max-h-[90vh] flex flex-col transition-all duration-300 animate-in fade-in zoom-in-95">
        
        {/* Header (Dark Navy with Faint Texture & Glow) */}
        <div className="bg-[#06182F] text-white p-6 sm:p-7 flex items-center justify-between shrink-0 relative overflow-hidden">
          
          {/* Faint Dot Grid Texture Overlay (5% opacity) */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "12px 12px"
            }}
          />

          {/* Soft Radial Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F97316]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-[10px] font-black text-[#F97316] uppercase tracking-widest block mb-1">
              B2B INQUIRY FORM
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              GET A PRICE QUOTE
            </h2>
            <p className="text-xs text-[#B8C4D9] font-normal mt-1 max-w-md leading-relaxed">
              Tell us what products or services your business requires and we&apos;ll review your inquiry.
            </p>
          </div>

          {/* Close Button with Scale & Lighten Hover Effect */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 flex items-center justify-center text-white transition-all duration-200 cursor-pointer relative z-10 shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1 bg-white">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-[#06182F] uppercase tracking-tight">
                QUOTE INQUIRY RECEIVED
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto font-normal leading-relaxed">
                Thank you for reaching out to RJ Traders. Our B2B sales team will review your inquiry and contact you within 2 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4.5">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1.5 tracking-wider">
                    YOUR NAME <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-3.5 text-xs border border-gray-300/90 hover:border-gray-400 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1.5 tracking-wider">
                    COMPANY NAME <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter business/company name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full h-11 px-3.5 text-xs border border-gray-300/90 hover:border-gray-400 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1.5 tracking-wider">
                    PHONE NUMBER <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3.5 text-xs border border-gray-300/90 hover:border-gray-400 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1.5 tracking-wider">
                    EMAIL ADDRESS <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3.5 text-xs border border-gray-300/90 hover:border-gray-400 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Product Required & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1.5 tracking-wider">
                    PRODUCT / SERVICE REQUIRED <span className="text-[#F97316]">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-11 px-3.5 text-xs border border-gray-300/90 hover:border-gray-400 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200 bg-white font-semibold cursor-pointer"
                  >
                    <option value="Wholesale Product Supply">Wholesale Product Supply</option>
                    <option value="Engine Oils & Drums">Engine Oils & Drums</option>
                    <option value="Industrial Lubricants">Industrial Lubricants</option>
                    <option value="Packaging Services">Packaging Services</option>
                    <option value="Warehousing Solutions">Warehousing Solutions</option>
                    <option value="Nationwide Delivery">Nationwide Delivery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1.5 tracking-wider">
                    REQUIRED QUANTITY
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50 Drums, 500 Cartons"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full h-11 px-3.5 text-xs border border-gray-300/90 hover:border-gray-400 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 4: Delivery City */}
              <div>
                <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1.5 tracking-wider">
                  DELIVERY CITY <span className="text-[#F97316]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lahore, Karachi, Faisalabad, Rawalpindi"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full h-11 px-3.5 text-xs border border-gray-300/90 hover:border-gray-400 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200"
                />
              </div>

              {/* Row 5: Additional Requirements */}
              <div>
                <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1.5 tracking-wider">
                  ADDITIONAL REQUIREMENTS
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your bulk product specifications or packaging requirements..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full p-3.5 text-xs border border-gray-300/90 hover:border-gray-400 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200 resize-y min-h-[80px]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full h-12 bg-[#F97316] hover:bg-[#ea580c] hover:scale-[1.02] active:scale-95 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-[0_10px_25px_rgba(249,115,22,0.35)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
                >
                  <span>{submitted ? "SUBMITTING REQUEST..." : "SUBMIT QUOTE REQUEST"}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
