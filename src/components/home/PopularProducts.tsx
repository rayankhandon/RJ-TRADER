"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Tag, Flame, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface PopularProductsProps {
  onOpenQuoteModal: () => void;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  badge: string;
  image: string;
  alt: string;
  tabs: string[];
}

export const PopularProducts: React.FC<PopularProductsProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Products", icon: Sparkles },
    { id: "engine-oils", label: "Engine Oil & Drums", icon: Flame },
    { id: "filters", label: "Filters", icon: TrendingUp },
    { id: "seals-washers", label: "Seals & Washers", icon: ShieldCheck },
  ];

  const products: ProductItem[] = [
    {
      id: "shell-helix-5w30",
      title: "SHELL HELIX ULTRA 5W-30 SYNTHETIC",
      category: "SHELL / MOBIL",
      desc: "Fully synthetic high performance engine oil for modern petrol & diesel engines.",
      badge: "BEST SELLER",
      image: "/images/products/engine-oil-5w30.png",
      alt: "Shell Helix Ultra 5W-30 Synthetic Engine Oil Container",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "chevron-delo-20w50",
      title: "CHEVRON DELO 400 20W-50 FLEET OIL",
      category: "CHEVRON / FLEET",
      desc: "Heavy-duty multi-grade diesel engine oil engineered for commercial truck fleets.",
      badge: "POPULAR FLEET",
      image: "/images/products/engine-oil-20w50.png",
      alt: "Chevron Delo 400 20W-50 Heavy Duty Fleet Engine Oil Container",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "mobil1-208l-drum",
      title: "MOBIL 1 ESP 208L STEEL DRUM",
      category: "FACTORY SEALED",
      badge: "BULK DRUM",
      desc: "Heavy industrial 208L sealed steel drum for workshop oil dispensers and fleets.",
      image: "/images/products/drum-208l-synthetic.png",
      alt: "Mobil 1 ESP 208L Heavy Industrial Sealed Steel Oil Drum",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "hino-genuine-oil-filter",
      title: "HINO GENUINE HEAVY-DUTY OIL FILTER",
      category: "HINO OEM PARTS",
      badge: "GENUINE OEM",
      desc: "Original HINO commercial truck spin-on oil filter with anti-drainback valve.",
      image: "/images/products/hino-oil-filter-genuine.png",
      alt: "Genuine HINO Heavy Duty Commercial Truck Oil Filter Canister",
      tabs: ["all", "filters"],
    },
    {
      id: "donaldson-fuel-filter",
      title: "DONALDSON DIESEL FUEL FILTER",
      category: "DONALDSON / BALDWIN",
      badge: "HIGH FLOW",
      desc: "Water-separating heavy duty diesel fuel filter element for commercial transport.",
      image: "/images/products/donaldson-fuel-filter.png",
      alt: "Donaldson Heavy Duty Diesel Fuel Filter Cartridge Element",
      tabs: ["all", "filters"],
    },
    {
      id: "caltex-radiator-coolant",
      title: "CALTEX EXTENDED LIFE COOLANT",
      category: "CALTEX / TOTAL",
      badge: "READY TO USE",
      desc: "Pre-mixed ethylene glycol long life radiator coolant and rust inhibitor.",
      image: "/images/products/radiator-coolant-green.png",
      alt: "Caltex Extended Life Green Radiator Coolant Antifreeze Jug",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "industrial-ep2-grease",
      title: "EP-2 MULTI-PURPOSE LITHIUM GREASE",
      category: "HEAVY INDUSTRIAL",
      badge: "HIGH TEMP",
      desc: "Extreme pressure lithium complex grease tub for wheel bearings and chassis.",
      image: "/images/products/industrial-grease-ep2.png",
      alt: "EP-2 Multi-Purpose Industrial Lithium Complex Grease Tub",
      tabs: ["all", "seals-washers"],
    },
    {
      id: "atf-dexron3-fluid",
      title: "ATF DEXRON-III TRANSMISSION FLUID",
      category: "AUTOMATIC FLUID",
      badge: "OEM SPEC",
      desc: "High-viscosity automatic transmission and power steering fluid for commercial trucks.",
      image: "/images/products/atf-dexron-iii.png",
      alt: "ATF Dexron-III Automatic Transmission Fluid Container",
      tabs: ["all", "seals-washers"],
    },
  ];

  const filteredProducts = activeTab === "all"
    ? products
    : products.filter(p => p.tabs.includes(activeTab));

  return (
    <section className="w-full bg-white py-12 lg:py-16 border-b border-gray-200">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="text-[11px] font-extrabold tracking-widest text-[#F97316] uppercase mb-1">
              WHOLESALE CATALOG
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06182F] uppercase tracking-tight font-sans">
              FEATURED ENGINE OILS &amp; SPARE PARTS
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-normal mt-2 max-w-2xl mx-auto">
              Genuine lubricants and quality automotive spare parts available for wholesale &amp; workshop supply across Pakistan.
            </p>
          </div>
        </AnimatedSection>

        {/* Client-Side Filtering Tab Bar */}
        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${isActive
                      ? "bg-[#06182F] text-white shadow-md border border-[#06182F] ring-2 ring-[#F97316]/30"
                      : "bg-[#F8FAFC] text-gray-700 hover:bg-[#FFF8F5] hover:text-[#F97316] border border-gray-200"
                    }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#F97316]" : "text-gray-500"}`} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Centered Product Grid Container with Comfortable Whitespace & Narrower Cards */}
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
            {filteredProducts.map((prod, idx) => (
              <AnimatedSection key={prod.id} delayMs={idx * 80} className="h-full">
                <div className="bg-white rounded-xl border border-gray-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:-translate-y-[4px] transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden group h-full cursor-default">

                  <div>
                    {/* Studio Compact Product Image Container (220–230px tall on desktop) */}
                    <div className="relative w-full h-[200px] sm:h-[215px] lg:h-[230px] bg-[#F8FAFC] border-b border-gray-100 p-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={prod.image}
                        alt={prod.alt}
                        className="w-full h-full object-contain group-hover:scale-[1.06] transition-transform duration-300 ease-out p-1.5"
                      />

                      {/* Top-left Brand Tag */}
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span className="text-[8.5px] font-extrabold text-white bg-[#0A1730]/80 backdrop-blur-[3px] border border-white/10 px-2 py-0.5 rounded-[5px] shadow-xs uppercase tracking-wider">
                          {prod.category}
                        </span>
                      </div>

                      {/* Top-right Status Tag */}
                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="text-[8px] font-extrabold text-[#F97316] bg-[#0A1730]/90 backdrop-blur-[3px] border border-[#F97316]/30 px-2 py-0.5 rounded-[5px] shadow-xs uppercase tracking-wider">
                          {prod.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Body with compact padding */}
                    <div className="p-3.5 sm:p-4 space-y-1.5">
                      <h3 className="text-xs sm:text-[13px] font-extrabold text-[#06182F] uppercase tracking-tight group-hover:text-[#F97316] transition-colors duration-200 font-sans line-clamp-1 leading-snug">
                        {prod.title}
                      </h3>

                      <p className="text-[11px] text-gray-500 font-normal leading-relaxed line-clamp-2 min-h-[30px]">
                        {prod.desc}
                      </p>

                      <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-bold pt-0.5">
                        <Tag className="w-3 h-3 text-[#F97316] shrink-0" />
                        <span>Wholesale Pricing Available</span>
                      </div>
                    </div>
                  </div>

                  {/* Request Price Button */}
                  <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0 mt-auto">
                    <button
                      type="button"
                      onClick={onOpenQuoteModal}
                      className="w-full py-2 px-3 bg-[#06182F] hover:bg-[#F97316] hover:scale-[1.02] active:scale-95 text-white text-[10.5px] font-extrabold uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs group/btn h-9"
                    >
                      <span>REQUEST PRICE</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* View Catalog CTA Link */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#06182F] hover:bg-[#F97316] hover:scale-105 text-white text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md group"
          >
            <span>EXPLORE FULL PARTS &amp; OILS CATALOG →</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
