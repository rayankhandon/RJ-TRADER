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
import { ChevronRight, Award, ShieldCheck, Users, Target, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  const team = [
    { name: "Raja Mohammad Javed", title: "Founder & Chief Executive Officer", exp: "25+ Years in Lubricant Trade" },
    { name: "Usman Javed", title: "Head of B2B Operations & Logistics", exp: "12+ Years Supply Chain Management" },
    { name: "Farhan Saeed", title: "Chief Quality Inspector", exp: "15+ Years ISO Petroleum Testing" },
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
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-[#F97316]">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F97316]">ABOUT US</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
            ABOUT RJ TRADERS
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-3xl mt-2 font-normal leading-relaxed">
            Pakistan’s premier B2B wholesale distributor and industrial packaging partner for lubricants, engine oils, steel drums, and bulk freight solutions.
          </p>
        </div>
      </div>

      <main className="flex-1 w-full py-12 space-y-16">
        
        {/* Story & Vision */}
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase text-[#F97316] tracking-widest">OUR HERITAGE</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#0A1A2F]">
                BUILT ON TRUST, QUALITY & NATIONWIDE RELIABILITY
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Founded in Lahore, Pakistan, RJ Traders has grown into one of the country's most respected B2B wholesale suppliers. We bridge the gap between heavy industrial manufacturers and regional commercial buyers.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Whether supplying 208L steel drums to transport fleets or custom packaging for brand owners, our commitment remains constant: 100% genuine quality, transparent pricing, and zero compromise on delivery timelines.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <Target className="w-6 h-6 text-[#F97316] mb-1" />
                  <h4 className="text-xs font-black uppercase text-[#0A1A2F]">OUR MISSION</h4>
                  <p className="text-[11px] text-gray-500 mt-1">To empower Pakistani businesses with seamless bulk sourcing, leak-proof packaging, and dependable nationwide logistics.</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-[#F97316] mb-1" />
                  <h4 className="text-xs font-black uppercase text-[#0A1A2F]">QUALITY PROMISE</h4>
                  <p className="text-[11px] text-gray-500 mt-1">Every batch of oil and every drum container is strictly tested to exceed international viscosity and durability standards.</p>
                </div>
              </div>
            </div>

            {/* Image Box */}
            <div className="relative h-[380px] rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/images/rj-traders-hero.jpg"
                alt="RJ Traders Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="bg-white py-14 border-y border-gray-200">
          <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#F97316]">EXPERT LEADERSHIP</span>
              <h2 className="text-2xl font-black uppercase text-[#0A1A2F] mt-1">THE TEAM BEHIND RJ TRADERS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((t, idx) => (
                <div key={idx} className="bg-[#F5F6F8] border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#07172B] text-[#F97316] flex items-center justify-center mx-auto mb-4 font-black text-xl">
                    {t.name[0]}
                  </div>
                  <h3 className="text-sm font-black uppercase text-[#0A1A2F]">{t.name}</h3>
                  <span className="text-[11px] font-bold text-[#F97316] uppercase block mt-0.5">{t.title}</span>
                  <span className="text-[10px] text-gray-500 block mt-2 font-semibold">{t.exp}</span>
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
