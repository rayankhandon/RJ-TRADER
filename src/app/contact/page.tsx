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
import { CONTACT_INFO } from "@/data/navigation";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

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
      <div className="bg-[#07172B] text-white py-12 border-b border-white/10">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-[#F97316]">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F97316]">CONTACT US</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
            CONTACT RJ TRADERS
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mt-2 font-normal leading-relaxed">
            Get in touch with our B2B sales desk in Lahore, Pakistan. We are ready to answer your inquiries regarding bulk supply, custom packaging, and freight dispatch.
          </p>
        </div>
      </div>

      <main className="flex-1 w-full py-12 space-y-12">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#07172B] text-white rounded-xl p-6 sm:p-8 border border-white/10 shadow-lg space-y-6">
                <span className="text-xs font-black uppercase text-[#F97316] tracking-widest">DIRECT CONTACT</span>
                <h3 className="text-xl font-black uppercase text-white">HEAD OFFICE & SALES DESK</h3>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">PHONE / WHATSAPP</span>
                      <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="font-extrabold text-white hover:text-[#F97316] text-sm">
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">EMAIL INQUIRIES</span>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="font-extrabold text-white hover:text-[#F97316] text-sm">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">LOCATION</span>
                      <span className="font-bold text-white text-xs">
                        RJ Traders Central Hub, Industrial Estate, {CONTACT_INFO.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">BUSINESS HOURS</span>
                      <span className="font-bold text-white text-xs">{CONTACT_INFO.workingHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Box */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center">
                <MapPin className="w-8 h-8 text-[#F97316] mx-auto mb-2" />
                <h4 className="text-xs font-black uppercase text-[#0A1A2F]">LAHORE WAREHOUSE & DEPOT</h4>
                <p className="text-[11px] text-gray-500 mt-1">Main Multan Road / Raiwind Road Industrial Hub, Lahore, Pakistan</p>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <span className="text-xs font-black text-[#F97316] uppercase tracking-wider">ONLINE INQUIRY</span>
                <h3 className="text-xl font-black text-[#0A1A2F] uppercase tracking-tight mt-1">
                  SEND US A DIRECT MESSAGE
                </h3>
                <p className="text-xs text-gray-500 mt-1 mb-6">
                  Fill out the form below and our B2B team will respond within 2 business hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-black uppercase text-gray-700 mb-1">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Mahmood"
                        className="w-full h-11 border border-gray-300 rounded px-3.5 text-xs text-gray-800 focus:outline-none focus:border-[#F97316]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase text-gray-700 mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.pk"
                        className="w-full h-11 border border-gray-300 rounded px-3.5 text-xs text-gray-800 focus:outline-none focus:border-[#F97316]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-black uppercase text-gray-700 mb-1">
                        PHONE / WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +92 321 1234567"
                        className="w-full h-11 border border-gray-300 rounded px-3.5 text-xs text-gray-800 focus:outline-none focus:border-[#F97316]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black uppercase text-gray-700 mb-1">
                        INQUIRY TYPE
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full h-11 border border-gray-300 rounded px-3.5 text-xs text-gray-800 focus:outline-none focus:border-[#F97316] bg-white font-semibold"
                      >
                        <option value="Wholesale Inquiry">Wholesale Products & Bulk Rates</option>
                        <option value="Packaging Quote">Steel Drum & Custom Packaging</option>
                        <option value="Nationwide Delivery">Fleet Delivery & Order Tracking</option>
                        <option value="Other">General Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase text-gray-700 mb-1">
                      MESSAGE / PRODUCT QUANTITY DETAILS *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify product types, required drum/liter quantities, and delivery location..."
                      className="w-full border border-gray-300 rounded p-3.5 text-xs text-gray-800 focus:outline-none focus:border-[#F97316]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full h-12 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>{submitted ? "SENDING..." : "SEND MESSAGE TO RJ TRADERS"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>

              </div>
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
