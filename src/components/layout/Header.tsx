"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  Truck,
  FileText,
  ShoppingCart,
  Menu,
  X,
  Layers,
} from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { CATEGORIES } from "@/data/navigation";

interface HeaderProps {
  onOpenQuoteModal: () => void;
  onOpenTrackingModal?: () => void;
  onToggleMobileNav?: () => void;
  isMobileNavOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuoteModal,
  onOpenTrackingModal,
  onToggleMobileNav = () => {},
  isMobileNavOpen = false,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close category dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className={`w-full bg-white border-b border-gray-200 sticky top-0 z-40 transition-all duration-300 animate-load-nav ${
      isScrolled ? "shadow-md bg-white/95 backdrop-blur-md border-gray-300" : "shadow-xs"
    }`}>
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-1 lg:py-1.5">
        <div className="flex items-center justify-between gap-3 lg:gap-6">
          
          {/* Logo & Category Selector (Left) */}
          <div className="flex items-center gap-4 lg:gap-8 shrink-0">
            {/* Mobile Hamburger Trigger */}
            <button
              onClick={onToggleMobileNav}
              className="lg:hidden p-1.5 text-gray-700 hover:text-[#F97316] rounded-md focus:outline-hidden"
              aria-label="Toggle Navigation"
            >
              {isMobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* RJ Traders Brand Logo */}
            <Logo />

            {/* Category Selector Dropdown (Desktop) */}
            <div className="relative hidden xl:block" ref={categoryRef}>
              <button
                type="button"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-2 bg-[#F5F6F8] hover:bg-gray-200/80 text-gray-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 sm:py-2 rounded-md border border-gray-300 transition-colors cursor-pointer shrink-0"
              >
                <Layers className="w-4 h-4 text-[#F97316]" />
                <span>EXPLORE CATEGORIES</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isCategoryOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-64 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50 animate-in fade-in duration-150">
                  <div className="px-4 py-1.5 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Select Category
                  </div>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setIsCategoryOpen(false);
                        window.location.href = `/products?category=${cat.id}`;
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#F5F6F8] hover:text-[#F97316] flex items-center justify-between transition-colors font-medium"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-gray-400 font-normal">{cat.count}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Expanded Search Bar (Center Priority) */}
          <div className="flex-1 max-w-2xl hidden md:block mx-2">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, categories or brands..."
                  className="w-full pl-4 pr-10 py-1.5 sm:py-2 bg-[#F5F6F8] border border-gray-300 rounded-l-md text-xs sm:text-sm text-gray-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-[#F97316] focus:bg-white transition-all"
                />
                <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <button
                type="submit"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-1.5 sm:py-2 rounded-r-md transition-colors shadow-xs hover:shadow-md cursor-pointer shrink-0"
              >
                SEARCH
              </button>
            </form>
          </div>

          {/* Action Items (Right) */}
          <div className="flex items-center gap-3 lg:gap-5 shrink-0">
            {/* Action 1: Track Order */}
            <div 
              onClick={onOpenTrackingModal}
              className="hidden lg:flex items-center gap-2 text-left group cursor-pointer"
            >
              <div className="w-8.5 h-8.5 rounded-full bg-[#F5F6F8] group-hover:bg-[#F97316]/10 flex items-center justify-center text-[#06182F] group-hover:text-[#F97316] transition-colors border border-gray-200 shrink-0">
                <Truck className="w-4 h-4 text-[#06182F] group-hover:text-[#F97316]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold leading-none">
                  Track Order
                </span>
                <span className="text-[11px] font-extrabold text-[#06182F] leading-tight mt-0.5 group-hover:text-[#F97316] transition-colors">
                  Track Your Shipment
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-7 bg-gray-200" />

            {/* Action 2: Request Quote */}
            <button
              onClick={onOpenQuoteModal}
              className="hidden lg:flex items-center gap-2 text-left group cursor-pointer focus:outline-hidden"
            >
              <div className="w-8.5 h-8.5 rounded-full bg-[#F5F6F8] group-hover:bg-[#F97316]/10 flex items-center justify-center text-[#06182F] group-hover:text-[#F97316] transition-colors border border-gray-200 shrink-0">
                <FileText className="w-4 h-4 text-[#06182F] group-hover:text-[#F97316]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold leading-none">
                  Request Quote
                </span>
                <span className="text-[11px] font-extrabold text-[#06182F] leading-tight mt-0.5 group-hover:text-[#F97316] transition-colors">
                  Get Wholesale Pricing
                </span>
              </div>
            </button>

            {/* Divider */}
            <div className="hidden lg:block w-px h-7 bg-gray-200" />

            {/* Action 3: Cart */}
            <div className="flex items-center gap-2 text-left group cursor-pointer">
              <div className="relative w-8.5 h-8.5 rounded-full bg-[#F5F6F8] group-hover:bg-[#F97316]/10 flex items-center justify-center text-[#06182F] group-hover:text-[#F97316] transition-colors border border-gray-200 shrink-0">
                <ShoppingCart className="w-4 h-4 text-[#06182F] group-hover:text-[#F97316]" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#F97316] text-white text-[9px] font-bold flex items-center justify-center">
                  0
                </span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold leading-none">
                  My Cart
                </span>
                <span className="text-[11px] font-extrabold text-[#06182F] leading-tight mt-0.5 group-hover:text-[#F97316] transition-colors">
                  View Your Cart
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-2.5 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, categories or brands..."
              className="w-full pl-3 pr-20 py-2 bg-[#F5F6F8] border border-gray-300 rounded-md text-xs text-gray-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-[#F97316]"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#F97316] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md"
            >
              SEARCH
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
