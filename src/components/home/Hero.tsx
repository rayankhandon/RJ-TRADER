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
      className="w-full relative text-white overflow-hidden h-auto min-h-[520px] md:h-[650px] md:min-h-[650px] py-7 sm:py-10 md:py-0 flex items-center border-b border-navy-900 bg-[#060E1C]"
      style={{
        backgroundImage: "url('/images/brands/hino_banner_ultra_high_quality_1700x650.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark gradient overlay on mobile for text legibility */}
      <div className="absolute inset-0 bg-[#060E1C]/90 sm:bg-[#060E1C]/85 lg:hidden pointer-events-none z-10" />

      {/* Hero Outer Container - Full 1700px width max */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex items-center h-full">

        {/* Dedicated Left-Side Content Container (Restored Desktop Left 40-42% Width) */}
        <div className="w-full max-w-[600px] lg:max-w-[620px] xl:max-w-[650px] my-auto py-2 flex flex-col items-start text-left">

          {/* 1. Category Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F97316]/20 border border-[#F97316]/50 text-[#F97316] text-[9.5px] sm:text-[11px] font-extrabold tracking-wider uppercase mb-3.5 sm:mb-4 backdrop-blur-xs max-w-full leading-tight">
            <span>ENGINE OIL • TRUCK PARTS • AUTOMOTIVE SUPPLIES</span>
          </div>

          {/* 2. Main Heading (Left aligned, White Line 1 & Orange Line 2) */}
          <h1 className="flex flex-col gap-1 font-black uppercase font-sans drop-shadow-md mb-2 tracking-tight animate-load-heading text-left">
            <span className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] leading-[1.15] sm:leading-[1.08] text-white break-words">
              YOUR TRUSTED SOURCE FOR
            </span>
            <span className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] leading-[1.15] sm:leading-[1.08] text-[#F97316] break-words">
              ENGINE OIL &amp; TRUCK SPARE PARTS
            </span>
          </h1>

          {/* 3. Small 45px Orange Underline */}
          <div
            style={{ width: "45px", height: "3px", backgroundColor: "#F97316" }}
            className="rounded-full my-3 sm:my-3.5"
          />

          {/* 4. Subheading Paragraph (Controlled 580px width on desktop) */}
          <p className="text-xs sm:text-sm text-gray-200 leading-[1.55] max-w-[580px] font-normal drop-shadow-xs mb-5 sm:mb-6 animate-load-subtext break-words text-left">
            RJ Traders supplies genuine engine oils and reliable truck spare parts for truck owners, workshops, fleet operators, and retailers. Quality products, competitive prices, and dependable service for your vehicle needs.
          </p>

          {/* 5. CTA Buttons (Side-by-Side on Desktop, Stacked Full-Width on Mobile) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 animate-load-cta w-full mb-5 sm:mb-6">
            {/* Primary Button */}
            <Link
              href="/products?category=engine-oil"
              className="h-11 sm:h-12 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 rounded-xl shadow-md hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto shrink-0"
            >
              <span>SHOP ENGINE OIL →</span>
            </Link>

            {/* Secondary Button */}
            <Link
              href="/products?category=oil-filters"
              className="h-11 sm:h-12 bg-[#031224]/85 hover:bg-[#031224] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 rounded-xl shadow-sm border border-white/35 hover:border-white transition-all cursor-pointer backdrop-blur-xs flex items-center justify-center w-full sm:w-auto shrink-0"
            >
              BROWSE TRUCK PARTS
            </Link>
          </div>

          {/* 6. Four Feature Cards (2x2 Grid, Positioned Below CTA Buttons) */}
          <div className="w-full max-w-[620px] grid grid-cols-2 gap-2 sm:gap-[14px]">
            {/* Box 1: Genuine Products */}
            <div
              style={{ animationDelay: "500ms" }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 w-full rounded-[10px] bg-[#06182F]/90 backdrop-blur-md border border-white/20 hover:border-[#F97316]/60 hover:-translate-y-[2px] transition-all duration-200 ease-out cursor-default animate-feature-box min-h-[75px] sm:min-h-0 justify-center"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F97316]/15 border border-[#F97316]/40 group-hover:bg-[#F97316] group-hover:border-[#F97316] flex items-center justify-center text-[#F97316] group-hover:text-white shrink-0 transition-colors duration-200">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10.5px] sm:text-[12px] font-extrabold uppercase tracking-tight text-white leading-snug break-words">
                  Genuine Products
                </span>
                <span className="text-[9.5px] sm:text-[11px] text-gray-300 font-normal leading-tight mt-0.5 break-words">
                  Original &amp; Quality Assured
                </span>
              </div>
            </div>

            {/* Box 2: Competitive Prices */}
            <div
              style={{ animationDelay: "600ms" }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 w-full rounded-[10px] bg-[#06182F]/90 backdrop-blur-md border border-white/20 hover:border-[#F97316]/60 hover:-translate-y-[2px] transition-all duration-200 ease-out cursor-default animate-feature-box min-h-[75px] sm:min-h-0 justify-center"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F97316]/15 border border-[#F97316]/40 group-hover:bg-[#F97316] group-hover:border-[#F97316] flex items-center justify-center text-[#F97316] group-hover:text-white shrink-0 transition-colors duration-200">
                <Tag className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10.5px] sm:text-[12px] font-extrabold uppercase tracking-tight text-white leading-snug break-words">
                  Competitive Prices
                </span>
                <span className="text-[9.5px] sm:text-[11px] text-gray-300 font-normal leading-tight mt-0.5 break-words">
                  Fair Prices for Every Customer
                </span>
              </div>
            </div>

            {/* Box 3: Truck Spare Parts */}
            <div
              style={{ animationDelay: "700ms" }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 w-full rounded-[10px] bg-[#06182F]/90 backdrop-blur-md border border-white/20 hover:border-[#F97316]/60 hover:-translate-y-[2px] transition-all duration-200 ease-out cursor-default animate-feature-box min-h-[75px] sm:min-h-0 justify-center"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F97316]/15 border border-[#F97316]/40 group-hover:bg-[#F97316] group-hover:border-[#F97316] flex items-center justify-center text-[#F97316] group-hover:text-white shrink-0 transition-colors duration-200">
                <Wrench className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10.5px] sm:text-[12px] font-extrabold uppercase tracking-tight text-white leading-snug break-words">
                  Truck Spare Parts
                </span>
                <span className="text-[9.5px] sm:text-[11px] text-gray-300 font-normal leading-tight mt-0.5 break-words">
                  Parts for Regular Maintenance
                </span>
              </div>
            </div>

            {/* Box 4: Reliable Support */}
            <div
              style={{ animationDelay: "800ms" }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 w-full rounded-[10px] bg-[#06182F]/90 backdrop-blur-md border border-white/20 hover:border-[#F97316]/60 hover:-translate-y-[2px] transition-all duration-200 ease-out cursor-default animate-feature-box min-h-[75px] sm:min-h-0 justify-center"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F97316]/15 border border-[#F97316]/40 group-hover:bg-[#F97316] group-hover:border-[#F97316] flex items-center justify-center text-[#F97316] group-hover:text-white shrink-0 transition-colors duration-200">
                <Headphones className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10.5px] sm:text-[12px] font-extrabold uppercase tracking-tight text-white leading-snug break-words">
                  Reliable Support
                </span>
                <span className="text-[9.5px] sm:text-[11px] text-gray-300 font-normal leading-tight mt-0.5 break-words">
                  Assistance When You Need It
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};



