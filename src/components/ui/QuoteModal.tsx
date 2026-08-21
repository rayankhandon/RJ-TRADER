"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, AlertCircle, Package, Sparkles } from "lucide-react";
import { sendWholesaleQuote } from "@/lib/emailService";

export interface ProductContext {
  id?: string;
  name?: string;
  title?: string;
  category?: string;
  categoryName?: string;
}

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: ProductContext | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialProduct }) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    city: "",
    productName: "",
    category: "",
    productId: "",
    quantity: "",
    requirements: "",
  });

  useEffect(() => {
    if (isOpen) {
      setSubmitSuccess(false);
      setSubmitError(null);
      setIsSubmitting(false);
      setHoneypot("");

      const prodName = initialProduct?.name || initialProduct?.title || "";
      const catName = initialProduct?.categoryName || initialProduct?.category || "";
      const prodId = initialProduct?.id || "";

      setFormData({
        name: "",
        companyName: "",
        phone: "",
        email: "",
        city: "",
        productName: prodName,
        category: catName,
        productId: prodId,
        quantity: "",
        requirements: "",
      });
    }
  }, [isOpen, initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Spam protection: Honeypot check
    if (honeypot.trim() !== "") {
      setSubmitSuccess(true);
      return;
    }

    // 2. Client-side field validations
    if (
      !formData.name.trim() ||
      !formData.companyName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.city.trim()
    ) {
      setSubmitError("Please fill in all required fields marked with *");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await sendWholesaleQuote({
        name: formData.name.trim(),
        companyName: formData.companyName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        city: formData.city.trim(),
        productName: formData.productName.trim() || "General Wholesale Inquiry",
        category: formData.category.trim(),
        productId: formData.productId.trim(),
        quantity: formData.quantity.trim(),
        requirements: formData.requirements.trim(),
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      });

      if (result.success) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(result.message || "Something went wrong. Please try again or contact us directly.");
      }
    } catch (err: any) {
      console.error("Quote submission error:", err);
      setSubmitError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-all duration-300 animate-in fade-in">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-200 max-h-[92vh] flex flex-col transition-all duration-300 animate-in fade-in zoom-in-95">
        
        {/* Header (Dark Navy with Faint Texture & Glow) */}
        <div className="bg-[#06182F] text-white p-5 sm:p-6 flex items-center justify-between shrink-0 relative overflow-hidden">
          
          {/* Dot Grid Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "12px 12px"
            }}
          />

          {/* Ambient Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F97316]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-[10px] font-black text-[#F97316] uppercase tracking-widest flex items-center gap-1.5 mb-0.5">
              <Sparkles className="w-3 h-3" /> B2B WHOLESALE ORDER / QUOTE
            </span>
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white">
              {formData.productName ? "REQUEST PRODUCT QUOTE" : "GET A WHOLESALE PRICE QUOTE"}
            </h2>
            <p className="text-[11px] text-[#B8C4D9] font-normal mt-0.5 max-w-md leading-relaxed">
              Submit your inquiry and our B2B sales team will dispatch formal pricing directly to your email &amp; phone.
            </p>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 flex items-center justify-center text-white transition-all duration-200 cursor-pointer relative z-10 shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 bg-white">
          
          {/* SUCCESS STATE */}
          {submitSuccess ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-[#06182F] uppercase tracking-tight">
                  REQUEST RECEIVED SUCCESSFULLY
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 max-w-md mx-auto font-medium leading-relaxed">
                  Thank you! Your request has been received.
                  <br />
                  Our team will contact you shortly.
                </p>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#06182F] hover:bg-[#F97316] text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Honeypot Spam Protection (Hidden Field) */}
              <input
                type="text"
                name="botcheck"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden shrink-0 w-0 h-0 p-0 m-0 border-0 opacity-0 pointer-events-none"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Auto-Populated Product Context Banner */}
              {formData.productName && (
                <div className="bg-[#06182F]/[0.03] border border-[#06182F]/10 rounded-xl p-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#F97316]/10 text-[#F97316] flex items-center justify-center shrink-0">
                      <Package className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9.5px] font-black text-[#F97316] uppercase tracking-wider block">SELECTED PRODUCT</span>
                      <h4 className="text-xs font-black text-[#06182F] uppercase truncate">{formData.productName}</h4>
                    </div>
                  </div>
                  {formData.category && (
                    <span className="text-[9px] font-extrabold text-[#06182F] bg-gray-100 px-2.5 py-1 rounded-md shrink-0 uppercase border border-gray-200">
                      {formData.category}
                    </span>
                  )}
                </div>
              )}

              {/* ERROR ALERT BANNER */}
              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1 tracking-wider">
                    FULL NAME <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-10 px-3 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/15 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1 tracking-wider">
                    BUSINESS / COMPANY NAME <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter company or business name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full h-10 px-3 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/15 transition-all font-medium"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1 tracking-wider">
                    PHONE NUMBER <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-10 px-3 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/15 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1 tracking-wider">
                    EMAIL ADDRESS <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/15 transition-all font-medium"
                  />
                </div>
              </div>

              {/* Row 3: Delivery City & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1 tracking-wider">
                    CITY <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sadiqabad, Lahore, Karachi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-10 px-3 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/15 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1 tracking-wider">
                    ESTIMATED QUANTITY
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50 Drums, 5 Cartons"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full h-10 px-3 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/15 transition-all font-medium"
                  />
                </div>
              </div>

              {/* Row 4: Product Name (Auto-Populated & Editable) */}
              <div>
                <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1 tracking-wider">
                  PRODUCT / ITEM REQUIRED <span className="text-[#F97316]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hino Genuine Engine Oil 4L, Caltex Delo 208L Steel Drum..."
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full h-10 px-3 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/15 transition-all font-bold bg-[#fcfcfd]"
                />
              </div>

              {/* Row 5: Additional Requirements / Customer Message */}
              <div>
                <label className="block text-[11px] font-extrabold text-gray-700 uppercase mb-1 tracking-wider">
                  ADDITIONAL MESSAGE / REQUIREMENTS
                </label>
                <textarea
                  rows={2}
                  placeholder="Enter specific grade, dispatch timeline or delivery instructions..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full p-3 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/15 transition-all resize-y min-h-[65px] font-medium"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-[#F97316] hover:bg-[#ea580c] hover:scale-[1.01] active:scale-95 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:pointer-events-none"
                >
                  <span>{isSubmitting ? "SENDING ORDER REQUEST..." : "SUBMIT ORDER REQUEST"}</span>
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
