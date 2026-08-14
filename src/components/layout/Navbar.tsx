"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const checkIsActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") {
      return pathname === "/";
    }
    const cleanHref = href.split("?")[0];
    return pathname === cleanHref || (cleanHref !== "/" && pathname.startsWith(cleanHref));
  };

  return (
    <nav className="w-full bg-[#0B2545] text-white hidden lg:block border-t border-b border-white/10 shadow-md relative z-40">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Main Navigation Links */}
          <div className="flex items-center gap-[28px] xl:gap-[48px] h-full">
            {NAV_ITEMS.map((item) => {
              const isActive = checkIsActive(item.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative h-full flex items-center group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 py-2 text-xs font-bold uppercase tracking-[0.3px] transition-colors duration-300 hover:text-[#ff7a1a] ${
                        isActive ? "text-[#ff7a1a]" : "text-gray-100"
                      }`}
                    >
                      {/* Text Label with Centered 2px Rounded Orange Underline */}
                      <span className="relative py-1">
                        {item.label}
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] bg-[#ff7a1a] rounded-full transition-all duration-300 ease-out ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </span>

                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-250 ease-out ${
                          activeDropdown === item.label
                            ? "rotate-180 text-[#ff7a1a]"
                            : "text-gray-300 group-hover:text-[#ff7a1a]"
                        }`}
                      />
                    </Link>

                    {/* Styled Dropdown Menu */}
                    {activeDropdown === item.label && item.dropdownItems && (
                      <div className="absolute left-0 top-full mt-0 w-72 bg-[#06182F] border border-white/15 rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.4)] py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-250 overflow-hidden">
                        <div className="px-4 py-1.5 mb-1 border-b border-white/10 text-[10px] font-extrabold text-[#ff7a1a] uppercase tracking-widest">
                          Product Categories
                        </div>
                        {item.dropdownItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2 hover:bg-[#ff7a1a]/10 hover:border-l-2 hover:border-[#ff7a1a] transition-all duration-200 group/sub"
                          >
                            <div className="text-xs font-bold text-gray-100 group-hover/sub:text-[#ff7a1a] flex items-center justify-between transition-colors">
                              <span>{sub.label}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 transition-all text-[#ff7a1a] transform group-hover/sub:translate-x-0.5" />
                            </div>
                            {sub.description && (
                              <p className="text-[11px] text-gray-400 font-normal line-clamp-1 mt-0.5 group-hover/sub:text-gray-300">
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
                <div key={item.label} className="relative h-full flex items-center group">
                  <Link
                    href={item.href}
                    className={`flex items-center py-2 text-xs font-bold uppercase tracking-[0.3px] transition-colors duration-300 hover:text-[#ff7a1a] h-full ${
                      isActive ? "text-[#ff7a1a]" : "text-gray-100"
                    }`}
                  >
                    {/* Text Label with Centered 2px Rounded Orange Underline */}
                    <span className="relative py-1">
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-[#ff7a1a] rounded-full transition-all duration-300 ease-out ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Far Right CTA Button */}
          <div className="shrink-0 ml-auto">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#F97316] hover:bg-[#EA580C] hover:scale-[1.05] text-white text-xs font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-md shadow-md hover:shadow-[0_8px_20px_rgba(249,115,22,0.4)] transition-all duration-300 ease-out flex items-center gap-2 cursor-pointer active:scale-95 border border-white/20 group"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Border Gradient Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-[#ff7a1a]/40 via-[#ff7a1a]/20 to-transparent" />
    </nav>
  );
};
