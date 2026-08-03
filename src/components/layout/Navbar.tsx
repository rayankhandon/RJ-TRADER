"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full bg-[#0B2545] text-white hidden lg:block border-t border-b border-white/10 shadow-md">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-12">
          {/* Main Navigation Links */}
          <div className="flex items-center gap-2 xl:gap-4 h-full">
            {NAV_ITEMS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#F97316] ${
                        item.active ? "text-[#F97316]" : "text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-gray-300 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180 text-[#F97316]" : ""
                        }`}
                      />
                    </Link>

                    {/* Mega Dropdown Menu */}
                    {activeDropdown === item.label && item.dropdownItems && (
                      <div className="absolute left-0 top-full w-72 bg-[#06182F] border border-gray-700/80 rounded-b-lg shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="px-4 py-1 mb-2 border-b border-gray-700/50 text-[10px] font-bold text-[#F97316] uppercase tracking-wider">
                          Product Categories
                        </div>
                        {item.dropdownItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2 hover:bg-white/10 transition-colors group"
                          >
                            <div className="text-xs font-bold text-white group-hover:text-[#F97316] flex items-center justify-between">
                              <span>{sub.label}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F97316]" />
                            </div>
                            {sub.description && (
                              <p className="text-[11px] text-gray-400 font-normal line-clamp-1 mt-0.5">
                                {sub.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#F97316] flex items-center h-full ${
                    item.active
                      ? "text-[#F97316] font-extrabold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#F97316]"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Far Right CTA Button */}
          <div>
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#F97316] hover:bg-[#EA580C] hover:scale-[1.02] text-white text-xs font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
