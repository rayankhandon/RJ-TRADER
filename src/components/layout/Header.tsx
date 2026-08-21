"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Search,
  ChevronDown,
  Truck,
  FileText,
  Menu,
  X,
  Layers,
} from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { CATEGORIES } from "@/data/navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";

interface HeaderProps {
  onOpenQuoteModal: () => void;
  onOpenTrackingModal?: () => void;
  onToggleMobileNav?: () => void;
  isMobileNavOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuoteModal,
  onOpenTrackingModal,
  onToggleMobileNav,
  isMobileNavOpen,
}) => {
  const pathname = usePathname();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInternalMobileNavOpen, setIsInternalMobileNavOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Close mobile navigation on route change
  useEffect(() => {
    setIsInternalMobileNavOpen(false);
  }, [pathname]);

  // Use parent prop ONLY if onToggleMobileNav handler is explicitly provided; otherwise use internal state
  const isMenuOpen = (onToggleMobileNav && isMobileNavOpen !== undefined) 
    ? isMobileNavOpen 
    : isInternalMobileNavOpen;

  const handleToggleMobileNav = () => {
    setIsInternalMobileNavOpen((prev) => !prev);
    if (onToggleMobileNav) {
      onToggleMobileNav();
    }
  };

  const handleCloseMobileNav = () => {
    setIsInternalMobileNavOpen(false);
    if (isMobileNavOpen && onToggleMobileNav) {
      onToggleMobileNav();
    }
  };

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
      <div className="w-full max-w-[1700px] mx-auto px-0 sm:px-6 lg:px-8 py-0 lg:py-1 min-h-[58px] lg:h-[85px] flex flex-col justify-center">
        
        {/* ROW 2: Main Mobile/Tablet Header Bar (< lg) */}
        <div className="flex lg:hidden items-center justify-between relative px-3.5 h-[52px] w-full bg-white border-b border-gray-100">
          {/* LEFT: Hamburger Menu Icon */}
          <button
            type="button"
            onClick={handleToggleMobileNav}
            className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#F97316] rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Toggle Navigation"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-[#F97316]" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* CENTER: Visually Centered RJ Traders Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Logo />
          </div>

          {/* RIGHT: Compact Action Icons (Track Order & Request Quote) */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={onOpenTrackingModal}
              title="Track Your Order"
              className="w-8.5 h-8.5 rounded-full bg-[#F5F6F8] hover:bg-[#F97316]/10 border border-gray-200 flex items-center justify-center text-[#06182F] hover:text-[#F97316] transition-colors cursor-pointer shrink-0"
            >
              <Truck className="w-4 h-4 text-[#06182F]" />
            </button>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              title="Request Quote"
              className="w-8.5 h-8.5 rounded-full bg-[#F97316]/10 hover:bg-[#F97316] border border-[#F97316]/30 flex items-center justify-center text-[#F97316] hover:text-white transition-all cursor-pointer shrink-0 shadow-xs"
            >
              <FileText className="w-4 h-4 text-[#F97316]" />
            </button>
          </div>
        </div>

        {/* DESKTOP HEADER ROW (>= lg) - 100% UNTOUCHED */}
        <div className="hidden lg:flex items-center justify-between gap-3 lg:gap-6 w-full">
          
          {/* Logo & Category Selector (Left) */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-8 shrink-0">
            {/* RJ Traders Brand Logo */}
            <Logo className="-ml-1 sm:-ml-2 lg:-ml-3" />

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
          <div className="flex-1 max-w-2xl hidden lg:block mx-2">
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
          <div className="flex items-center gap-2.5 sm:gap-6 lg:gap-8 shrink-0">
            {/* Action 1: Track Order */}
            <div 
              onClick={onOpenTrackingModal}
              className="flex items-center gap-2 text-left group cursor-pointer"
            >
              <div className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full bg-[#F5F6F8] group-hover:bg-[#F97316]/10 flex items-center justify-center text-[#06182F] group-hover:text-[#F97316] transition-colors border border-gray-200 shrink-0">
                <Truck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#06182F] group-hover:text-[#F97316] transition-colors" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold leading-none">
                  Track Order
                </span>
                <span className="text-xs sm:text-[13px] font-extrabold text-[#06182F] leading-tight mt-0.5 group-hover:text-[#F97316] transition-colors">
                  Track Your Order
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-7 sm:h-8 bg-gray-200" />

            {/* Action 2: Request Quote */}
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-2 text-left group cursor-pointer focus:outline-hidden"
            >
              <div className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full bg-[#F97316]/10 hover:bg-[#F97316] flex items-center justify-center text-[#F97316] group-hover:text-white transition-all duration-200 border border-[#F97316]/30 shrink-0 shadow-xs">
                <FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#F97316] group-hover:text-white transition-colors" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold leading-none">
                  Request Quote
                </span>
                <span className="text-xs sm:text-[13px] font-extrabold text-[#06182F] leading-tight mt-0.5 group-hover:text-[#F97316] transition-colors">
                  Get a Price Quote
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* ROW 3: Mobile Search Bar (< lg) */}
        <div className="lg:hidden w-full px-3.5 pt-2 pb-1.5">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full max-w-full">
            <div className="relative w-full flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, categories or brands..."
                className="w-full pl-3.5 pr-20 py-2 bg-[#F5F6F8] border border-gray-300 rounded-lg text-xs text-gray-900 placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-[#F97316] focus:bg-white transition-all"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#F97316] hover:bg-[#EA580C] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                SEARCH
              </button>
            </div>
          </form>
        </div>

        {/* ROW 4: Mobile Side-by-Side Action Buttons (< lg) */}
        <div className="lg:hidden w-full px-3.5 pb-2.5 pt-0.5">
          <div className="grid grid-cols-2 gap-2 w-full">
            {/* Left Button: Track Your Order */}
            <button
              type="button"
              onClick={onOpenTrackingModal}
              className="flex items-center justify-center gap-1.5 h-9 bg-[#F8FAFC] hover:bg-gray-100 border border-gray-200/90 rounded-lg px-2 text-[#06182F] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-tight transition-colors shadow-2xs cursor-pointer truncate"
            >
              <Truck className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
              <span className="truncate">Track Your Order</span>
            </button>

            {/* Right Button: Get a Price Quote */}
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="flex items-center justify-center gap-1.5 h-9 bg-[#F8FAFC] hover:bg-[#FFF8F5] border border-gray-200/90 hover:border-[#F97316]/40 rounded-lg px-2 text-[#06182F] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-tight transition-colors shadow-2xs cursor-pointer truncate"
            >
              <FileText className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
              <span className="truncate">Get a Price Quote</span>
            </button>
          </div>
        </div>

      </div>

      {/* Shared Mobile Navigation Drawer Overlay */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={handleCloseMobileNav}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    </header>
  );
};

