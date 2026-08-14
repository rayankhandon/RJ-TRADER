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
      id: "engine-oils-5w30",
      title: "SYNTHETIC 5W-30 ENGINE OIL",
      category: "SHELL / MOBIL",
      desc: "Fully synthetic high performance engine oil for petrol & diesel engines.",
      badge: "BEST SELLER",
      image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=500&h=500&q=80",
      alt: "Motor synthetic engine oil bottle",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "oil-drums-208l",
      title: "208L STEEL OIL DRUMS",
      category: "FACTORY SEALED",
      badge: "BULK DRUMS",
      desc: "Heavy-duty 208L steel drums for workshop oil dispensers and industrial fleets.",
      image: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=500&h=500&q=80",
      alt: "Industrial steel oil drums",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "oil-filters-mann",
      title: "HIGH-EFFICIENCY OIL FILTERS",
      category: "MANN / FRAM",
      badge: "OEM SPEC",
      desc: "99.2% dirt filtration efficiency spin-on oil filter cartridges.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=500&h=500&q=80",
      alt: "Engine spin-on oil filter",
      tabs: ["all", "filters"],
    },
    {
      id: "fuel-filters-heavy",
      title: "HEAVY-DUTY FUEL FILTERS",
      category: "DONALDSON / BALDWIN",
      badge: "HIGH FLOW",
      desc: "Water-separating heavy duty fuel filter elements for commercial diesel engines.",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=500&h=500&q=80",
      alt: "Heavy duty diesel fuel filter",
      tabs: ["all", "filters"],
    },
    {
      id: "air-filters-panel",
      title: "HIGH-FLOW AIR FILTERS",
      category: "WIX / MANN",
      badge: "PREMIUM MESH",
      desc: "Multi-layer pleated paper air filter panels for maximum dust holding capacity.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&h=500&q=80",
      alt: "Automotive engine air filter panel",
      tabs: ["all", "filters"],
    },
    {
      id: "coolant-long-life",
      title: "LONG-LIFE COOLANT / ANTIFREEZE",
      category: "CALTEX / TOTAL",
      badge: "READY TO USE",
      desc: "Pre-mixed ethylene glycol long life radiator coolant and corrosion inhibitor.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=500&h=500&q=80",
      alt: "Radiator coolant antifreeze jug",
      tabs: ["all", "engine-oils"],
    },
    {
      id: "drain-plug-washers",
      title: "DRAIN PLUG WASHERS",
      category: "COPPER / ALUMINUM",
      badge: "LEAK PROOF",
      desc: "Crushable copper and aluminum oil drain plug sealing washer assortments.",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=500&h=500&q=80",
      alt: "Copper drain plug sealing washers",
      tabs: ["all", "seals-washers"],
    },
    {
      id: "oil-filter-o-rings",
      title: "OIL FILTER O-RINGS",
      category: "RUBBER SEAL KIT",
      badge: "HEAT RESISTANT",
      desc: "High-temperature NBR rubber O-ring seal replacements for oil filter housings.",
      image: "https://images.unsplash.com/photo-1618090584126-129cd1f3fbae?auto=format&fit=crop&w=500&h=500&q=80",
      alt: "Rubber O-ring gasket seal kit",
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((prod, idx) => (
            <AnimatedSection key={prod.id} delayMs={idx * 80} className="h-full">
              <div className="bg-white rounded-[14px] border border-gray-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)] hover:-translate-y-[6px] transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden group h-full cursor-default">

                <div>
                  {/* Studio Product Image Container */}
                  <div className="relative w-full aspect-square bg-[#F8FAFC] border-b border-gray-100 p-3.5 flex items-center justify-center overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-300 ease-out rounded-lg"
                    />

                    {/* Top-left Brand Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[9px] font-extrabold text-white bg-[#0A1730]/75 backdrop-blur-[4px] border border-white/10 px-2.5 py-1 rounded-[6px] shadow-xs uppercase tracking-wider">
                        {prod.category}
                      </span>
                    </div>

                    {/* Top-right Status Tag */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[8.5px] font-extrabold text-[#F97316] bg-[#0A1730]/85 backdrop-blur-[4px] border border-[#F97316]/30 px-2.5 py-1 rounded-[6px] shadow-xs uppercase tracking-wider">
                        {prod.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body with 20px internal padding */}
                  <div className="p-5">
                    <h3 className="text-xs sm:text-sm font-black text-[#06182F] uppercase tracking-tight group-hover:text-[#F97316] transition-colors duration-200 font-sans line-clamp-1">
                      {prod.title}
                    </h3>

                    <p className="text-[11.5px] text-gray-500 font-normal leading-relaxed line-clamp-2 mt-1.5 min-h-[34px]">
                      {prod.desc}
                    </p>

                    <div className="flex items-center gap-1.5 text-[10.5px] text-gray-600 font-bold mt-3">
                      <Tag className="w-3.5 h-3.5 text-[#F97316]" />
                      <span>Wholesale Pricing Available</span>
                    </div>
                  </div>
                </div>

                {/* Request Price Button */}
                <div className="px-5 pb-5 pt-0 mt-auto">
                  <button
                    type="button"
                    onClick={onOpenQuoteModal}
                    className="w-full py-2.5 px-4 bg-[#06182F] hover:bg-[#F97316] hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] text-white text-[11px] font-extrabold uppercase tracking-wider rounded-lg transition-all duration-300 ease-out flex items-center justify-center gap-2 cursor-pointer shadow-xs group/btn"
                  >
                    <span>REQUEST PRICE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

              </div>
            </AnimatedSection>
          ))}
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
