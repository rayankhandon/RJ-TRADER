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
    <section className="w-full relative bg-[#021225] text-white overflow-hidden min-h-[550px] lg:min-h-[640px] xl:min-h-[660px] flex items-center border-b border-navy-900 py-8 lg:py-12">
      
      {/* 1. Full-Width Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85"
          alt="RJ Traders Modern Industrial Warehouse & Distribution Logistics"
          className="w-full h-full object-cover object-right-center pointer-events-none brightness-[0.75]"
        />
        
        {/* 2. Full-Width Darkening Overlay */}
        <div className="absolute inset-0 bg-[#021225]/50 z-10 pointer-events-none" />

        {/* 3. Left-to-Right Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, rgba(2, 18, 37, 0.98) 0%, rgba(2, 18, 37, 0.90) 35%, rgba(2, 18, 37, 0.60) 65%, rgba(2, 18, 37, 0.35) 100%)"
          }}
        />

        {/* Top & Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021225]/50 via-transparent to-[#021225]/60 z-10 pointer-events-none" />
      </div>

      {/* 4. Hero Content Container over Background */}
      <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-12 py-4 lg:py-8 relative z-20 flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-12">

        {/* Left Text Block */}
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* 1. Category Badge (Page-Load Sequence Step 2) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-[11px] font-extrabold tracking-wider uppercase mb-3.5 backdrop-blur-xs whitespace-nowrap animate-load-badge">
            <span>WHOLESALE • PACKAGING • LOGISTICS</span>
          </div>

          {/* 2. Main Heading (Page-Load Sequence Step 3) */}
          <h1 className="flex flex-col gap-0.5 font-black uppercase font-sans drop-shadow-md mb-4 tracking-tight animate-load-heading">
            <span className="text-2.5xl sm:text-3.5xl lg:text-[40px] xl:text-[45px] leading-tight text-white">
              YOUR RELIABLE PARTNER FOR
            </span>
            <span className="text-2.5xl sm:text-3.5xl lg:text-[40px] xl:text-[45px] leading-tight text-[#F97316]">
              WHOLESALE, PACKAGING
            </span>
            <span className="text-2.5xl sm:text-3.5xl lg:text-[40px] xl:text-[45px] leading-tight text-[#F97316]">
              & LOGISTICS
            </span>
          </h1>

          {/* 3. Subheading Paragraph (Page-Load Sequence Step 4) */}
          <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed max-w-xl font-normal drop-shadow-xs mb-7 animate-load-subtext">
            RJ Traders helps businesses source, pack and move products efficiently with reliable wholesale supply, professional packaging and nationwide delivery across Pakistan.
          </p>

          {/* 4. Trust Badges Row (Page-Load Sequence Step 5) */}
          <div className="grid grid-cols-2 lg:inline-flex lg:w-fit my-6 bg-[#06182F]/85 backdrop-blur-md rounded-xl border border-white/20 shadow-xl overflow-hidden divide-y divide-white/15 lg:divide-y-0 lg:divide-x animate-load-trust">
            {/* Item 1 */}
            <div className="flex items-center gap-2.5 px-3 sm:px-3.5 py-2.5 sm:py-3">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0">
                <Tag className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-wider text-white leading-tight">
                  WHOLESALE PRICING
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-snug mt-0.5">
                  Bulk rates that boost margins
                </span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-2.5 px-3 sm:px-3.5 py-2.5 sm:py-3">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-wider text-white leading-tight">
                  QUALITY PRODUCTS
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-snug mt-0.5">
                  Sourced, checked, guaranteed
                </span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-2.5 px-3 sm:px-3.5 py-2.5 sm:py-3">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-wider text-white leading-tight">
                  NATIONWIDE DELIVERY
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-snug mt-0.5">
                  On time, every time
                </span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-2.5 px-3 sm:px-3.5 py-2.5 sm:py-3">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0">
                <Headphones className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-wider text-white leading-tight">
                  DEDICATED SUPPORT
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-snug mt-0.5">
                  Real people, real help
                </span>
              </div>
            </div>
          </div>

          {/* 5. CTA Buttons (Page-Load Sequence Step 6) */}
          <div className="flex flex-wrap items-center gap-4 pt-2 animate-load-cta">
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

        {/* 6. Right-Side Floating Image Box (Page-Load Sequence Step 7) */}
        <div className="relative pointer-events-auto shrink-0 w-full max-w-[420px] sm:max-w-[480px] xl:max-w-[520px] 2xl:max-w-[550px] mx-auto xl:mx-0 mt-10 xl:mt-0 xl:mr-2 lg:mr-6 animate-load-image-box">
          
          {/* Contained Image Card */}
          <div 
            className="relative rounded-[20px] overflow-hidden border border-white/30 bg-[#031428] group transition-all duration-300 hover:border-white/50"
            style={{
              boxShadow: "0 25px 50px rgba(0,0,0,0.35)"
            }}
          >
            <img
              src="/images/rj-traders-hero.jpg"
              alt="RJ Traders Wholesale Logistics Fleet, Packaging & Industrial Oils"
              className="w-full h-[280px] sm:h-[350px] xl:h-[375px] 2xl:h-[395px] object-cover object-[55%_center] transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* 7. Corner-Anchored Stat Badge 1: Bottom-Left (Page-Load Sequence Step 8a) */}
          <div 
            className="absolute z-30 animate-badge-float animate-load-stat-badge-1"
            style={{
              bottom: "-22px",
              left: "-18px"
            }}
          >
            <div 
              className="bg-white/95 backdrop-blur-md border border-white/80 text-[#0A1A2F] px-4 py-3 rounded-[14px] flex items-center gap-3.5"
              style={{
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center text-white shrink-0 shadow-md">
                <Truck className="w-5 h-5" />
              </div>
              <div className="flex flex-col pr-1">
                <span className="text-xl font-black font-sans leading-none text-[#0A1A2F] tracking-tight">
                  500+
                </span>
                <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mt-1 whitespace-nowrap">
                  Businesses Supplied
                </span>
              </div>
            </div>
          </div>

          {/* 8. Corner-Anchored Stat Badge 2: Top-Right (Page-Load Sequence Step 8b) */}
          <div 
            className="absolute z-30 animate-badge-float-delayed animate-load-stat-badge-2"
            style={{
              top: "-20px",
              right: "-18px"
            }}
          >
            <div 
              className="bg-white/95 backdrop-blur-md border border-white/80 text-[#0A1A2F] px-3.5 py-2.5 rounded-[14px] flex items-center gap-3"
              style={{
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
              }}
            >
              <div className="w-8.5 h-8.5 rounded-lg bg-[#06182F] flex items-center justify-center text-[#F97316] shrink-0 shadow-sm">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col pr-1">
                <span className="text-xs font-black uppercase tracking-wider text-[#06182F] whitespace-nowrap">
                  99.8% ON-TIME
                </span>
                <span className="text-[10px] text-gray-600 font-bold tracking-wide whitespace-nowrap">
                  Guaranteed Supply
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
