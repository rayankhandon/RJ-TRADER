"use client";

import React from "react";
import Link from "next/link";
import { Tag, ShieldCheck, Wrench, Headphones } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      className="w-full relative text-white overflow-hidden h-[650px] min-h-[650px] flex items-center border-b border-navy-900 bg-[#060E1C]"
      style={{
        backgroundImage: "url('/images/brands/hino_banner_ultra_high_quality_1700x650.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* Mobile-only background overlay for text contrast on narrow screens */}
      <div className="absolute inset-0 bg-[#060E1C]/85 lg:hidden pointer-events-none z-10" />

      {/* Hero Outer Container - Full 1700px width max */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex items-center h-full">

        {/* Dedicated Left-Side Content Container (Vertically Centered inside 650px) */}
        <div className="w-full max-w-[650px] lg:max-w-[660px] xl:max-w-[680px] my-auto py-2">

          {/* 1. Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F97316]/15 border border-[#F97316]/40 text-[#F97316] text-[11px] font-extrabold tracking-wider uppercase mb-4 backdrop-blur-xs whitespace-nowrap animate-load-badge">
            <span>ENGINE OIL • TRUCK PARTS • AUTOMOTIVE SUPPLIES</span>
          </div>

          {/* 2. Main Heading */}
          <h1 className="flex flex-col gap-1 font-black uppercase font-sans drop-shadow-md mb-2 tracking-tight animate-load-heading">
            <span className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] leading-[1.08] text-white whitespace-nowrap">
              YOUR TRUSTED SOURCE FOR
            </span>
            <span className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] leading-[1.08] text-[#F97316] whitespace-nowrap">
              ENGINE OIL &amp; TRUCK SPARE PARTS
            </span>
          </h1>

          {/* 3. Small 45px Orange Underline */}
          <div
            style={{ width: "45px", height: "3px", backgroundColor: "#F97316" }}
            className="rounded-full my-3.5"
          />

          {/* 4. Subheading Paragraph */}
          <p className="text-xs sm:text-sm text-gray-200 leading-[1.5] max-w-[580px] font-normal drop-shadow-xs mb-[22px] animate-load-subtext">
            RJ Traders supplies genuine engine oils and reliable truck spare parts for truck owners, workshops, fleet operators, and retailers. Quality products, competitive prices, and dependable service for your vehicle needs.
          </p>

          {/* 5. Four Feature Boxes (Equal-size 2x2 Grid with exact 14px gap) */}
          <div className="w-full max-w-[620px] grid grid-cols-1 sm:grid-cols-2 gap-[14px] mb-[24px]">
            {/* Box 1: Genuine Products */}
            <div
              style={{ animationDelay: "500ms" }}
              className="group flex items-center gap-3 p-3.5 w-full rounded-[8px] bg-[#06182F]/85 backdrop-blur-md border border-white/15 hover:border-[#F97316]/60 hover:-translate-y-[2px] transition-all duration-200 ease-out cursor-default overflow-hidden animate-feature-box h-full"
            >
              <div className="w-7 h-7 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 group-hover:bg-[#F97316]/20 group-hover:border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0 transition-colors duration-200">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider text-white leading-tight truncate">
                  Genuine Products
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-tight mt-0.5 truncate">
                  Original &amp; Quality Assured
                </span>
              </div>
            </div>

            {/* Box 2: Competitive Prices */}
            <div
              style={{ animationDelay: "600ms" }}
              className="group flex items-center gap-3 p-3.5 w-full rounded-[8px] bg-[#06182F]/85 backdrop-blur-md border border-white/15 hover:border-[#F97316]/60 hover:-translate-y-[2px] transition-all duration-200 ease-out cursor-default overflow-hidden animate-feature-box h-full"
            >
              <div className="w-7 h-7 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 group-hover:bg-[#F97316]/20 group-hover:border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0 transition-colors duration-200">
                <Tag className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider text-white leading-tight truncate">
                  Competitive Prices
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-tight mt-0.5 truncate">
                  Fair Prices for Every Customer
                </span>
              </div>
            </div>

            {/* Box 3: Truck Spare Parts */}
            <div
              style={{ animationDelay: "700ms" }}
              className="group flex items-center gap-3 p-3.5 w-full rounded-[8px] bg-[#06182F]/85 backdrop-blur-md border border-white/15 hover:border-[#F97316]/60 hover:-translate-y-[2px] transition-all duration-200 ease-out cursor-default overflow-hidden animate-feature-box h-full"
            >
              <div className="w-7 h-7 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 group-hover:bg-[#F97316]/20 group-hover:border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0 transition-colors duration-200">
                <Wrench className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider text-white leading-tight truncate">
                  Truck Spare Parts
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-tight mt-0.5 truncate">
                  Parts for Regular Maintenance
                </span>
              </div>
            </div>

            {/* Box 4: Reliable Support */}
            <div
              style={{ animationDelay: "800ms" }}
              className="group flex items-center gap-3 p-3.5 w-full rounded-[8px] bg-[#06182F]/85 backdrop-blur-md border border-white/15 hover:border-[#F97316]/60 hover:-translate-y-[2px] transition-all duration-200 ease-out cursor-default overflow-hidden animate-feature-box h-full"
            >
              <div className="w-7 h-7 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 group-hover:bg-[#F97316]/20 group-hover:border-[#F97316] flex items-center justify-center text-[#F97316] shrink-0 transition-colors duration-200">
                <Headphones className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider text-white leading-tight truncate">
                  Reliable Support
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-tight mt-0.5 truncate">
                  Assistance When You Need It
                </span>
              </div>
            </div>
          </div>

          {/* 6. CTA Buttons (Aligned with left edge of feature boxes) */}
          <div className="flex flex-wrap items-center gap-4 animate-load-cta">
            {/* Primary Button */}
            <Link
              href="/products?category=engine-oil"
              className="h-11 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 rounded-[6px] shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0"
            >
              <span>SHOP ENGINE OIL →</span>
            </Link>

            {/* Secondary Button */}
            <Link
              href="/products?category=oil-filters"
              className="h-11 bg-[#031224]/80 hover:bg-[#031224] hover:scale-[1.02] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 rounded-[6px] shadow-sm border border-white/40 hover:border-white transition-all cursor-pointer backdrop-blur-xs flex items-center justify-center shrink-0"
            >
              BROWSE TRUCK PARTS
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};



