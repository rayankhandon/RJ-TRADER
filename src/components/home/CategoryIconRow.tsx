"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
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
    <section className="w-full bg-[#F8F9FA] py-12 lg:py-16 border-b border-[#E5E7EB]">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Premium Section Header */}
        <AnimatedSection>
          <div className="relative flex flex-col items-center text-center mb-8 pb-6 border-b border-gray-200/80">
            {/* Perfectly Centered Title, Accent & Description Group */}
            <div className="flex flex-col items-center text-center max-w-xl mx-auto">
              <div className="text-[11px] font-extrabold tracking-widest text-[#F97316] uppercase mb-1">
                PRODUCT CATEGORIES
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#06182F] uppercase tracking-tight font-sans">
                SHOP BY CATEGORY
              </h2>
              {/* Centered Small 45px Orange Accent Line */}
              <div
                style={{ width: "45px", height: "3px", backgroundColor: "#F97316" }}
                className="rounded-full my-2.5 mx-auto"
              />
              <p className="text-xs sm:text-sm text-gray-600 font-normal max-w-xl text-center">
                Find genuine engine oils, high-efficiency filters, coolants, washers, and O-rings for your vehicle needs.
              </p>
            </div>

            {/* Right-Aligned VIEW ALL CATEGORIES Button */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:right-0 sm:bottom-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#06182F] hover:bg-[#F97316] border border-[#06182F] hover:border-[#F97316] text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer shrink-0 group"
              >
                <span>VIEW ALL CATEGORIES</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Centered 8 Category Cards Grid: 4 Cols Desktop, 2 Cols Tablet, 2 Cols Mobile */}
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {CATEGORIES_LIST.map((cat, idx) => {
              return (
                <AnimatedSection key={cat.id} delayMs={idx * 50} className="h-full">
                  <Link
                    href={cat.href}
                    className="w-full aspect-auto sm:aspect-square h-[170px] sm:h-auto bg-white rounded-[18px] border border-gray-200/80 p-2.5 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-[#F97316]/80 hover:-translate-y-[4px] transition-all duration-300 ease-out group flex flex-col justify-between cursor-pointer overflow-hidden"
                  >
                    {/* Single Dedicated Product Image Area */}
                    <div className="flex-1 w-full rounded-[12px] bg-[#F3F5F7] group-hover:bg-[#EAEFF5] flex items-center justify-center p-2 sm:p-3.5 overflow-hidden relative transition-colors duration-300">
                      <img
                        src={`${cat.image}?v=3`}
                        alt={cat.title}
                        decoding="async"
                        className="w-full h-full object-contain object-center group-hover:scale-[1.06] transition-transform duration-300 ease-out"
                      />
                    </div>

                    {/* Card Content: Title, Item Count & Arrow Button */}
                    <div className="flex items-center justify-between w-full pt-2.5 pb-0.5 shrink-0 px-0.5">
                      <div className="flex flex-col min-w-0 pr-1.5">
                        <h3 className="text-[11px] sm:text-sm font-extrabold text-[#06182F] uppercase tracking-tight group-hover:text-[#F97316] transition-colors duration-200 truncate font-sans">
                          {cat.title}
                        </h3>
                        <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium block mt-0.5">
                          {cat.count}
                        </span>
                      </div>

                      {/* Circle Arrow Button */}
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 group-hover:bg-[#F97316]/10 border border-transparent group-hover:border-[#F97316]/30 flex items-center justify-center text-gray-400 group-hover:text-[#F97316] shrink-0 transition-all duration-200">
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Mobile Bottom View All Categories Button */}
          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              href="/products"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#06182F] hover:bg-[#F97316] text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer group"
            >
              <span>VIEW ALL CATEGORIES</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

