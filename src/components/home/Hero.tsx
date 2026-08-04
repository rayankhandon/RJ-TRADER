"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag, ShieldCheck, Truck, Headphones } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="w-full relative bg-[#021225] text-white overflow-hidden min-h-[520px] lg:min-h-[600px] lg:h-[620px] flex items-center border-b border-navy-900">
      
      {/* 1. Full-Width Background Image (Clean wide-angle modern warehouse with left-side open space) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85"
          alt="RJ Traders Modern Industrial Warehouse & Distribution Logistics"
          className="w-full h-full object-cover object-right-center pointer-events-none brightness-[0.85]"
        />
        
        {/* 2. Full-Width Subtle Darkening Overlay (20% dark blue tint for global contrast & text readability) */}
        <div className="absolute inset-0 bg-[#021225]/25 z-10 pointer-events-none" />

        {/* 3. Left-to-Right Gradient Overlay for Text Background */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, rgba(2, 18, 37, 0.96) 0%, rgba(2, 18, 37, 0.88) 35%, rgba(2, 18, 37, 0.50) 60%, transparent 85%)"
          }}
        />

        {/* Subtle Top & Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021225]/40 via-transparent to-[#021225]/50 z-10 pointer-events-none" />
      </div>

      {/* 4. Hero Content Container over Background */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 relative z-20 flex items-center justify-between gap-8">
        
        {/* Left Text Block */}
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-[11px] font-extrabold tracking-widest uppercase mb-3 backdrop-blur-xs">
            <span>WHOLESALE • PACKAGING • LOGISTICS</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2.5xl sm:text-3.5xl lg:text-[40px] xl:text-[43px] font-black tracking-tight leading-[1.14] uppercase text-white font-sans drop-shadow-md mb-3.5">
            YOUR TRUSTED PARTNER IN WHOLESALE, PACKAGING & LOGISTICS
          </h1>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed max-w-xl font-normal drop-shadow-xs mb-7">
            From sourcing to delivery — we help businesses stock smarter, package better, and ship faster. Reliable bulk supply, professional packaging, and nationwide delivery, all under one roof.
          </p>

          {/* 4 Benefit Items Grid (Full Titles, No Truncation, 2x2 on mobile/tablet, 4x1 on desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 p-4 border border-white/20 my-7 bg-[#021225]/85 backdrop-blur-md rounded-lg shadow-lg">
            {/* Item 1 */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0 mt-0.5">
                <Tag className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider leading-tight text-white">
                  WHOLESALE PRICING
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 leading-snug font-normal mt-0.5">
                  Bulk rates that boost your margins
                </span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider leading-tight text-white">
                  QUALITY PRODUCTS
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 leading-snug font-normal mt-0.5">
                  Sourced, checked, guaranteed
                </span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0 mt-0.5">
                <Truck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider leading-tight text-white">
                  NATIONWIDE DELIVERY
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 leading-snug font-normal mt-0.5">
                  On time, every time
                </span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0 mt-0.5">
                <Headphones className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider leading-tight text-white">
                  DEDICATED SUPPORT
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 leading-snug font-normal mt-0.5">
                  Real people, real help
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Button */}
            <Link
              href="/products"
              className="h-12 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-7 rounded-md shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 shrink-0"
            >
              <span>Explore Products →</span>
            </Link>

            {/* Secondary Button */}
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="h-12 bg-[#031224]/80 hover:bg-[#031224] hover:scale-[1.02] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 rounded-md shadow-sm border border-white/40 hover:border-white transition-all cursor-pointer backdrop-blur-xs flex items-center justify-center shrink-0"
            >
              Get a Packaging Quote
            </button>
          </div>

        </div>

        {/* Right-Side Floating Stat & Trust Cards (Hidden on mobile/tablet, visible on xl/desktop) */}
        <div className="hidden xl:flex flex-col gap-4 pointer-events-auto shrink-0 mr-4 lg:mr-12">
          
          {/* Card 1: Option A Stat Highlight (Monthly Deliveries) */}
          <div className="bg-white/95 backdrop-blur-md border border-white/60 text-[#0A1A2F] p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.35)] animate-float flex items-center gap-3.5 w-64 transition-transform hover:scale-105">
            <div className="w-11 h-11 rounded-xl bg-[#F97316] flex items-center justify-center text-white shrink-0 shadow-md">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl font-black font-sans leading-none text-[#0A1A2F] tracking-tight">
                500+
              </div>
              <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mt-1">
                Deliveries Monthly
              </div>
            </div>
          </div>

          {/* Card 2: Option B Trust Badge (Nationwide Cities Covered) */}
          <div className="bg-[#06182F]/90 backdrop-blur-md border border-white/20 text-white p-3.5 rounded-xl shadow-2xl animate-float-delayed flex items-center gap-3 w-56 ml-8 transition-transform hover:scale-105">
            <div className="w-9 h-9 rounded-lg bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-white">
                50+ CITIES
              </div>
              <div className="text-[10px] text-gray-300 font-medium tracking-wide mt-0.5">
                Trusted B2B Network
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
