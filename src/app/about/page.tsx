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
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ChevronRight, Award, ShieldCheck, Target, Briefcase } from "lucide-react";

// Self-contained, robust LinkedIn Icon component
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
    </svg>
  );
}

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  const team = [
    { 
      name: "Raja Mohammad Javed", 
      title: "Founder & Chief Executive Officer", 
      exp: "25+ Years in Lubricant Trade",
      linkedin: "#"
    },
    { 
      name: "Usman Javed", 
      title: "Head of B2B Operations & Logistics", 
      exp: "12+ Years Supply Chain Management",
      linkedin: "#"
    },
    { 
      name: "Farhan Saeed", 
      title: "Chief Quality Inspector", 
      exp: "15+ Years ISO Petroleum Testing",
      linkedin: "#"
    },
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
        {/* Subtle Warehouse Overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="RJ Traders Facility Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182F] via-[#06182F]/95 to-[#0B2545]/90 pointer-events-none" />

        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-3 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-[#F97316] transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[#F97316]">ABOUT US</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
            ABOUT RJ TRADERS
          </h1>
          <p className="text-xs sm:text-sm text-[#B8C4D9] max-w-3xl mt-2 font-normal leading-relaxed">
            Pakistan’s premier B2B wholesale distributor and industrial packaging partner for lubricants, engine oils, steel drums, and bulk freight solutions.
          </p>
        </div>
      </div>

      <main className="flex-1 w-full space-y-16 py-14 lg:py-20">
        
        {/* 1. Story & Vision Section */}
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Left Story Column */}
            <div className="space-y-4">
              <AnimatedSection>
                <span className="text-xs font-black uppercase text-[#F97316] tracking-widest block mb-1">
                  OUR HERITAGE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#06182F] tracking-tight leading-tight">
                  BUILT ON TRUST, QUALITY & NATIONWIDE RELIABILITY
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-3 font-normal">
                  Founded in Lahore, Pakistan, RJ Traders has grown into one of the country&apos;s most respected B2B wholesale suppliers. We bridge the gap between heavy industrial manufacturers and regional commercial buyers.
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Whether supplying 208L steel drums to transport fleets or custom packaging for brand owners, our commitment remains constant: 100% genuine quality, transparent pricing, and zero compromise on delivery timelines.
                </p>
              </AnimatedSection>

              {/* Mission & Quality Cards Row */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Our Mission Card */}
                <AnimatedSection delayMs={100}>
                  <div className="bg-white border border-[#ececec] rounded-2xl p-5 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)] hover:border-[#F97316]/30 hover:-translate-y-1.25 transition-all duration-300 ease-out group h-full flex flex-col justify-between cursor-default">
                    <div>
                      {/* Circular Light Orange Icon Container */}
                      <div className="w-12 h-12 rounded-full bg-[#F97316]/10 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center mb-3.5 transition-colors duration-300">
                        <Target className="w-6 h-6" />
                      </div>
                      <h4 className="text-xs font-extrabold uppercase text-[#06182F] group-hover:text-[#F97316] transition-colors">
                        OUR MISSION
                      </h4>
                      {/* Small Orange Underline Accent */}
                      <div className="w-7 h-0.5 bg-[#F97316] rounded-full my-1.5 opacity-90" />
                      <p className="text-[11px] text-gray-500 mt-1 leading-relaxed font-normal">
                        To empower Pakistani businesses with seamless bulk sourcing, leak-proof packaging, and dependable nationwide logistics.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Quality Promise Card */}
                <AnimatedSection delayMs={200}>
                  <div className="bg-white border border-[#ececec] rounded-2xl p-5 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)] hover:border-[#F97316]/30 hover:-translate-y-1.25 transition-all duration-300 ease-out group h-full flex flex-col justify-between cursor-default">
                    <div>
                      {/* Circular Light Orange Icon Container */}
                      <div className="w-12 h-12 rounded-full bg-[#F97316]/10 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center mb-3.5 transition-colors duration-300">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <h4 className="text-xs font-extrabold uppercase text-[#06182F] group-hover:text-[#F97316] transition-colors">
                        QUALITY PROMISE
                      </h4>
                      {/* Small Orange Underline Accent */}
                      <div className="w-7 h-0.5 bg-[#F97316] rounded-full my-1.5 opacity-90" />
                      <p className="text-[11px] text-gray-500 mt-1 leading-relaxed font-normal">
                        Every batch of oil and every drum container is strictly tested to exceed international viscosity and durability standards.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

              </div>
            </div>

            {/* Right Hero Image Box with Floating Stat Badge */}
            <AnimatedSection delayMs={150}>
              <div className="relative h-[380px] sm:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-200/80 group">
                <Image
                  src="/images/rj-traders-hero.jpg"
                  alt="RJ Traders Facility"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06182F]/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Stat Badge in Bottom-Left Corner */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md border border-gray-200/90 p-3.5 sm:p-4 rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.18)] flex items-center gap-3.5 z-20">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center shrink-0 shadow-xs">
                    <Award className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-black text-[#06182F] block leading-none">
                      25+ YEARS
                    </span>
                    <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider block mt-1">
                      ESTABLISHED INDUSTRIAL TRUST
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>

        {/* 2. Team Member Cards Grid (Subtle Gradient, Hover Top Accent Line, Glowing Ring Avatar & Staggered Scroll Entrance) */}
        <section className="bg-white py-16 lg:py-20 border-y border-gray-200/90 relative overflow-hidden">
          <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-[#F97316] block mb-1.5">
                EXPERT LEADERSHIP
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#06182F] tracking-tight">
                THE TEAM BEHIND RJ TRADERS
              </h2>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {team.map((t, idx) => (
                <AnimatedSection key={idx} delayMs={idx * 120} className="h-full">
                  <div
                    className="border border-gray-200/90 rounded-2xl p-7 sm:p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_36px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden h-full flex flex-col justify-between before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[#F97316] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300"
                    style={{
                      background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)"
                    }}
                  >
                    <div>
                      {/* Avatar Circle with Glow Ring */}
                      <div className="w-20 h-20 rounded-full bg-[#06182F] text-white flex items-center justify-center mx-auto mb-4 font-black text-2xl border-3 border-[#F97316]/20 group-hover:border-[#F97316]/60 group-hover:shadow-[0_0_0_6px_rgba(255,106,0,0.08)] transition-all duration-300 relative shadow-md">
                        <span>{t.name[0]}</span>
                      </div>

                      {/* Name & Title */}
                      <h3 className="text-base sm:text-lg font-extrabold uppercase text-[#06182F] group-hover:text-[#F97316] transition-colors leading-snug">
                        {t.name}
                      </h3>
                      <span className="text-xs font-bold text-[#F97316] uppercase block mt-1 tracking-wide">
                        {t.title}
                      </span>
                    </div>

                    <div>
                      {/* Experience Line with Briefcase Icon Divider */}
                      <div className="mt-5 pt-4 border-t border-gray-200/80 flex items-center justify-center gap-1.5 text-xs text-gray-600 font-semibold">
                        <Briefcase className="w-3.5 h-3.5 text-[#F97316]" />
                        <span>{t.exp}</span>
                      </div>

                      {/* LinkedIn Link Icon */}
                      <div className="mt-3.5 flex justify-center">
                        <a
                          href={t.linkedin}
                          aria-label={`${t.name} LinkedIn Profile`}
                          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-blue-50/50 transition-all cursor-pointer"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                  </div>
                </AnimatedSection>
              ))}
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
