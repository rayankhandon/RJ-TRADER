"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { OrderTrackingModal } from "@/components/ui/OrderTrackingModal";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { FloatingWidgets } from "@/components/common/FloatingWidgets";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/navigation";
import {
  Filter,
  ArrowRight,
  ChevronRight,
  Search,
  Layers,
  Droplet,
  Fuel,
  Wind,
  Snowflake,
  Disc,
  CircleDot,
  Circle,
  Package,
  Truck,
  Sparkles,
  FileText
} from "lucide-react";

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Distinct icon mapping per category
  const getCategoryIcon = (catId: string, isSelected: boolean) => {
    const iconClass = `w-4 h-4 shrink-0 transition-colors ${
      isSelected ? "text-[#F97316]" : "text-gray-400 group-hover:text-[#F97316]"
    }`;

    switch (catId) {
      case "engine-oil":
        return <Droplet className={iconClass} strokeWidth={2} />;
      case "oil-filter":
        return <Filter className={iconClass} strokeWidth={2} />;
      case "fuel-filter":
        return <Fuel className={iconClass} strokeWidth={2} />;
      case "air-filter":
        return <Wind className={iconClass} strokeWidth={2} />;
      case "coolant":
        return <Snowflake className={iconClass} strokeWidth={2} />;
      case "drain-plug-washer":
        return <Disc className={iconClass} strokeWidth={2} />;
      case "oil-filter-o-ring":
        return <CircleDot className={iconClass} strokeWidth={2} />;
      case "fuel-filter-o-ring":
        return <Circle className={iconClass} strokeWidth={2.5} />;
      default:
        return <Layers className={iconClass} strokeWidth={2} />;
    }
  };

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "badge") {
      result = [...result].sort((a, b) => (b.badge ? 1 : -1));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6F8]">
      <TopBar />
      <Header
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenTrackingModal={() => setIsTrackModalOpen(true)}
      />
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* 1. Header Banner (Dark Navy Strip with Overlay Texture) */}
      <div className="relative bg-[#06182F] text-white py-10 lg:py-14 border-b border-white/10 overflow-hidden">
        {/* Subtle Warehouse Texture Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="RJ Traders Distribution Warehouse"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182F] via-[#06182F]/95 to-[#0B2545]/90 pointer-events-none" />

        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-2.5 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-[#F97316] transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[#F97316]">WHOLESALE PRODUCTS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white flex items-center gap-3">
            <span>B2B WHOLESALE PRODUCT CATALOG</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#B8C4D9] max-w-2xl mt-1.5 font-normal leading-relaxed">
            Explore genuine engine oils, 208L industrial steel drums, hydraulic fluids, gear lubricants, and automotive fluids at direct wholesale bulk pricing across Pakistan.
          </p>
        </div>
      </div>

      {/* 2. Main Catalog Area */}
      <main className="flex-1 w-full py-7 lg:py-10">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left Sidebar Filter (Wider Column w-88 xl:w-96 = ~352-384px) */}
            <aside className="w-full lg:w-88 xl:w-96 shrink-0">
              <style>{`
                @keyframes slideRight {
                  0% { opacity: 0; transform: translateX(-16px); }
                  100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideDownHeader {
                  0% { opacity: 0; transform: translateY(-8px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
              `}</style>

              <div className="bg-white border border-gray-200/90 rounded-xl p-4 sm:p-5 shadow-xs sticky top-24 animate-[slideRight_0.5s_ease-out_forwards]">

                {/* Filter Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 mb-3.5 animate-[slideDownHeader_0.4s_ease-out_forwards]">
                  <div className="flex items-center gap-2 font-black uppercase text-xs sm:text-sm text-[#0A1A2F]">
                    <Filter className="w-4 h-4 text-[#F97316]" />
                    <span>CATEGORIES</span>
                  </div>
                  {selectedCategory !== "all" && (
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="text-[11px] font-extrabold text-[#F97316] hover:underline uppercase cursor-pointer"
                    >
                      RESET FILTER
                    </button>
                  )}
                </div>

                {/* Interactive Category Filter List */}
                <div className="space-y-1.5">
                  {/* All Products Row */}
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-3.5 py-3.5 rounded-lg text-xs font-bold uppercase transition-all duration-200 flex items-center justify-between cursor-pointer gap-3 group border-l-4 ${
                      selectedCategory === "all"
                        ? "bg-[#06182F] text-white shadow-sm border-l-[#F97316]"
                        : "text-gray-700 hover:bg-[#F97316]/[0.04] hover:text-[#F97316] border-l-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <Layers className={`w-4 h-4 shrink-0 transition-colors ${selectedCategory === "all" ? "text-[#F97316]" : "text-gray-400 group-hover:text-[#F97316]"}`} strokeWidth={2} />
                      <span className="text-[12px] font-bold leading-tight">ALL WHOLESALE PRODUCTS</span>
                    </div>
                    <span className={`min-w-[60px] text-center text-[10px] font-extrabold px-2.5 py-1 rounded-md shrink-0 whitespace-nowrap transition-colors ${
                      selectedCategory === "all" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[#F97316]/10 group-hover:text-[#F97316]"
                    }`}>
                      {PRODUCTS.length} ITEMS
                    </span>
                  </button>

                  <div className="my-2 border-t border-gray-100" />

                  {/* Individual Interactive Categories */}
                  {CATEGORIES.map((cat, idx) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        style={{ animationDelay: `${idx * 40}ms` }}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-3.5 py-3.5 rounded-lg text-xs font-bold uppercase transition-all duration-200 flex items-center justify-between cursor-pointer gap-3 group border-l-4 animate-feature-box ${
                          isSelected
                            ? "bg-[#06182F] text-white shadow-sm border-l-[#F97316]"
                            : "text-gray-700 hover:bg-[#F97316]/[0.04] hover:text-[#F97316] border-l-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          {getCategoryIcon(cat.id, isSelected)}
                          <span className="text-[12px] font-bold leading-tight">{cat.name}</span>
                        </div>
                        <span className={`min-w-[60px] text-center text-[9.5px] font-extrabold px-2.5 py-1 rounded-md shrink-0 whitespace-nowrap transition-colors ${
                          isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[#F97316]/10 group-hover:text-[#F97316]"
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Bulk Support Card in Sidebar with Pulsing Glow */}
                <div className="mt-7 p-4 sm:p-5 bg-[#06182F] text-white rounded-xl border border-[#F97316]/40 relative overflow-hidden shadow-[0_0_15px_rgba(249,115,22,0.25)] animate-[pulse_3s_ease-in-out_infinite]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#F97316]/15 rounded-full blur-xl pointer-events-none" />
                  <span className="text-[9.5px] uppercase font-black tracking-wider text-[#F97316] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> NEED BULK TRUCKLOAD?
                  </span>
                  <h4 className="text-xs font-extrabold uppercase mt-1 text-white">Direct Factory Pricing</h4>
                  <p className="text-[10.5px] text-[#B8C4D9] mt-1.5 leading-relaxed font-normal">
                    Contact our B2B sales team for custom volume quotes and nationwide freight dispatch.
                  </p>
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full mt-3.5 h-9 bg-[#F97316] hover:bg-[#ea580c] hover:scale-[1.03] active:scale-95 text-white text-[11px] font-extrabold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>REQUEST BULK QUOTE</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Right Product Grid Area */}
            <div className="flex-1 min-w-0">

              {/* Controls Bar (Search + Sort Dropdown + Live Filter Count) */}
              <div className="bg-white border border-gray-200/90 rounded-xl p-3.5 mb-5 shadow-xs flex flex-wrap items-center justify-between gap-3">

                {/* Search Bar with Icon & Focus Ring */}
                <div className="relative flex items-center flex-1 max-w-md">
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by product name, grade or spec..."
                    className="w-full h-9 pl-9 pr-8 bg-[#F5F6F8] border border-gray-300 rounded-lg text-xs text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/15 focus:bg-white transition-all font-medium"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 text-xs font-bold text-gray-400 hover:text-[#F97316] cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Dynamic Filter Count & Sort Controls */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] text-gray-500 font-extrabold uppercase tracking-wider hidden sm:inline-block">
                    SHOWING {filteredProducts.length} {filteredProducts.length === 1 ? "PRODUCT" : "PRODUCTS"}
                  </span>

                  {/* Sort Selector */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="h-9 bg-white border border-gray-300 rounded-lg px-2.5 text-xs text-gray-800 font-bold uppercase focus:outline-none focus:border-[#F97316] cursor-pointer transition-colors"
                  >
                    <option value="popular">SORT BY: RECOMMENDED</option>
                    <option value="name">SORT BY: NAME (A-Z)</option>
                    <option value="badge">SORT BY: TOP BADGES</option>
                  </select>
                </div>
              </div>

              {/* Product Cards Grid */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-10 text-center shadow-xs">
                  <h3 className="text-sm font-extrabold uppercase text-gray-800">NO PRODUCTS MATCH YOUR SEARCH</h3>
                  <p className="text-xs text-gray-500 mt-1">Try clearing your search query or selecting a different category filter.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchQuery("");
                    }}
                    className="mt-4 px-4 py-2 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-black uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border border-gray-200/90 rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 h-full"
                    >
                      <div>
                        {/* Studio Compact Product Image Container (215–225px) */}
                        <div
                          className="relative w-full h-[195px] sm:h-[210px] lg:h-[225px] overflow-hidden p-3 flex items-center justify-center border-b border-white/10"
                          style={{
                            background: "linear-gradient(135deg, #06182F 0%, #0D284B 60%, #06182F 100%)"
                          }}
                        >
                          {/* Subtle Ambient Orange Glow */}
                          <div className="absolute inset-0 bg-[#F97316]/10 rounded-full blur-2xl pointer-events-none scale-75" />

                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain p-2.5 group-hover:scale-105 transition-transform duration-500 relative z-10"
                          />

                          {/* Top-Left Status Badge */}
                          {product.badge && (
                            <span className="absolute top-2.5 left-2.5 bg-[#F97316] text-white text-[8.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[5px] shadow-xs z-20">
                              {product.badge}
                            </span>
                          )}

                          {/* Bottom-Right MOQ Badge with Box Icon */}
                          <span className="absolute bottom-2.5 right-2.5 bg-[#06182F]/90 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-[5px] backdrop-blur-xs shadow-xs z-20 border border-white/20 flex items-center gap-1">
                            <Package className="w-3 h-3 text-[#F97316]" />
                            <span>MOQ: {product.moq}</span>
                          </span>
                        </div>

                        {/* Card Details Body */}
                        <div className="p-3.5 sm:p-4 space-y-1">
                          <span className="text-[9.5px] font-black text-[#F97316] uppercase tracking-wider block">
                            {product.categoryName}
                          </span>
                          <h3 className="text-xs sm:text-[13px] font-extrabold text-[#06182F] uppercase tracking-tight line-clamp-2 leading-snug group-hover:text-[#F97316] transition-colors min-h-[2.2rem]">
                            <Link href={`/products/${product.id}`}>{product.name}</Link>
                          </h3>

                          {/* Small Orange Underline Accent */}
                          <div className="w-7 h-0.5 bg-[#F97316] rounded-full my-1 opacity-90" />

                          <p className="text-[11px] text-gray-600 line-clamp-2 leading-relaxed min-h-[2.1rem] font-normal">
                            {product.description}
                          </p>

                          {/* Tightened Spec Tag Pills */}
                          <div className="mt-2.5 pt-2 border-t border-black/[0.06] flex flex-wrap gap-1">
                            {Object.entries(product.specs).slice(0, 2).map(([k, v], i) => (
                              <span key={i} className="text-[9.5px] bg-[#f8f9fa] text-gray-700 font-bold px-2 py-0.5 rounded border border-[#e9ecef] truncate max-w-full">
                                {k}: {v}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Action Pair */}
                      <div className="p-3.5 sm:p-4 pt-2 sm:pt-2 border-t border-black/[0.06] flex items-center gap-2 w-full">
                        <Link
                          href={`/products/${product.id}`}
                          className="flex-1 h-8.5 border-[1.5px] border-[#06182F] bg-transparent hover:bg-[#f3f4f6] text-[#06182F] text-[10.5px] font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer shrink group/btn px-2.5"
                        >
                          <span>DETAILS</span>
                          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Link>
                        <button
                          onClick={() => setIsQuoteModalOpen(true)}
                          className="h-8.5 bg-[#F97316] hover:bg-[#ea580c] hover:scale-102 active:scale-95 text-white text-[10.5px] font-extrabold uppercase tracking-wider px-3 rounded-lg transition-all shadow-xs shrink-0 cursor-pointer whitespace-nowrap flex items-center justify-center gap-1"
                        >
                          <FileText className="w-3 h-3" />
                          <span>GET QUOTE</span>
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWidgets onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <OrderTrackingModal isOpen={isTrackModalOpen} onClose={() => setIsTrackModalOpen(false)} />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F6F8]" />}>
      <ProductsPageContent />
    </Suspense>
  );
}
