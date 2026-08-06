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
import { ChevronRight, Truck, MapPin, Search, Building2 } from "lucide-react";

export default function DeliveryPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  const coveredRegions = [
    { city: "Lahore", timeline: "Same Day / 24 Hours", hub: "Central Warehouse Hub", speed: "fast" },
    { city: "Karachi", timeline: "48 - 72 Hours", hub: "Port & Industrial Hub", speed: "extended" },
    { city: "Faisalabad", timeline: "24 - 48 Hours", hub: "Textile & Lube Depot", speed: "standard" },
    { city: "Rawalpindi / Islamabad", timeline: "24 - 48 Hours", hub: "Northern Region Hub", speed: "standard" },
    { city: "Multan", timeline: "24 - 48 Hours", hub: "Southern Punjab Hub", speed: "standard" },
    { city: "Gujranwala / Sialkot", timeline: "24 Hours", hub: "Industrial Corridor", speed: "fast" },
    { city: "Peshawar", timeline: "48 Hours", hub: "KPK Regional Terminal", speed: "standard" },
    { city: "Quetta", timeline: "72 Hours", hub: "Balochistan Logistics Hub", speed: "extended" },
  ];

  // Helper for delivery timeline speed badge styling
  const getSpeedBadgeStyle = (speed: string) => {
    switch (speed) {
      case "fast":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/90";
      case "standard":
        return "bg-orange-50 text-[#F97316] border-orange-200/90";
      case "extended":
        return "bg-amber-50 text-amber-800 border-amber-200/90";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
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
            alt="Nationwide Logistics Fleet"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182F] via-[#06182F]/95 to-[#0B2545]/90 pointer-events-none" />

        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-3 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-[#F97316] transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[#F97316]">NATIONWIDE DELIVERY</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
            NATIONWIDE B2B FREIGHT & DELIVERY COVERAGE
          </h1>
          <p className="text-xs sm:text-sm text-[#B8C4D9] max-w-3xl mt-2 font-normal leading-relaxed">
            RJ Traders operates a fleet of heavy-duty transport vehicles for safe, on-time delivery of wholesale drums, oil containers, and packaged goods across all major cities in Pakistan.
          </p>
        </div>
      </div>

      <main className="flex-1 w-full py-14 space-y-16">
        
        {/* 1. Order Tracking Callout Box (Live Indicator, Glow & Texture) */}
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-[#06182F] border border-white/15 rounded-2xl p-7 sm:p-9 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_35px_rgba(0,0,0,0.2)] relative overflow-hidden group">
              
              {/* Faint Dot Grid Texture Overlay (5% opacity) */}
              <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "12px 12px"
                }}
              />

              {/* Ambient Radial Glow behind Live Badge */}
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#F97316]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Live Badge with Green Pulsing Dot Indicator */}
                <div className="inline-flex items-center gap-2 text-xs font-black text-[#F97316] uppercase tracking-wider mb-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <Truck className="w-4 h-4 text-[#F97316]" />
                  <span>LIVE SHIPMENT TRACKING</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">Track Your Active Order Status</h3>
                <p className="text-xs sm:text-sm text-[#B8C4D9] mt-1.5 max-w-xl font-normal leading-relaxed">
                  Have an active shipment? Enter your Tracking ID to view real-time transit milestones and estimated arrival times.
                </p>
              </div>

              {/* Action Button with Hover Scaling & Shadow Lift */}
              <button
                onClick={() => setIsTrackModalOpen(true)}
                className="h-12 bg-[#F97316] hover:bg-[#ea580c] hover:scale-[1.03] active:scale-95 text-white text-xs font-extrabold uppercase tracking-wider px-8 rounded-xl shadow-lg hover:shadow-[0_10px_25px_rgba(249,115,22,0.35)] transition-all duration-200 flex items-center gap-2.5 shrink-0 cursor-pointer relative z-10"
              >
                <Search className="w-4 h-4" />
                <span>LAUNCH ORDER TRACKER</span>
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* 2. Coverage Grid (Color-coded timelines, Watermarks, Equal Height, Staggered Entrance) */}
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#F97316] block mb-1.5">
              NATIONWIDE NETWORK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#06182F] tracking-tight">
              MAIN COVERAGE HUBS & TIMELINES
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xl mx-auto font-normal leading-relaxed">
              Direct dispatch from our central Lahore warehouse to key industrial hubs nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coveredRegions.map((reg, idx) => (
              <AnimatedSection key={idx} delayMs={idx * 80} className="h-full">
                <div
                  className="bg-white border border-gray-200/90 hover:border-[#F97316] rounded-2xl p-6 sm:p-7 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 h-full relative overflow-hidden cursor-default"
                >
                  {/* Subtle Background Watermark Icon (5% opacity) */}
                  <Building2 className="w-20 h-20 text-gray-900/[0.04] absolute -bottom-3 -right-3 pointer-events-none group-hover:scale-110 group-hover:text-[#F97316]/[0.08] transition-all duration-500" />

                  <div>
                    {/* City Title with Orange Map Pin */}
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F97316] flex items-center justify-center shrink-0 group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-300">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-extrabold uppercase text-[#06182F] group-hover:text-[#F97316] transition-colors leading-snug">
                        {reg.city}
                      </h3>
                    </div>
                    <span className="text-[10.5px] text-gray-500 font-bold uppercase block ml-10">
                      {reg.hub}
                    </span>
                  </div>

                  {/* Color-Coded Timeline Speed Badge */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-wider">
                      ESTIMATED TIME
                    </span>
                    <span className={`text-[10.5px] font-extrabold px-2.5 py-1 rounded-md border ${getSpeedBadgeStyle(reg.speed)}`}>
                      {reg.timeline}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
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
