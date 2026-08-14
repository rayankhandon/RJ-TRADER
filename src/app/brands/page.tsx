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
import { ChevronRight, ShieldCheck, CheckCircle2, ArrowRight, Award, Package, MapPin, Sparkles, Compass } from "lucide-react";

export interface BrandDetail {
  id: string;
  name: string;
  tagline: string;
  origin: string;
  specialty: string;
  logoSvg: React.ReactNode;
  description: string;
  productsDistributed: string[];
  certifications: string;
}

export const DETAILED_BRANDS: BrandDetail[] = [
  {
    id: "shell",
    name: "Shell Lubricants",
    tagline: "Global Leader in Synthetic Oils & Fleet Lubricants",
    origin: "Netherlands / United Kingdom",
    specialty: "Heavy Duty Diesel & Passenger Synthetic Oils",
    certifications: "API CK-4 / ACEA E9 / OEM Approved",
    logoSvg: (
      <svg viewBox="0 0 160 50" className="h-10 sm:h-12 w-auto max-w-[140px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(6, 2)">
          <path
            d="M 20 2 C 10.5 2 3.5 9 3.5 19 C 3.5 29.5 11.5 38.5 20 43 C 28.5 38.5 36.5 29.5 36.5 19 C 36.5 9 29.5 2 20 2 Z"
            fill="#DD1D21"
          />
          <path
            d="M 20 5 C 13.5 5 7.5 11 7.5 18.5 C 7.5 26 13.5 33.5 20 37.5 C 26.5 33.5 32.5 26 32.5 18.5 C 32.5 11 26.5 5 20 5 Z"
            fill="#FFD500"
          />
          <path d="M 20 9 V 34 M 16 11.5 C 17 19.5 17 26.5 16 31.5 M 24 11.5 C 23 19.5 23 26.5 24 31.5 M 12 14.5 C 14 20.5 15 25.5 13 28.5 M 28 14.5 C 26 20.5 25 25.5 27 28.5" stroke="#DD1D21" strokeWidth="1.8" strokeLinecap="round" />
        </g>
        <text x="50" y="32" fontFamily="'Arial Black', Impact, sans-serif" fontWeight="900" fontSize="22" fill="#DD1D21" letterSpacing="0.5">
          Shell
        </text>
      </svg>
    ),
    description:
      "Shell is the world’s #1 global lubricant supplier, trusted by transport fleets, industrial plants, and commercial automotive workshops worldwide. RJ Traders distributes genuine Shell Rimula heavy-duty engine oils, Shell Helix synthetic oils, and factory-sealed 208L steel drums.",
    productsDistributed: [
      "Shell Rimula R4 X & R6 LM Heavy Duty Diesel Oil",
      "Shell Helix Ultra 5W-30 & 5W-40 Synthetic Oils",
      "Shell Tellus S2 MX Industrial Hydraulic Oils",
      "208L Factory Sealed Steel Drums & 20L Buckets",
    ],
  },
  {
    id: "mobil",
    name: "Mobil 1 & Mobil Delvac",
    tagline: "Advanced Full Synthetic & Commercial Transport Oils",
    origin: "United States of America",
    specialty: "High-Performance Fleet & Engine Lubrication",
    certifications: "API SP / CK-4 / Dexos1 Approved",
    logoSvg: (
      <svg viewBox="0 0 145 45" className="h-9 sm:h-10 w-auto max-w-[130px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="32" fontFamily="'Arial Black', Impact, sans-serif" fontWeight="900" fontSize="27" fill="#003366" letterSpacing="-1">
          M<tspan fill="#D0021B">o</tspan>bil
        </text>
        <rect x="110" y="9" width="25" height="25" rx="4" fill="#D0021B" />
        <text x="118" y="28" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="17" fill="#FFFFFF">
          1
        </text>
      </svg>
    ),
    description:
      "Mobil is synonymous with cutting-edge synthetic motor oil technology. Designed for extreme thermal protection and maximum engine longevity, Mobil products are the choice for luxury vehicles and demanding commercial freight trucks across Pakistan.",
    productsDistributed: [
      "Mobil 1 Advanced Full Synthetic 0W-20 & 5W-30",
      "Mobil Delvac MX 15W-40 Commercial Fleet Oil",
      "Mobilube HD Heavy Duty Gear & Axle Lubricants",
      "Mobil 208L Industrial Steel Barrels",
    ],
  },
  {
    id: "chevron-delo",
    name: "Chevron Delo",
    tagline: "Heavy-Duty Diesel Lubricants for Fleet Protection",
    origin: "United States of America",
    specialty: "ISOSYN Technology Heavy Commercial Fluids",
    certifications: "API CK-4 / CJ-4 / Cummins CES Approved",
    logoSvg: (
      <svg viewBox="0 0 155 45" className="h-9 sm:h-10 w-auto max-w-[135px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(4, 6)">
          <path d="M 0 10 L 13 0 L 26 10 L 13 5 Z" fill="#00529B" />
          <path d="M 0 20 L 13 10 L 26 20 L 13 15 Z" fill="#D0021B" />
        </g>
        <text x="38" y="30" fontFamily="'Arial Black', sans-serif" fontWeight="900" fontSize="21" fill="#00529B" letterSpacing="0.5">
          Delo
        </text>
      </svg>
    ),
    description:
      "Chevron Delo utilizes patented ISOSYN Advanced Technology to deliver exceptional soot dispersancy and wear protection for long-haul diesel fleets, agricultural machinery, and heavy construction equipment.",
    productsDistributed: [
      "Chevron Delo 400 SDE 15W-40 Heavy Duty Diesel Oil",
      "Chevron Delo Gold Multigrade 20W-50 Fleet Lube",
      "Chevron Texaco Industrial Greases & Gear Oils",
      "208L Steel Drum Wholesale Supplies",
    ],
  },
  {
    id: "castrol",
    name: "Castrol",
    tagline: "Liquid Engineering for Automotive & Transport Fleet",
    origin: "United Kingdom",
    specialty: "Engine Protection & Thermal Control Fluids",
    certifications: "API SP / ACEA A3/B4 / OEM Endorsed",
    logoSvg: (
      <svg viewBox="0 0 145 45" className="h-9 sm:h-10 w-auto max-w-[130px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(4, 6)">
          <path d="M 0 22 C 0 8 10 0 22 0 C 15 4 8 12 8 22 C 8 28 12 30 16 30 C 8 30 0 22 0 22 Z" fill="#E30613" />
          <path d="M 10 5 C 18 2 26 6 26 15 C 26 22 20 28 14 28 C 20 26 22 18 20 12 C 18 6 14 5 10 5 Z" fill="#00843D" />
        </g>
        <text x="38" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="21" fontStyle="italic" fill="#E30613" letterSpacing="-0.5">
          Castrol
        </text>
      </svg>
    ),
    description:
      "Castrol’s proprietary Dualock and System5 Technology offer unyielding wear protection from the moment the key turns. RJ Traders provides wholesale quantities of Castrol GTX, MAGNATEC, and VECTON commercial fleet oils.",
    productsDistributed: [
      "Castrol VECTON 15W-40 Commercial Engine Oil",
      "Castrol MAGNATEC 5W-30 Dualock Synthetic Oil",
      "Castrol GTX 20W-50 High Mileage Engine Lubricant",
      "Castrol Transmax Automatic Transmission Fluids",
    ],
  },
  {
    id: "totalenergies",
    name: "TotalEnergies",
    tagline: "Quartz & Rubia High Performance Lubricants",
    origin: "France",
    specialty: "Low-SAPS & Fuel-Economy Engine Oils",
    certifications: "API SP / ACEA C3 / MB 229.51",
    logoSvg: (
      <svg viewBox="0 0 165 45" className="h-9 sm:h-10 w-auto max-w-[145px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    description:
      "TotalEnergies produces world-class Quartz and Rubia lubricants, engineered for fuel efficiency and low emissions in modern turbo-charged diesel and petrol engines.",
    productsDistributed: [
      "Total Rubia TIR 7400 15W-40 Fleet Lubricant",
      "Total Quartz 9000 Energy 5W-40 Synthetic Oil",
      "Total Fluidmatic Automatic Transmission Fluids",
      "208L Factory Sealed Drum Shipments",
    ],
  },
  {
    id: "zic",
    name: "SK ZIC Lubricants",
    tagline: "YUBASE Very High Viscosity Index (VHVI) Synthetic Oils",
    origin: "South Korea",
    specialty: "VHVI Group III Synthetic Base Oil Formulation",
    certifications: "API SP / ILSAC GF-6 / DEXOS Approved",
    logoSvg: (
      <svg viewBox="0 0 130 45" className="h-9 sm:h-10 w-auto max-w-[120px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="26" height="24" rx="4" fill="#ED1C24" />
        <text x="9" y="25" fontFamily="'Arial Black', sans-serif" fontWeight="900" fontSize="14" fill="#FFFFFF">
          SK
        </text>
        <text x="36" y="28" fontFamily="'Arial Black', Impact, sans-serif" fontWeight="900" fontSize="22" fill="#0B2545" letterSpacing="0.5">
          ZIC
        </text>
      </svg>
    ),
    description:
      "Formulated with SK Enmove’s patented YUBASE VHVI synthetic base oil, SK ZIC provides superior thermal stability and sludge control for modern high-revving engines and commercial transport fleets.",
    productsDistributed: [
      "SK ZIC X9 & X7 5W-30 Fully Synthetic Engine Oil",
      "SK ZIC X5 20W-50 Heavy Duty Multigrade Oil",
      "SK ZIC M7 / M9 Commercial Motorcycle & Fleet Fluids",
      "SK ZIC 208L Factory Barrels & 4L Jerrycans",
    ],
  },
  {
    id: "kn",
    name: "K&N Engineering",
    tagline: "High-Flow Premium Performance Filters & Assemblies",
    origin: "United States of America",
    specialty: "Cotton Gauze Air Filters & Heavy-Duty Oil Filters",
    certifications: "TUV Certified / ISO 9001",
    logoSvg: (
      <svg viewBox="0 0 135 45" className="h-9 sm:h-10 w-auto max-w-[125px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="120" height="28" rx="4" fill="#000000" />
        <text x="10" y="29" fontFamily="'Arial Black', Impact, sans-serif" fontWeight="900" fontSize="20" fill="#D0021B" letterSpacing="0.5">
          K&amp;<tspan fill="#FFFFFF">N</tspan>
        </text>
        <text x="62" y="25" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="9.5" fill="#FFFFFF" letterSpacing="1.5">
          FILTERS
        </text>
      </svg>
    ),
    description:
      "K&N is the global standard for high-flow air filtration and heavy-duty canister oil filters. Designed to maximize airflow while catching 99%+ of harmful contaminants.",
    productsDistributed: [
      "K&N High-Flow Replacement Air Filter Elements",
      "K&N Heavy-Duty Wrench-Off Oil Filter Canisters",
      "Commercial Truck Performance Intake Assemblies",
      "Recharge & Cleaning Filter Maintenance Kits",
    ],
  },
  {
    id: "hino",
    name: "HINO Genuine Parts",
    tagline: "Original Equipment Spare Parts for HINO Heavy Trucks & Buses",
    origin: "Japan (Toyota Group)",
    specialty: "OEM Engine, Transmission, Suspension & Brake Components",
    certifications: "Genuine Japanese OEM Standard",
    logoSvg: (
      <svg viewBox="0 0 135 45" className="h-10 sm:h-11 w-auto max-w-[125px] object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    description:
      "HINO Genuine Parts are engineered to the exact factory specifications of HINO 300, 500, and 700 series commercial trucks. RJ Traders supplies 100% authentic Japanese OEM filters, brake linings, clutch plates, and engine gaskets.",
    productsDistributed: [
      "HINO 300 / 500 / 700 Genuine Fuel & Oil Filters",
      "HINO Heavy-Duty Brake Linings & Drums",
      "HINO OEM Clutch Plates & Release Bearings",
      "HINO Suspension Shock Absorbers & Leaf Springs",
    ],
  },
];

export default function BrandsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [activeBrandId, setActiveBrandId] = useState<string>("shell");

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <TopBar />
      <Header
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenTrackingModal={() => setIsTrackModalOpen(true)}
      />
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Header Banner */}
      <div 
        className="text-white py-14 lg:py-20 border-b border-white/10 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1730 0%, #0d1f3f 60%, #0a1730 100%)"
        }}
      >
        <style>{`
          @keyframes drawUnderline {
            0% { width: 0px; opacity: 0; }
            100% { width: 80px; opacity: 1; }
          }
        `}</style>

        {/* Soft Blurred Orange Glow (Radial Gradient behind Heading) */}
        <div 
          className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[400px] rounded-full pointer-events-none blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.85) 0%, transparent 65%)"
          }}
        />

        {/* Subtle Diagonal Line / Grid Overlay Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(45deg, rgba(249,115,22,0.5) 1px, transparent 1px)`,
            backgroundSize: "24px 24px"
          }}
        />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs with Fade-In */}
          <div className="flex items-center gap-2 text-xs mb-4 uppercase tracking-wider font-semibold animate-load-subtext">
            <Link href="/" className="text-white hover:underline transition-all">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <span className="text-[#F97316] font-bold">OUR BRANDS</span>
          </div>

          <div className="max-w-3xl">
            {/* "AUTHORIZED DISTRIBUTOR & SUPPLIER" Badge with Pulsing Glow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/15 border border-[#F97316]/50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(249,115,22,0.25)] animate-[pulse_3s_ease-in-out_infinite]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AUTHORIZED DISTRIBUTOR &amp; SUPPLIER</span>
            </div>

            {/* Heading with Fade + Slide Up Animation & Animated Accent Line */}
            <div className="relative mb-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-sans animate-load-heading">
                GLOBAL AUTOMOTIVE &amp; LUBRICANT BRANDS
              </h1>
              {/* Thin Animated Underline Accent Line */}
              <div 
                className="h-[3px] bg-[#F97316] rounded-full mt-3.5 animate-[drawUnderline_0.8s_ease-out_0.4s_forwards]"
                style={{ width: "0px" }}
              />
            </div>

            {/* Subtitle Paragraph */}
            <p className="text-xs sm:text-sm text-[#B8C4D9] max-w-2xl mt-4 font-normal leading-relaxed animate-load-subtext">
              RJ Traders is Pakistan&apos;s trusted wholesale supplier of 100% genuine lubricants, oil drums, and heavy truck spare parts from world-renowned manufacturers.
            </p>
          </div>

          {/* Quick Stat Row (No Divider Line — Spacing Whitespace Separation) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs font-bold text-gray-200">
            {/* Stat Pill 1 */}
            <div 
              style={{ animationDelay: "100ms" }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-[#F97316]/50 hover:bg-white/[0.06] hover:shadow-[0_6px_20px_rgba(249,115,22,0.15)] hover:-translate-y-[3px] transition-all duration-300 ease-out cursor-default group animate-feature-box"
            >
              <div className="w-7 h-7 rounded-md bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                <Award className="w-3.5 h-3.5" />
              </div>
              <span className="font-extrabold uppercase tracking-wide">8 World-Class Brands</span>
            </div>

            {/* Stat Pill 2 */}
            <div 
              style={{ animationDelay: "200ms" }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-[#F97316]/50 hover:bg-white/[0.06] hover:shadow-[0_6px_20px_rgba(249,115,22,0.15)] hover:-translate-y-[3px] transition-all duration-300 ease-out cursor-default group animate-feature-box"
            >
              <div className="w-7 h-7 rounded-md bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="font-extrabold uppercase tracking-wide">Verified Factory Batch Codes</span>
            </div>

            {/* Stat Pill 3 */}
            <div 
              style={{ animationDelay: "300ms" }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-[#F97316]/50 hover:bg-white/[0.06] hover:shadow-[0_6px_20px_rgba(249,115,22,0.15)] hover:-translate-y-[3px] transition-all duration-300 ease-out cursor-default group animate-feature-box"
            >
              <div className="w-7 h-7 rounded-md bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                <Package className="w-3.5 h-3.5" />
              </div>
              <span className="font-extrabold uppercase tracking-wide">208L Steel Drum Supplies</span>
            </div>

            {/* Stat Pill 4 */}
            <div 
              style={{ animationDelay: "400ms" }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-[#F97316]/50 hover:bg-white/[0.06] hover:shadow-[0_6px_20px_rgba(249,115,22,0.15)] hover:-translate-y-[3px] transition-all duration-300 ease-out cursor-default group animate-feature-box"
            >
              <div className="w-7 h-7 rounded-md bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="font-extrabold uppercase tracking-wide">Dispatch from Sadiqabad HQ</span>
            </div>
          </div>

        </div>
      </div>

      <main className="flex-1 w-full py-12 lg:py-16 space-y-12">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick Brand Jump Bar */}
          <AnimatedSection>
            <div className="bg-white rounded-[14px] border border-black/[0.05] p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] mb-10">
              <div className="flex items-center gap-2 mb-3.5 text-[11px] font-black uppercase text-gray-500 tracking-[0.5px]">
                <Compass className="w-4 h-4 text-[#ff7a1a] shrink-0" />
                <span>QUICK NAVIGATE BY BRAND:</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {DETAILED_BRANDS.map((b, pIdx) => {
                  const isActive = activeBrandId === b.id;
                  return (
                    <a
                      key={b.id}
                      href={`#brand-${b.id}`}
                      style={{ animationDelay: `${pIdx * 40}ms` }}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveBrandId(b.id);
                        const el = document.getElementById(`brand-${b.id}`);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer inline-flex items-center justify-center animate-feature-box ${
                        isActive
                          ? "bg-[#ff7a1a] text-white border border-[#ff7a1a] shadow-[0_4px_12px_rgba(255,122,26,0.35)] scale-[1.03]"
                          : "bg-[#F8FAFC] text-[#06182F] border border-black/[0.08] hover:bg-[#ff7a1a]/[0.08] hover:border-[#ff7a1a] hover:text-[#ff7a1a]"
                      }`}
                    >
                      {b.name.split(" ")[0]}
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Detailed Brand Cards Grid */}
          <div className="space-y-8 lg:space-y-10">
            {DETAILED_BRANDS.map((brand, idx) => (
              <AnimatedSection key={brand.id} delayMs={idx * 60}>
                <div
                  id={`brand-${brand.id}`}
                  className="bg-white rounded-[16px] border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.05),_0_1px_3px_rgba(0,0,0,0.08)] hover:-translate-y-[4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] transition-all duration-300 ease-out overflow-hidden group scroll-mt-28"
                >
                  <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Brand Logo & Origin Box (Left Col) */}
                    <div className="lg:col-span-4 rounded-[12px] bg-gradient-to-br from-[#f8f9fb] to-[#eef0f4] p-6 border border-black/[0.06] flex flex-col items-center justify-between text-center min-h-[270px] group-hover:border-[#ff7a1a]/40 transition-colors duration-300">
                      <div className="w-full flex-1 flex items-center justify-center py-4">
                        {brand.logoSvg}
                      </div>

                      <div className="w-full pt-4 border-t border-black/[0.06] space-y-2.5 text-xs">
                        <div>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5px] block mb-0.5">COUNTRY OF ORIGIN</span>
                          <span className="font-extrabold text-[#06182F]">{brand.origin}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5px] block mb-0.5">SPECIALIZATION</span>
                          <span className="font-bold text-[#ff7a1a] leading-[1.4] block">{brand.specialty}</span>
                        </div>
                      </div>
                    </div>

                    {/* Brand Details & Products Distributed (Right Col) */}
                    <div className="lg:col-span-8 space-y-5">
                      <div>
                        {/* Certification Badge with Soft Pulsing Glow */}
                        <div className="inline-flex items-center gap-2 text-[10.5px] font-extrabold uppercase text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-lg border border-emerald-200/80 mb-3 shadow-[0_0_12px_rgba(16,185,129,0.2)] animate-[pulse_3s_ease-in-out_infinite]">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{brand.certifications}</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#06182F] uppercase tracking-tight font-sans">
                          {brand.name}
                        </h2>
                        <p className="text-xs sm:text-sm font-bold text-[#ff7a1a] uppercase mt-0.5">
                          {brand.tagline}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                        {brand.description}
                      </p>

                      {/* Products Distributed List */}
                      <div>
                        <span className="text-xs font-black uppercase text-[#06182F] tracking-wider block mb-3">
                          PRODUCTS DISTRIBUTED BY RJ TRADERS:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-gray-700">
                          {brand.productsDistributed.map((prod, pIdx) => (
                            <div 
                              key={pIdx} 
                              style={{ animationDelay: `${pIdx * 60}ms` }}
                              className="flex items-center gap-2.5 bg-black/[0.02] hover:bg-[#ff7a1a]/[0.05] p-3 rounded-lg border border-black/[0.05] hover:border-[#ff7a1a] transition-all duration-250 ease-out group/item"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#ff7a1a]/15 text-[#ff7a1a] flex items-center justify-center shrink-0 group-hover/item:bg-[#ff7a1a] group-hover/item:text-white transition-colors duration-250">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </div>
                              <span className="line-clamp-1 group-hover/item:text-[#06182F]">{prod}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="pt-3 flex flex-wrap items-center gap-3.5">
                        <Link
                          href={`/products?brand=${brand.id}`}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#06182F] hover:bg-[#ff7a1a] text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-95 group/btn cursor-pointer"
                        >
                          <span>Explore {brand.name.split(" ")[0]} Products</span>
                          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsQuoteModalOpen(true)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#ff7a1a]/[0.06] text-[#06182F] hover:text-[#ff7a1a] border border-gray-300 hover:border-[#ff7a1a] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-2xs active:scale-95 cursor-pointer"
                        >
                          <span>Request Bulk Quote</span>
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom Call to Action Banner */}
          <AnimatedSection delayMs={200}>
            <div className="mt-14 bg-[#06182F] text-white rounded-[22px] border border-white/10 p-8 sm:p-10 lg:p-12 text-center relative overflow-hidden shadow-xl">
              <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                }}
              />
              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#F97316] uppercase tracking-widest">
                  <Award className="w-4 h-4" />
                  <span>100% GENUINE GUARANTEE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans">
                  NEED BULK SUPPLY FOR YOUR FLEET OR WORKSHOP?
                </h3>
                <p className="text-xs sm:text-sm text-[#B8C4D9] font-normal leading-relaxed">
                  Our B2B wholesale desk in Sadiqabad provides factory-sealed 208L drums and wholesale cartons with fast dispatch across Pakistan.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="px-7 py-3 rounded-xl bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                  >
                    REQUEST BULK BRAND QUOTE NOW
                  </button>
                  <Link
                    href="/contact"
                    className="px-7 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-black uppercase tracking-wider transition-colors"
                  >
                    CONTACT SALES DESK
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </main>

      <Footer />
      <FloatingWidgets onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <OrderTrackingModal isOpen={isTrackModalOpen} onClose={() => setIsTrackModalOpen(false)} />
    </div>
  );
}
