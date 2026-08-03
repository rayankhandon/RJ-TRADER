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
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#06182F] text-white p-6 flex items-center justify-between shrink-0">
          <div>
            <div className="text-[10px] font-black text-[#F97316] uppercase tracking-widest mb-1">
              B2B INQUIRY FORM
            </div>
            <h2 className="text-xl font-black uppercase tracking-tight font-sans">
              REQUEST A QUOTE
            </h2>
            <p className="text-xs text-gray-300 font-normal mt-1">
              Tell us what products or services your business requires and we'll review your inquiry.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#06182F] uppercase">
                QUOTE INQUIRY RECEIVED
              </h3>
              <p className="text-xs text-gray-600 max-w-md mx-auto font-normal">
                Thank you for reaching out to RJ Traders. Our B2B team will review your inquiry and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#F97316] focus:border-[#F97316] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter company name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#F97316] focus:border-[#F97316] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#F97316] focus:border-[#F97316] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#F97316] focus:border-[#F97316] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Product / Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#F97316] focus:border-[#F97316] outline-none bg-white"
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
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Required Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50 Drums, 500 Cartons"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#F97316] focus:border-[#F97316] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Delivery City *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lahore, Karachi, Faisalabad"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#F97316] focus:border-[#F97316] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Additional Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your bulk product specifications or packaging requirements..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#F97316] focus:border-[#F97316] outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-extrabold uppercase tracking-wider py-3 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>SUBMIT QUOTE REQUEST →</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
