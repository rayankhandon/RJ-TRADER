"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Tag, Flame, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface PopularProductsProps {
  onOpenQuoteModal: (product?: { id?: string; name?: string; category?: string }) => void;
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
      id: "hino-genuine-oil-4l",
      title: "HINO GENUINE ENGINE OIL 4L",
      category: "HINO OEM",
      desc: "Official Hinopak Motors recommended multi-grade 4L engine oil for Hino commercial trucks.",
      badge: "GENUINE HINO",
      image: "/images/products/959f5f5b-e48d-4297-909e-c7b38fd1c23c.png",
      alt: "HINO Genuine Engine Oil 4L White Container",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "hino-dh2-10w30-blue-drum",
      title: "HINO GENUINE ENGINE OIL DH-2 10W-30",
      category: "HINO DRUM",
      desc: "JASO DH-2 specified 10W-30 low-ash engine oil in a 208L blue steel drum.",
      badge: "LOW ASH DPF",
      image: "/images/products/539b3800-2918-44ce-bf39-12877931acfd.png",
      alt: "HINO Genuine Engine Oil DH-2 10W-30 Blue Steel Drum",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "caltex-delo-gold-ultra",
      title: "CALTEX DELO GOLD ULTRA 15W-40",
      category: "CALTEX / DELO",
      desc: "Heavy-duty multi-grade diesel engine oil engineered for commercial truck fleets.",
      badge: "POPULAR FLEET",
      image: "/images/products/836e69f6-1cbc-4017-934d-7703d5223be4.png",
      alt: "Caltex Delo Gold Ultra 15W-40 4L Container",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "caltex-delo-steel-drum",
      title: "CALTEX DELO STEEL DRUM",
      category: "FACTORY SEALED",
      desc: "Heavy industrial 208L sealed blue steel drum for workshop oil dispensers and fleets.",
      badge: "BULK DRUM",
      image: "/images/products/1132971d-403b-4952-847a-28d0018fefb8.png",
      alt: "Caltex Delo 208L Heavy Industrial Sealed Steel Oil Drum",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "guard-heavy-duty-fuel-filter",
      title: "GUARD HEAVY-DUTY FUEL FILTER",
      category: "GUARD FILTERS",
      desc: "Water-separating heavy duty diesel fuel filter element for commercial transport.",
      badge: "HIGH FLOW",
      image: "/images/products/5485d929-049c-46b5-8759-dfed39792435.png",
      alt: "Guard Heavy Duty Black Diesel Fuel Filter Canister",
      tabs: ["all", "filters"],
    },
    {
      id: "guard-long-life-coolant",
      title: "GUARD LONG LIFE RADIATOR COOLANT",
      category: "GUARD / COOLANT",
      desc: "Pre-mixed long life anti-rust and anti-freeze radiator coolant fluid.",
      badge: "READY TO USE",
      image: "/images/products/c3eca7fc-9bbd-41cc-bf6f-5f2cc1616802.png",
      alt: "Guard Long Life Radiator Coolant Pink Container",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "hino-genuine-oil-filter-15613",
      title: "HINO GENUINE OIL FILTER 15613-E0110",
      category: "HINO OEM PARTS",
      desc: "Original HINO commercial truck spin-on oil filter with anti-drainback valve.",
      badge: "GENUINE OEM",
      image: "/images/products/075c26ac-1595-4509-8441-271a068028ef.png",
      alt: "HINO Genuine Oil Filter 15613-E0110 White Filter",
      tabs: ["all", "filters"],
    },
    {
      id: "oleum-gel-express-75000",
      title: "OLEUM GEL EXPRESS 75000 GREASE",
      category: "OLEUM LUBRICANTS",
      desc: "Extreme pressure lithium complex grease pail for wheel bearings and chassis.",
      badge: "HIGH TEMP EP",
      image: "/images/products/d13efbbf-0eef-4b9c-a85e-c327e1d524ad.png",
      alt: "Oleum Gel Express 75000 Industrial Lithium Complex Grease Pail",
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
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${isActive
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

        {/* Centered Product Grid Container with Comfortable Whitespace & Compact Cards */}
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {filteredProducts.map((prod, idx) => (
              <AnimatedSection key={prod.id} delayMs={idx * 80} className="h-full">
                <div className="bg-white rounded-xl border border-gray-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:-translate-y-[4px] transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden group h-full cursor-default">

                  <div>
                    {/* Studio Compact Product Image Container (140px tall on mobile, 215-230px on desktop) */}
                    <div className="relative w-full h-[140px] sm:h-[215px] lg:h-[230px] bg-[#F8FAFC] border-b border-gray-100 p-2 sm:p-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={prod.image}
                        alt={prod.alt}
                        className="w-full h-full object-contain group-hover:scale-[1.06] transition-transform duration-300 ease-out p-1 sm:p-1.5"
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
                    <div className="p-2.5 sm:p-4 space-y-1 sm:space-y-1.5">
                      <h3 className="text-[11px] sm:text-[13px] font-extrabold text-[#06182F] uppercase tracking-tight group-hover:text-[#F97316] transition-colors duration-200 font-sans line-clamp-1 leading-snug">
                        {prod.title}
                      </h3>

                      <p className="text-[10px] sm:text-[11px] text-gray-500 font-normal leading-relaxed line-clamp-2 min-h-[26px] sm:min-h-[30px]">
                        {prod.desc}
                      </p>

                      <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-gray-600 font-bold pt-0.5">
                        <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#F97316] shrink-0" />
                        <span className="truncate">Wholesale Pricing Available</span>
                      </div>
                    </div>
                  </div>

                  {/* Request Price Button */}
                  <div className="px-2.5 pb-2.5 sm:px-4 sm:pb-4 pt-0 mt-auto">
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal({ id: prod.id, name: prod.title, category: prod.category })}
                      className="w-full py-1.5 sm:py-2 px-2 sm:px-3 bg-[#06182F] hover:bg-[#F97316] hover:scale-[1.02] active:scale-95 text-white text-[9.5px] sm:text-[10.5px] font-extrabold uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer shadow-xs group/btn h-8 sm:h-9"
                    >
                      <span>REQUEST PRICE</span>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
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
