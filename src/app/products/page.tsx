"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { OrderTrackingModal } from "@/components/ui/OrderTrackingModal";
import { FloatingWidgets } from "@/components/common/FloatingWidgets";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/navigation";
import { Filter, ArrowRight, Tag, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6F8]">
      <TopBar />
      <Header
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenTrackingModal={() => setIsTrackModalOpen(true)}
      />
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Breadcrumb Header */}
      <div className="bg-[#07172B] text-white py-10 border-b border-white/10">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-[#F97316]">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F97316]">WHOLESALE PRODUCTS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
            B2B WHOLESALE PRODUCT CATALOG
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mt-2 font-normal">
            Explore genuine engine oils, 208L industrial steel drums, hydraulic fluids, gear lubricants, and automotive fluids at direct wholesale bulk pricing.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full py-8 lg:py-12">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Sidebar Filter */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm sticky top-24">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                  <div className="flex items-center gap-2 font-black uppercase text-sm text-[#0A1A2F]">
                    <Filter className="w-4 h-4 text-[#F97316]" />
                    <span>CATEGORIES</span>
                  </div>
                  {selectedCategory !== "all" && (
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="text-[11px] font-bold text-[#F97316] hover:underline uppercase"
                    >
                      RESET
                    </button>
                  )}
                </div>

                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center justify-between ${
                      selectedCategory === "all"
                        ? "bg-[#0A1A2F] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>ALL WHOLESALE PRODUCTS</span>
                    <span className="text-[10px] opacity-75">({PRODUCTS.length})</span>
                  </button>

                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? "bg-[#0A1A2F] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] opacity-75">{cat.count}</span>
                    </button>
                  ))}
                </div>

                {/* Bulk Support Card in Sidebar */}
                <div className="mt-8 p-4 bg-[#07172B] text-white rounded-lg border border-white/10">
                  <span className="text-[10px] uppercase font-black text-[#F97316]">NEED BULK TRUCKLOAD?</span>
                  <h4 className="text-xs font-extrabold uppercase mt-1">Direct Factory Pricing</h4>
                  <p className="text-[11px] text-gray-300 mt-1 leading-snug">
                    Contact our B2B sales team for custom volume quotes and nationwide freight dispatch.
                  </p>
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full mt-3 h-9 bg-[#F97316] hover:bg-[#ea580c] text-white text-[11px] font-black uppercase tracking-wider rounded flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>REQUEST BULK QUOTE</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Right Product Grid */}
            <div className="flex-1">
              {/* Controls Bar */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search product name or spec..."
                    className="h-10 border border-gray-300 rounded-md px-3 text-xs w-64 focus:outline-none focus:border-[#F97316]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-xs text-gray-500 hover:text-gray-800"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 font-semibold uppercase">
                    SHOWING {filteredProducts.length} PRODUCTS
                  </span>
                </div>
              </div>

              {/* Grid */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
                  <h3 className="text-base font-extrabold uppercase text-gray-800">NO PRODUCTS FOUND</h3>
                  <p className="text-xs text-gray-500 mt-1">Try resetting your search or category filter.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchQuery("");
                    }}
                    className="mt-4 px-4 py-2 bg-[#F97316] text-white text-xs font-bold uppercase rounded"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div>
                        {/* Product Image */}
                        <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {product.badge && (
                            <span className="absolute top-3 left-3 bg-[#F97316] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                              {product.badge}
                            </span>
                          )}
                          <span className="absolute bottom-3 right-3 bg-[#0A1A2F]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                            MOQ: {product.moq}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="p-5">
                          <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-wider">
                            {product.categoryName}
                          </span>
                          <h3 className="text-sm font-black text-[#0A1A2F] uppercase tracking-tight mt-1 line-clamp-2 leading-tight group-hover:text-[#F97316] transition-colors">
                            <Link href={`/products/${product.id}`}>{product.name}</Link>
                          </h3>
                          <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>

                          {/* Quick Spec Badge */}
                          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                            {Object.entries(product.specs).slice(0, 2).map(([k, v], i) => (
                              <span key={i} className="text-[10px] bg-gray-100 text-gray-700 font-semibold px-2 py-0.5 rounded">
                                {k}: {v}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Action */}
                      <div className="p-5 pt-0 flex items-center justify-between gap-2">
                        <Link
                          href={`/products/${product.id}`}
                          className="flex-1 h-10 border border-[#0A1A2F] hover:bg-[#0A1A2F] text-[#0A1A2F] hover:text-white text-xs font-extrabold uppercase rounded transition-all flex items-center justify-center gap-1"
                        >
                          <span>DETAILS</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => setIsQuoteModalOpen(true)}
                          className="h-10 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-black uppercase px-4 rounded transition-all shadow-xs shrink-0 cursor-pointer"
                        >
                          QUOTE
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
