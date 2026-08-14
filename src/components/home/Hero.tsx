"use client";

import React from "react";
import Link from "next/link";
import { Tag, ShieldCheck, Wrench, Headphones, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="w-full relative bg-[#021225] text-white overflow-hidden min-h-[550px] lg:min-h-[640px] xl:min-h-[660px] flex items-center border-b border-navy-900 py-8 lg:py-12">

      {/* 1. Full-Width Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#060E1C]">
        <img
          src="/images/exact-hero-product-display.jpg?v=2"
          alt="RJ Traders Engine Oil & Truck Spare Parts Warehouse Display"
          className="w-full h-full object-cover object-center pointer-events-none"
        />

        {/* 2. Dark Gradient Overlay (Sharp image, dark navy left for text, vibrant right) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, rgba(6,14,28,0.95) 0%, rgba(6,14,28,0.85) 45%, rgba(6,14,28,0.55) 100%)"
          }}
        />
      </div>

      {/* 4. Hero Content Container over Background */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8 relative z-20 flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-12">

        {/* Left Text Block */}
        <div className="max-w-xl lg:max-w-3xl xl:max-w-4xl w-full">

          {/* 1. Hero Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-[11px] font-extrabold tracking-wider uppercase mb-[20px] backdrop-blur-xs whitespace-nowrap animate-load-badge">
            <span>ENGINE OIL • TRUCK PARTS • AUTOMOTIVE SUPPLIES</span>
          </div>

          {/* 2. Main Heading */}
          <h1 className="flex flex-col gap-0.5 font-black uppercase font-sans drop-shadow-md mb-[20px] tracking-tight animate-load-heading">
            <span className="text-2.5xl sm:text-3.5xl lg:text-[40px] xl:text-[44px] leading-[1.25] text-white">
              YOUR TRUSTED SOURCE FOR
            </span>
            <span className="text-2.5xl sm:text-3.5xl lg:text-[40px] xl:text-[44px] leading-[1.25] text-[#F97316]">
              ENGINE OIL &amp; TRUCK SPARE PARTS
            </span>
          </h1>

          {/* 3. Subheading Paragraph */}
          <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-[1.7] max-w-xl font-normal drop-shadow-xs mb-[32px] animate-load-subtext">
            RJ Traders supplies genuine engine oils and reliable truck spare parts for truck owners, workshops, fleet operators, and retailers. Quality products, competitive prices, and dependable service for your vehicle needs.
          </p>

          {/* 4. Feature Cards Grid */}
          <div className="w-full max-w-[850px] lg:max-w-[880px] xl:max-w-[900px] grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mt-0 mb-[28px]">
            {/* Item 1: Genuine Products */}
            <div
              style={{ animationDelay: "500ms" }}
              className="group relative flex items-center gap-2.5 px-3.5 sm:px-4 py-3 sm:py-3.5 w-full justify-start rounded-[10px] bg-[#06182F]/85 backdrop-blur-md border border-white/15 hover:border-[#ff7a1a] transition-all duration-300 ease-out hover:-translate-y-[4px] hover:shadow-[0_8px_20px_rgba(255,122,26,0.15)] cursor-default overflow-hidden animate-feature-box"
            >
              {/* Inner top border-highlight gradient on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff7a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="w-8 h-8 rounded-full bg-[#ff7a1a]/[0.08] border border-[#ff7a1a]/30 group-hover:bg-[#ff7a1a]/[0.18] group-hover:border-[#ff7a1a] flex items-center justify-center text-[#ff7a1a] shrink-0 transition-colors duration-300">
                <ShieldCheck className="w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-[5deg]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-wider text-white leading-tight mb-[4px]">
                  Genuine Products
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-[1.5]">
                  Original &amp; Quality Assured
                </span>
              </div>
            </div>

            {/* Item 2: Competitive Prices */}
            <div
              style={{ animationDelay: "600ms" }}
              className="group relative flex items-center gap-2.5 px-3.5 sm:px-4 py-3 sm:py-3.5 w-full justify-start rounded-[10px] bg-[#06182F]/85 backdrop-blur-md border border-white/15 hover:border-[#ff7a1a] transition-all duration-300 ease-out hover:-translate-y-[4px] hover:shadow-[0_8px_20px_rgba(255,122,26,0.15)] cursor-default overflow-hidden animate-feature-box"
            >
              {/* Inner top border-highlight gradient on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff7a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="w-8 h-8 rounded-full bg-[#ff7a1a]/[0.08] border border-[#ff7a1a]/30 group-hover:bg-[#ff7a1a]/[0.18] group-hover:border-[#ff7a1a] flex items-center justify-center text-[#ff7a1a] shrink-0 transition-colors duration-300">
                <Tag className="w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-[5deg]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-wider text-white leading-tight mb-[4px]">
                  Competitive Prices
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-[1.5]">
                  Fair Prices for Every Customer
                </span>
              </div>
            </div>

            {/* Item 3: Truck Spare Parts */}
            <div
              style={{ animationDelay: "700ms" }}
              className="group relative flex items-center gap-2.5 px-3.5 sm:px-4 py-3 sm:py-3.5 w-full justify-start rounded-[10px] bg-[#06182F]/85 backdrop-blur-md border border-white/15 hover:border-[#ff7a1a] transition-all duration-300 ease-out hover:-translate-y-[4px] hover:shadow-[0_8px_20px_rgba(255,122,26,0.15)] cursor-default overflow-hidden animate-feature-box"
            >
              {/* Inner top border-highlight gradient on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff7a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="w-8 h-8 rounded-full bg-[#ff7a1a]/[0.08] border border-[#ff7a1a]/30 group-hover:bg-[#ff7a1a]/[0.18] group-hover:border-[#ff7a1a] flex items-center justify-center text-[#ff7a1a] shrink-0 transition-colors duration-300">
                <Wrench className="w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-[5deg]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-wider text-white leading-tight mb-[4px]">
                  Truck Spare Parts
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-[1.5]">
                  Parts for Regular Truck Maintenance
                </span>
              </div>
            </div>

            {/* Item 4: Reliable Support */}
            <div
              style={{ animationDelay: "800ms" }}
              className="group relative flex items-center gap-2.5 px-3.5 sm:px-4 py-3 sm:py-3.5 w-full justify-start rounded-[10px] bg-[#06182F]/85 backdrop-blur-md border border-white/15 hover:border-[#ff7a1a] transition-all duration-300 ease-out hover:-translate-y-[4px] hover:shadow-[0_8px_20px_rgba(255,122,26,0.15)] cursor-default overflow-hidden animate-feature-box"
            >
              {/* Inner top border-highlight gradient on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff7a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="w-8 h-8 rounded-full bg-[#ff7a1a]/[0.08] border border-[#ff7a1a]/30 group-hover:bg-[#ff7a1a]/[0.18] group-hover:border-[#ff7a1a] flex items-center justify-center text-[#ff7a1a] shrink-0 transition-colors duration-300">
                <Headphones className="w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-[5deg]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-wider text-white leading-tight mb-[4px]">
                  Reliable Support
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-300 font-normal leading-[1.5]">
                  Assistance When You Need It
                </span>
              </div>
            </div>
          </div>

          {/* 5. CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-0 pt-0 animate-load-cta">
            {/* Primary Button */}
            <Link
              href="/products?category=engine-oil"
              className="h-12 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-7 rounded-md shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 shrink-0"
            >
              <span>SHOP ENGINE OIL →</span>
            </Link>

            {/* Secondary Button */}
            <Link
              href="/products?category=oil-filters"
              className="h-12 bg-[#031224]/80 hover:bg-[#031224] hover:scale-[1.02] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 rounded-md shadow-sm border border-white/40 hover:border-white transition-all cursor-pointer backdrop-blur-xs flex items-center justify-center shrink-0"
            >
              BROWSE TRUCK PARTS
            </Link>
          </div>

        </div>

        {/* 6. Right-Side Floating Image Box (Expanded Width & Height within Hero Bounds) */}
        <div className="relative pointer-events-auto shrink-0 w-full max-w-[450px] sm:max-w-[520px] lg:max-w-[560px] xl:max-w-[600px] 2xl:max-w-[640px] mx-auto xl:mx-0 mt-6 xl:mt-0 xl:mr-2 lg:mr-4 animate-load-image-box">

          {/* Contained Image Card */}
          <div
            className="relative rounded-[20px] overflow-hidden border border-white/30 bg-[#031428] group transition-all duration-300 hover:border-white/50"
            style={{
              boxShadow: "0 25px 50px rgba(0,0,0,0.35)"
            }}
          >
            <img
              src="/images/rj-traders-hero-box-truck.jpg?v=hq"
              alt="RJ Traders Engine Oil & Truck Spare Parts Inventory Showcase"
              decoding="async"
              className="w-full h-[300px] sm:h-[370px] lg:h-[410px] xl:h-[430px] 2xl:h-[450px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* 7. Corner-Anchored Stat Badge 1: Bottom-Left */}
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
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col pr-1">
                <span className="text-xl font-black font-sans leading-none text-[#0A1A2F] tracking-tight">
                  10,000+
                </span>
                <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mt-1 whitespace-nowrap">
                  Products Available
                </span>
              </div>
            </div>
          </div>

          {/* 8. Corner-Anchored Stat Badge 2: Top-Right */}
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
                  500+
                </span>
                <span className="text-[10px] text-gray-600 font-bold tracking-wide whitespace-nowrap">
                  Customers Served
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
