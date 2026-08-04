"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { OrderTrackingModal } from "@/components/ui/OrderTrackingModal";
import { FloatingWidgets } from "@/components/common/FloatingWidgets";
import { ChevronRight, PackageCheck, Layers, ShieldCheck, ArrowRight, CheckCircle2, Factory, Truck } from "lucide-react";

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
      step: "01",
      title: "Requirement & Spec Consultation",
      desc: "We analyze your volume, product viscosity, container type, and branding specifications."
    },
    {
      step: "02",
      title: "Custom Sample & Approval",
      desc: "We prepare container samples with your custom branding labels for sign-off."
    },
    {
      step: "03",
      title: "Automated Packaging & Quality Control",
      desc: "Liquid filling, capping, seal-verification, and weight checks on our automated line."
    },
    {
      step: "04",
      title: "Palletization & Nationwide Dispatch",
      desc: "Secure shrink-wrapped palletization loaded directly onto heavy transport trucks."
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
      <div className="bg-[#07172B] text-white py-12 border-b border-white/10 relative overflow-hidden">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-[#F97316]">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F97316]">PACKAGING SERVICES</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
            PROFESSIONAL INDUSTRIAL PACKAGING SOLUTIONS
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-3xl mt-2 font-normal leading-relaxed">
            From 208L steel drum filling to custom private label bottling — RJ Traders delivers zero-leakage, high-durability packaging designed for industrial transit across Pakistan.
          </p>
        </div>
      </div>

      <main className="flex-1 w-full py-12 space-y-16">
        
        {/* Service Cards Grid */}
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#0A1A2F]">
              OUR PACKAGING CAPABILITIES
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Precision filling and sturdy industrial packaging built to withstand heavy transit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#07172B] text-[#F97316] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-black uppercase text-[#0A1A2F] group-hover:text-[#F97316] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>

                    <ul className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs">
                      {item.items.map((sub, i) => (
                        <li key={i} className="flex items-center gap-1.5 font-semibold text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4">
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="w-full h-10 bg-[#07172B] hover:bg-[#F97316] text-white text-xs font-black uppercase tracking-wider rounded transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>GET CUSTOM PACKAGING QUOTE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 1-2-3-4 Process Timeline */}
        <div className="bg-[#07172B] text-white py-16 border-y border-white/10">
          <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-[#F97316]">SIMPLE B2B WORKFLOW</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                OUR 4-STEP PACKAGING PROCESS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-[#0D233E] border border-white/10 rounded-xl p-6 relative hover:border-[#F97316]/50 transition-all"
                >
                  <span className="text-4xl font-black text-[#F97316]/30 font-mono absolute top-4 right-4">
                    {s.step}
                  </span>
                  <h4 className="text-sm font-extrabold uppercase text-white mb-2 relative z-10 pr-8">
                    {s.title}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed relative z-10">
                    {s.desc}
                  </p>
                </div>
              ))}
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
