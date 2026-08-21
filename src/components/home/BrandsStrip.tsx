"use client";

import React from "react";
import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export interface Brand {
  id: string;
  name: string;
  logoSvg: React.ReactNode;
}

export const BRANDS: Brand[] = [
  {
    id: "shell",
    name: "Shell Lubricants",
    logoSvg: (
      <svg viewBox="0 0 160 50" className="h-9 sm:h-10 w-auto max-w-[130px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Authentic Official Shell Pectin Emblem */}
        <g transform="translate(6, 2)">
          <path
            d="M 20 2 C 10.5 2 3.5 9 3.5 19 C 3.5 29.5 11.5 38.5 20 43 C 28.5 38.5 36.5 29.5 36.5 19 C 36.5 9 29.5 2 20 2 Z"
            fill="#DD1D21"
          />
          <path
            d="M 20 5 C 13.5 5 7.5 11 7.5 18.5 C 7.5 26 13.5 33.5 20 37.5 C 26.5 33.5 32.5 26 32.5 18.5 C 32.5 11 26.5 5 20 5 Z"
            fill="#FFD500"
          />
          {/* Shell Pectin Rib Lines */}
          <path d="M 20 9 V 34 M 16 11.5 C 17 19.5 17 26.5 16 31.5 M 24 11.5 C 23 19.5 23 26.5 24 31.5 M 12 14.5 C 14 20.5 15 25.5 13 28.5 M 28 14.5 C 26 20.5 25 25.5 27 28.5" stroke="#DD1D21" strokeWidth="1.8" strokeLinecap="round" />
        </g>
        {/* Official Shell Wordmark */}
        <text x="50" y="32" fontFamily="'Arial Black', Impact, sans-serif" fontWeight="900" fontSize="22" fill="#DD1D21" letterSpacing="0.5">
          Shell
        </text>
      </svg>
    ),
  },
  {
    id: "mobil",
    name: "Mobil 1",
    logoSvg: (
      <svg viewBox="0 0 145 45" className="h-8 sm:h-9 w-auto max-w-[120px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="32" fontFamily="'Arial Black', Impact, sans-serif" fontWeight="900" fontSize="27" fill="#003366" letterSpacing="-1">
          M<tspan fill="#D0021B">o</tspan>bil
        </text>
        <rect x="110" y="9" width="25" height="25" rx="4" fill="#D0021B" />
        <text x="118" y="28" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="17" fill="#FFFFFF">
          1
        </text>
      </svg>
    ),
  },
  {
    id: "chevron-delo",
    name: "Chevron Delo",
    logoSvg: (
      <svg viewBox="0 0 155 45" className="h-8 sm:h-9 w-auto max-w-[130px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(4, 6)">
          <path d="M 0 10 L 13 0 L 26 10 L 13 5 Z" fill="#00529B" />
          <path d="M 0 20 L 13 10 L 26 20 L 13 15 Z" fill="#D0021B" />
        </g>
        <text x="38" y="30" fontFamily="'Arial Black', sans-serif" fontWeight="900" fontSize="21" fill="#00529B" letterSpacing="0.5">
          Delo
        </text>
      </svg>
    ),
  },
  {
    id: "castrol",
    name: "Castrol",
    logoSvg: (
      <svg viewBox="0 0 145 45" className="h-8 sm:h-9 w-auto max-w-[120px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(4, 6)">
          <path d="M 0 22 C 0 8 10 0 22 0 C 15 4 8 12 8 22 C 8 28 12 30 16 30 C 8 30 0 22 0 22 Z" fill="#E30613" />
          <path d="M 10 5 C 18 2 26 6 26 15 C 26 22 20 28 14 28 C 20 26 22 18 20 12 C 18 6 14 5 10 5 Z" fill="#00843D" />
        </g>
        <text x="38" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="21" fontStyle="italic" fill="#E30613" letterSpacing="-0.5">
          Castrol
        </text>
      </svg>
    ),
  },
  {
    id: "totalenergies",
    name: "TotalEnergies",
    logoSvg: (
      <svg viewBox="0 0 165 45" className="h-8 sm:h-9 w-auto max-w-[140px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(4, 7)">
          <circle cx="12" cy="12" r="11" fill="#ED1C24" opacity="0.95" />
          <circle cx="17" cy="9" r="8" fill="#FFC20E" opacity="0.9" />
          <circle cx="9" cy="17" r="6" fill="#00A0E9" opacity="0.9" />
        </g>
        <text x="36" y="28" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" fill="#0E2D67">
          TOTAL<tspan fill="#ED1C24" fontSize="12">ENERGIES</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: "zic",
    name: "ZIC",
    logoSvg: (
      <svg viewBox="0 0 130 45" className="h-8 sm:h-9 w-auto max-w-[110px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="26" height="24" rx="4" fill="#ED1C24" />
        <text x="9" y="25" fontFamily="'Arial Black', sans-serif" fontWeight="900" fontSize="14" fill="#FFFFFF">
          SK
        </text>
        <text x="36" y="28" fontFamily="'Arial Black', Impact, sans-serif" fontWeight="900" fontSize="22" fill="#0B2545" letterSpacing="0.5">
          ZIC
        </text>
      </svg>
    ),
  },
  {
    id: "kn",
    name: "K&N",
    logoSvg: (
      <svg viewBox="0 0 135 45" className="h-8 sm:h-9 w-auto max-w-[115px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="120" height="28" rx="4" fill="#000000" />
        <text x="10" y="29" fontFamily="'Arial Black', Impact, sans-serif" fontWeight="900" fontSize="20" fill="#D0021B" letterSpacing="0.5">
          K&amp;<tspan fill="#FFFFFF">N</tspan>
        </text>
        <text x="62" y="25" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="9.5" fill="#FFFFFF" letterSpacing="1.5">
          FILTERS
        </text>
      </svg>
    ),
  },
  {
    id: "hino",
    name: "HINO",
    logoSvg: (
      <svg viewBox="0 0 135 45" className="h-9 sm:h-10 w-auto max-w-[115px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(4, 2)">
          <circle cx="15" cy="15" r="14" fill="#E30613" />
          <path d="M 7 15 H 23 M 15 7 V 23 M 9 9 L 21 21 M 9 21 L 21 9" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        </g>
        <text x="44" y="22" fontFamily="'Arial Black', Impact, sans-serif" fontWeight="900" fontSize="19" fill="#E30613" letterSpacing="1">
          HINO
        </text>
        <text x="44" y="34" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="8.5" fill="#06182F" letterSpacing="1">
          GENUINE
        </text>
      </svg>
    ),
  },
];

export const BrandsStrip: React.FC = () => {
  return (
    <section id="brands" className="w-full bg-[#F7F9FC] py-14 lg:py-16 border-b border-[#E5E7EB]">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-10">
            <div className="text-[11px] font-extrabold tracking-widest text-[#F97316] uppercase mb-1.5">
              TRUSTED BRANDS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06182F] uppercase tracking-tight font-sans">
              TOP BRANDS WE DEAL IN
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-normal mt-1 max-w-xl mx-auto">
              Quality products from globally trusted automotive, lubricant and truck manufacturers.
            </p>
          </div>
        </AnimatedSection>

        {/* Single Wide White Container — Continuous Horizontal Brand Logo Strip */}
        <AnimatedSection delayMs={100}>
          <div className="bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_8px_30px_rgba(0,0,0,0.04)] px-6 sm:px-10 py-7 lg:py-9">
            
            {/* ONE Continuous Horizontal Row (No cards, no boxes, no tiles, equal spacing) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:items-center lg:justify-between gap-6 sm:gap-8 lg:gap-4 items-center">
              {BRANDS.map((brand) => (
                <div
                  key={brand.id}
                  className="flex items-center justify-center h-12 px-2 transition-transform duration-300 hover:scale-108 cursor-pointer select-none"
                  title={brand.name}
                >
                  {brand.logoSvg}
                </div>
              ))}
            </div>

            {/* Very Thin Light-Gray Divider */}
            <div className="w-full h-px bg-gray-100 mt-7 mb-5" />

            {/* Simple Text-Based Horizontal Trust Line */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold text-[#06182F] text-center">
              <div className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Genuine Products</span>
              </div>
              <span className="text-gray-300 font-normal">•</span>
              <div className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Quality Checked</span>
              </div>
              <span className="text-gray-300 font-normal">•</span>
              <div className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Trusted Brands</span>
              </div>
              <span className="text-gray-300 font-normal">•</span>
              <div className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Reliable Supply</span>
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
