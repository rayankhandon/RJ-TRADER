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
import { ChevronRight, Truck, MapPin, Search, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export default function DeliveryPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  const coveredRegions = [
    { city: "Lahore", timeline: "Same Day / 24 Hours", hub: "Central Warehouse Hub" },
    { city: "Karachi", timeline: "48 - 72 Hours", hub: "Port & Industrial Hub" },
    { city: "Faisalabad", timeline: "24 - 48 Hours", hub: "Textile & Lube Depot" },
    { city: "Rawalpindi / Islamabad", timeline: "24 - 48 Hours", hub: "Northern Region Hub" },
    { city: "Multan", timeline: "24 - 48 Hours", hub: "Southern Punjab Hub" },
    { city: "Gujranwala / Sialkot", timeline: "24 Hours", hub: "Industrial Corridor" },
    { city: "Peshawar", timeline: "48 Hours", hub: "KPK Regional Terminal" },
    { city: "Quetta", timeline: "72 Hours", hub: "Balochistan Logistics Hub" },
  ];

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
            <span className="text-[#F97316]">NATIONWIDE DELIVERY</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
            NATIONWIDE B2B FREIGHT & DELIVERY COVERAGE
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-3xl mt-2 font-normal leading-relaxed">
            RJ Traders operates a fleet of heavy-duty transport vehicles for safe, on-time delivery of wholesale drums, oil containers, and packaged goods across all major cities in Pakistan.
          </p>
        </div>
      </div>

      <main className="flex-1 w-full py-12 space-y-12">
        
        {/* Order Tracking Callout Box */}
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#07172B] border border-white/15 rounded-xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black text-[#F97316] uppercase tracking-wider mb-2">
                <Truck className="w-4 h-4" />
                <span>LIVE SHIPMENT TRACKING</span>
              </div>
              <h3 className="text-xl font-black uppercase text-white">Track Your Active Order Status</h3>
              <p className="text-xs text-gray-300 mt-1 max-w-xl">
                Have an active shipment? Enter your Tracking ID to view real-time transit milestones and estimated arrival times.
              </p>
            </div>
            <button
              onClick={() => setIsTrackModalOpen(true)}
              className="h-12 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-black uppercase tracking-wider px-8 rounded-lg shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer active:scale-95"
            >
              <Search className="w-4 h-4" />
              <span>LAUNCH ORDER TRACKER</span>
            </button>
          </div>
        </div>

        {/* Coverage Grid */}
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#0A1A2F]">
              MAIN COVERAGE HUBS & TIMELINES
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Direct dispatch from our central Lahore warehouse to key industrial hubs nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coveredRegions.map((reg, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-[#F97316] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#F97316]" />
                    <h3 className="text-base font-black uppercase text-[#0A1A2F]">{reg.city}</h3>
                  </div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase block">{reg.hub}</span>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500 text-[10px]">ESTIMATED TIME</span>
                  <span className="font-extrabold text-[#F97316]">{reg.timeline}</span>
                </div>
              </div>
            ))}
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
