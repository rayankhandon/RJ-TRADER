"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { OrderTrackingModal } from "@/components/ui/OrderTrackingModal";
import { FloatingWidgets } from "@/components/common/FloatingWidgets";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { CONTACT_INFO } from "@/data/navigation";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send, User } from "lucide-react";

export default function ContactPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Wholesale Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "Wholesale Inquiry", message: "" });
      alert("Thank you! Your message has been sent to RJ Traders team.");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6F8]">
      <TopBar />
      <Header
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenTrackingModal={() => setIsTrackModalOpen(true)}
      />
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Header Banner */}
      <div className="bg-[#06182F] text-white py-12 lg:py-16 border-b border-white/10 relative overflow-hidden">
        {/* Subtle Map Overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="RJ Traders Contact Line"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182F] via-[#06182F]/95 to-[#0B2545]/90 pointer-events-none" />

        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-3 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-[#F97316] transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[#F97316]">CONTACT US</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
            CONTACT RJ TRADERS
          </h1>
          <p className="text-xs sm:text-sm text-[#B8C4D9] max-w-2xl mt-2 font-normal leading-relaxed">
            Get in touch with our B2B sales desk in Lahore, Pakistan. We are ready to answer your inquiries regarding bulk supply, custom packaging, and freight dispatch.
          </p>
        </div>
      </div>

      <main className="flex-1 w-full py-14 lg:py-20 space-y-12">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Head Office & Sales Desk Dark Card */}
              <AnimatedSection animation="slide-up">
                <div className="bg-[#06182F] text-white rounded-2xl p-7 sm:p-9 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] space-y-6 relative overflow-hidden group">
                  
                  {/* Faint Dot Grid Texture Overlay (5% opacity) */}
                  <div 
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                      backgroundSize: "12px 12px"
                    }}
                  />

                  {/* Soft Radial Glow */}
                  <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#F97316]/15 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <span className="text-xs font-black uppercase text-[#F97316] tracking-widest block mb-1">
                      DIRECT CONTACT
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                      HEAD OFFICE & SALES DESK
                    </h3>
                  </div>

                  <div className="space-y-3.5 text-xs relative z-10">
                    
                    {/* Phone Row */}
                    <div className="p-3.5 rounded-xl hover:bg-white/[0.04] transition-all duration-200 group/row border border-transparent hover:border-white/5 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#F97316]/15 border border-[#F97316]/40 text-[#F97316] group-hover/row:bg-[#F97316] group-hover/row:text-white flex items-center justify-center shrink-0 transition-colors duration-200 shadow-xs">
                        <Phone className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block tracking-wider">
                          PHONE / WHATSAPP
                        </span>
                        <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="font-extrabold text-white hover:text-[#F97316] text-sm transition-colors mt-0.5 block">
                          {CONTACT_INFO.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    {/* Email Row */}
                    <div className="p-3.5 rounded-xl hover:bg-white/[0.04] transition-all duration-200 group/row border border-transparent hover:border-white/5 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#F97316]/15 border border-[#F97316]/40 text-[#F97316] group-hover/row:bg-[#F97316] group-hover/row:text-white flex items-center justify-center shrink-0 transition-colors duration-200 shadow-xs">
                        <Mail className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block tracking-wider">
                          EMAIL INQUIRIES
                        </span>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="font-extrabold text-white hover:text-[#F97316] text-sm transition-colors mt-0.5 block">
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>

                    {/* Location Row */}
                    <div className="p-3.5 rounded-xl hover:bg-white/[0.04] transition-all duration-200 group/row border border-transparent hover:border-white/5 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#F97316]/15 border border-[#F97316]/40 text-[#F97316] group-hover/row:bg-[#F97316] group-hover/row:text-white flex items-center justify-center shrink-0 transition-colors duration-200 shadow-xs">
                        <MapPin className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block tracking-wider">
                          LOCATION
                        </span>
                        <span className="font-bold text-white text-xs mt-0.5 block leading-relaxed">
                          RJ Traders Central Hub, Industrial Estate, {CONTACT_INFO.location}
                        </span>
                      </div>
                    </div>

                    {/* Hours Row */}
                    <div className="p-3.5 rounded-xl hover:bg-white/[0.04] transition-all duration-200 group/row border border-transparent hover:border-white/5 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#F97316]/15 border border-[#F97316]/40 text-[#F97316] group-hover/row:bg-[#F97316] group-hover/row:text-white flex items-center justify-center shrink-0 transition-colors duration-200 shadow-xs">
                        <Clock className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase block tracking-wider">
                          BUSINESS HOURS
                        </span>
                        <span className="font-bold text-white text-xs mt-0.5 block">
                          {CONTACT_INFO.workingHours}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </AnimatedSection>

              {/* Warehouse & Depot Card */}
              <AnimatedSection delayMs={100} animation="slide-up">
                <div className="bg-white border border-[#ececec] hover:border-[#F97316]/50 rounded-2xl p-6 sm:p-7 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 text-center group cursor-default">
                  <div className="w-11 h-11 rounded-full bg-orange-50 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center mx-auto mb-3 transition-colors duration-300 shadow-xs">
                    <MapPin className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="text-xs font-extrabold uppercase text-[#06182F] group-hover:text-[#F97316] transition-colors">
                    LAHORE WAREHOUSE & DEPOT
                  </h4>
                  <p className="text-[11.5px] text-gray-500 mt-1 font-normal leading-relaxed">
                    Main Multan Road / Raiwind Road Industrial Hub, Lahore, Pakistan
                  </p>
                  <a
                    href="https://maps.google.com/?q=Lahore+Multan+Road+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3.5 inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#F97316] hover:text-[#ea580c] uppercase tracking-wider transition-colors"
                  >
                    <span>GET DIRECTIONS ON MAP</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </AnimatedSection>

            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7">
              <AnimatedSection delayMs={150} animation="slide-up">
                <div className="bg-white border border-gray-200/90 rounded-2xl p-7 sm:p-9 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                  <span className="text-xs font-black text-[#F97316] uppercase tracking-widest block mb-1">
                    ONLINE INQUIRY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#06182F] uppercase tracking-tight">
                    SEND US A DIRECT MESSAGE
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1.5 mb-7 font-normal">
                    Fill out the form below and our B2B sales team will respond within 2 business hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Field */}
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase text-gray-700 mb-1.5 tracking-wider">
                          YOUR NAME <span className="text-[#F97316]">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Tariq Mahmood"
                            className="w-full h-11 border border-gray-300/90 rounded-xl pl-10 pr-3.5 text-xs text-gray-800 focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase text-gray-700 mb-1.5 tracking-wider">
                          EMAIL ADDRESS <span className="text-[#F97316]">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. name@company.pk"
                            className="w-full h-11 border border-gray-300/90 rounded-xl pl-10 pr-3.5 text-xs text-gray-800 focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Field */}
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase text-gray-700 mb-1.5 tracking-wider">
                          PHONE / WHATSAPP <span className="text-[#F97316]">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. +92 321 1234567"
                            className="w-full h-11 border border-gray-300/90 rounded-xl pl-10 pr-3.5 text-xs text-gray-800 focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Inquiry Type Dropdown */}
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase text-gray-700 mb-1.5 tracking-wider">
                          INQUIRY TYPE
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full h-11 border border-gray-300/90 rounded-xl px-3.5 text-xs text-gray-800 focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200 bg-white font-semibold cursor-pointer"
                        >
                          <option value="Wholesale Inquiry">Wholesale Products & Bulk Rates</option>
                          <option value="Packaging Quote">Steel Drum & Custom Packaging</option>
                          <option value="Nationwide Delivery">Fleet Delivery & Order Tracking</option>
                          <option value="Other">General Partnership</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase text-gray-700 mb-1.5 tracking-wider">
                        MESSAGE / PRODUCT QUANTITY DETAILS <span className="text-[#F97316]">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please specify product types, required drum/liter quantities, and delivery location..."
                        className="w-full border border-gray-300/90 rounded-xl p-3.5 text-xs text-gray-800 focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/15 transition-all duration-200"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitted}
                      className="w-full h-12 bg-[#F97316] hover:bg-[#ea580c] hover:scale-[1.02] active:scale-95 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-[0_10px_25px_rgba(249,115,22,0.35)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{submitted ? "SENDING..." : "SEND MESSAGE TO RJ TRADERS"}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWidgets onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <OrderTrackingModal isOpen={isTrackModalOpen} onClose={() => setIsTrackModalOpen(false)} />
    </div>
  );
}
