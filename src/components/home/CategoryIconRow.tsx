"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export interface CategoryItem {
  id: string;
  title: string;
  href: string;
  image: string;
  count: string;
}

export const CATEGORIES_LIST: CategoryItem[] = [
  {
    id: "engine-oil",
    title: "Engine Oil",
    href: "/products?category=engine-oil",
    image: "/images/categories/engine-oil.png",
    count: "120+ Grades",
  },
  {
    id: "oil-filter",
    title: "Oil Filter",
    href: "/products?category=oil-filter",
    image: "/images/categories/oil-filters.png",
    count: "95+ Items",
  },
  {
    id: "fuel-filter",
    title: "Fuel Filter",
    href: "/products?category=fuel-filter",
    image: "/images/categories/fuel-filter.png",
    count: "80+ Items",
  },
  {
    id: "air-filter",
    title: "Air Filter",
    href: "/products?category=air-filter",
    image: "/images/categories/air-filters.png",
    count: "85+ Items",
  },
  {
    id: "coolant",
    title: "Coolant",
    href: "/products?category=coolant",
    image: "/images/categories/coolant.png",
    count: "40+ Items",
  },
  {
    id: "drain-plug-washer",
    title: "Drain Plug Washer",
    href: "/products?category=drain-plug-washer",
    image: "/images/categories/drain-plug-washer.png",
    count: "60+ Items",
  },
  {
    id: "oil-filter-o-ring",
    title: "Oil Filter O-Ring",
    href: "/products?category=oil-filter-o-ring",
    image: "/images/categories/oil-filter-o-ring.png",
    count: "50+ Items",
  },
  {
    id: "fuel-filter-o-ring",
    title: "Fuel Filter O-Ring",
    href: "/products?category=fuel-filter-o-ring",
    image: "/images/categories/fuel-filter-o-ring.png",
    count: "45+ Items",
  },
];

export const CategoryIconRow: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-20 border-b border-[#E5E7EB]">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-10 pb-6 border-b border-gray-100">
            <div className="text-[11px] font-extrabold tracking-widest text-[#ff7a1a] uppercase mb-1.5">
              PRODUCT CATEGORIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06182F] uppercase tracking-tight font-sans">
              SHOP BY CATEGORY
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-normal mt-1.5 max-w-xl text-center">
              Find genuine engine oils, high-efficiency filters, coolants, washers, and O-rings for your vehicle needs.
            </p>
            
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 mt-5 rounded-lg bg-[#06182F] hover:bg-[#ff7a1a] text-white text-xs font-bold uppercase tracking-wider transition-colors duration-300 shadow-sm cursor-pointer shrink-0 group"
            >
              <span>View All Categories</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        {/* 8 Category Cards Grid (4 Cols x 2 Rows Desktop, 2 Cols Mobile/Tablet) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 sm:gap-6">
          {CATEGORIES_LIST.map((cat, idx) => {
            return (
              <AnimatedSection key={cat.id} delayMs={idx * 70} className="h-full">
                <Link
                  href={cat.href}
                  className="w-full bg-white rounded-[14px] border border-black/[0.05] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:border-[#ff7a1a] hover:-translate-y-[6px] transition-all duration-300 ease-out group flex flex-col items-center text-center cursor-pointer h-full justify-between overflow-hidden"
                >
                  {/* Framed Image Container with Soft Gradient Background */}
                  <div className="w-full aspect-square max-w-[110px] rounded-[10px] bg-gradient-to-br from-[#f8f9fb] to-[#eef0f4] border border-black/[0.06] shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center p-2.5 mb-3.5 overflow-hidden shrink-0 transition-colors duration-300">
                    <img
                      src={`${cat.image}?v=3`}
                      alt={cat.title}
                      decoding="async"
                      className="w-full h-full object-contain object-center drop-shadow-xs transition-transform duration-400 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Title & Count */}
                  <div className="flex flex-col items-center justify-center w-full">
                    <h3 className="text-xs sm:text-sm font-black text-[#06182F] uppercase tracking-[0.3px] group-hover:text-[#ff7a1a] transition-colors duration-300 leading-snug font-sans line-clamp-2 min-h-[32px] flex items-center justify-center">
                      {cat.title}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] text-gray-500 font-semibold uppercase tracking-wider block mt-2">
                      {cat.count}
                    </span>
                  </div>

                  {/* Subtle Bottom Accent Indicator */}
                  <div className="w-4 h-0.5 bg-[#ff7a1a] rounded-full mt-3 opacity-0 group-hover:opacity-100 group-hover:w-8 transition-all duration-300" />
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};
