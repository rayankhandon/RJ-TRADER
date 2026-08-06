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
import { 
  ChevronRight, 
  PackageCheck, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Factory,
  ClipboardList,
  FlaskConical,
  Cog,
  Truck
} from "lucide-react";

export default function PackagingPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  const services = [
    {
      title: "208L Steel Drum Filling & Sealing",
      desc: "High-speed automated liquid drum filling with tamper-evident seal caps for industrial lubricants, engine oils, and hydraulic fluids.",
      items: ["Sealed Steel Drums", "Tamper-Proof Caps", "Batch Code Printing", "Export Grade Palletization"],
      icon: Factory
    },
    {
      title: "Custom Brand Labeling & Printing",
      desc: "Professional multi-color label application for your private label oil brand. Resistant to chemical spills and extreme temperatures.",
      items: ["Oil & Chemical Resistant", "HD Color Printing", "Barcode Integration", "Private Labeling"],
      icon: Layers
    },
    {
      title: "Heavy Duty Carton & Jerrycan Packing",
      desc: "Robust corrugated Master Cartons and leak-tested Jerrycans (1L, 4L, 10L, 20L) packed for rugged nationwide transport.",
      items: ["Leak-Tested Jerrycans", "5-Ply Heavy Cartons", "Shrink Wrapping", "Safe Pallet Stacking"],
      icon: PackageCheck
    },
    {
      title: "Industrial Re-bottling & Transfer",
      desc: "Safe transfer of liquid stock from ISO tank containers into commercial wholesale sizes under strict ISO quality control.",
      items: ["ISO Tank Transfer", "Viscosity Testing", "Zero Contamination Guarantee", "Fast Turnaround"],
      icon: ShieldCheck
    }
  ];

  const processSteps = [
    {
      title: "Requirement & Spec Consultation",
      desc: "We analyze your volume, product viscosity, container type, and branding specifications.",
      icon: ClipboardList
    },
    {
      title: "Custom Sample & Approval",
      desc: "We prepare container samples with your custom branding labels for sign-off.",
      icon: FlaskConical
    },
    {
      title: "Automated Packaging & Quality Control",
      desc: "Liquid filling, capping, seal-verification, and weight checks on our automated line.",
      icon: Cog
    },
    {
      title: "Palletization & Nationwide Dispatch",
      desc: "Secure shrink-wrapped palletization loaded directly onto heavy transport trucks.",
      icon: Truck
    }
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
      <div className="bg-[#06182F] text-white py-12 lg:py-16 border-b border-white/10 relative overflow-hidden">
        {/* Warehouse Overlay Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="Warehouse Packaging Line"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182F] via-[#06182F]/95 to-[#0B2545]/90 pointer-events-none" />

        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-3 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-[#F97316] transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[#F97316]">PACKAGING SERVICES</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
            PROFESSIONAL INDUSTRIAL PACKAGING SOLUTIONS
          </h1>
          <p className="text-xs sm:text-sm text-[#B8C4D9] max-w-3xl mt-2 font-normal leading-relaxed">
            From 208L steel drum filling to custom private label bottling — RJ Traders delivers zero-leakage, high-durability packaging designed for industrial transit across Pakistan.
          </p>
        </div>
      </div>

      <main className="flex-1 w-full space-y-16">
        
        {/* 1. Our Packaging Capabilities Section (Polished, Gradient & Animated) */}
        <section className="relative w-full py-14 lg:py-20 bg-[#F5F6F8] overflow-hidden">
          {/* Ambient Corner Radial Glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#06182F]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-[#F97316] block mb-1.5">
                CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#06182F] tracking-tight">
                OUR PACKAGING CAPABILITIES
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xl mx-auto font-normal leading-relaxed">
                Precision filling and sturdy industrial packaging built to withstand heavy transit.
              </p>
            </div>

            {/* Cards Grid with Staggered Entrance Animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <AnimatedSection key={idx} delayMs={idx * 120} className="h-full">
                    <div
                      className="relative bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 h-full overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#F97316] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
                      style={{
                        background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)"
                      }}
                    >
                      <div>
                        {/* Animated Icon Box */}
                        <div className="w-14 h-14 rounded-xl bg-[#06182F] text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center mb-5 group-hover:scale-[1.08] transition-all duration-300 ease-out shadow-md">
                          <IconComp className="w-7 h-7 transition-colors duration-300" />
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-base sm:text-lg font-extrabold uppercase text-[#06182F] group-hover:text-[#F97316] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-600 mt-2 leading-relaxed font-normal">
                          {item.desc}
                        </p>

                        {/* Sub-items Checklist */}
                        <ul className="mt-5 pt-4 border-t border-gray-200/80 grid grid-cols-2 gap-2.5 text-xs">
                          {item.items.map((sub, i) => (
                            <li key={i} className="flex items-center gap-2 font-semibold text-gray-600 group-hover:text-[#06182F] transition-colors">
                              <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Card Action Button with Sweep Effect */}
                      <div className="mt-7 pt-4 border-t border-gray-100">
                        <button
                          onClick={() => setIsQuoteModalOpen(true)}
                          className="w-full h-11 bg-[#06182F] hover:bg-[#F97316] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md group/btn relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full group-hover/btn:before:translate-x-full before:transition-transform before:duration-700"
                        >
                          <span>GET CUSTOM PACKAGING QUOTE</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

          </div>
        </section>

        {/* 2. Process Flow Section (Icons, Visual Connecting Line, Equal Heights) */}
        <section className="bg-[#06182F] text-white py-16 lg:py-24 border-y border-white/10 relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-black uppercase tracking-widest text-[#F97316] block mb-1">
                SIMPLE B2B WORKFLOW
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">
                OUR 4-STEP PACKAGING PROCESS
              </h2>
            </div>

            {/* Desktop Visual Connector Line running behind the cards */}
            <div className="relative">
              <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-[#F97316]/40 to-transparent z-0 pointer-events-none">
                <div className="w-full h-full flex justify-between items-center px-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F97316] shadow-[0_0_10px_#F97316]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F97316] shadow-[0_0_10px_#F97316]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F97316] shadow-[0_0_10px_#F97316]" />
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                {processSteps.map((s, idx) => {
                  const StepIcon = s.icon;
                  return (
                    <AnimatedSection key={idx} delayMs={idx * 150} className="h-full">
                      <div className="bg-[#0D233E] border border-white/10 hover:border-[#F97316]/60 rounded-2xl p-6 sm:p-7 relative transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#0E2847] shadow-lg group h-full flex flex-col justify-between">
                        <div>
                          {/* Top Icon Container Box */}
                          <div className="w-12 h-12 rounded-xl bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#F97316] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300">
                            <StepIcon className="w-6 h-6" />
                          </div>

                          {/* Step Title */}
                          <h4 className="text-sm sm:text-base font-extrabold uppercase text-white mb-2 leading-snug group-hover:text-[#F97316] transition-colors">
                            {s.title}
                          </h4>

                          {/* Step Description */}
                          <p className="text-xs text-gray-300 leading-relaxed font-normal">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingWidgets onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <OrderTrackingModal isOpen={isTrackModalOpen} onClose={() => setIsTrackModalOpen(false)} />
    </div>
  );
}
