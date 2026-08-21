"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X, ChevronDown, Phone, Mail, MapPin, ArrowRight, FileText } from "lucide-react";
import { NAV_ITEMS, CATEGORIES, CONTACT_INFO } from "@/data/navigation";
import { Logo } from "@/components/common/Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal,
}) => {
  const [expandedNav, setExpandedNav] = useState<string | null>("WHOLESALE PRODUCTS");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock underlying page scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const content = (
    <div className="fixed inset-0 z-[9999] lg:hidden flex">
      {/* Full Viewport Dark Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity z-[9998]"
        onClick={onClose}
      />

      {/* Full Viewport-Height Drawer (fixed top-0 bottom-0 left-0) */}
      <div className="fixed top-0 bottom-0 left-0 w-full max-w-xs sm:max-w-sm bg-[#06182F] text-white shadow-2xl flex flex-col z-[9999] overflow-y-auto border-r border-gray-800 animate-in slide-in-from-left duration-200">
        
        {/* Drawer Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#0B2545] shrink-0">
          <Logo light />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-gray-200" />
          </button>
        </div>

        {/* CTA Banner inside drawer */}
        <div className="p-4 bg-[#F97316]/10 border-b border-gray-800 shrink-0">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenQuoteModal();
            }}
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-widest py-2.5 px-4 rounded-md shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>GET A QUOTE →</span>
          </button>
        </div>

        {/* Navigation Items (Scrollable internally) */}
        <div className="p-4 space-y-1 flex-1 overflow-y-auto">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-1 mb-1">
            Menu Navigation
          </div>

          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedNav(expandedNav === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-gray-200 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        expandedNav === item.label ? "rotate-180 text-[#F97316]" : ""
                      }`}
                    />
                  </button>

                  {/* Submenu */}
                  {expandedNav === item.label && item.dropdownItems && (
                    <div className="ml-3 pl-3 border-l border-gray-700 space-y-1 my-1">
                      {item.dropdownItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={onClose}
                          className="block px-3 py-2 text-xs text-gray-300 hover:text-[#F97316] hover:bg-white/5 rounded-md font-medium transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`block px-3 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                    item.active
                      ? "bg-[#F97316] text-white"
                      : "text-gray-200 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Product Categories Section */}
          <div className="pt-4 mt-4 border-t border-gray-800">
            <div className="text-[10px] font-bold text-[#F97316] uppercase tracking-widest px-3 py-1 mb-1">
              Top Categories
            </div>
            <div className="space-y-0.5">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${cat.id}`}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  <span>{cat.name}</span>
                  <ArrowRight className="w-3 h-3 text-gray-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Footer inside Drawer */}
        <div className="p-4 bg-[#081C38] border-t border-gray-800 space-y-2 text-xs text-gray-300 shrink-0">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="flex items-center gap-2 hover:text-[#F97316] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#F97316]" />
            <span>{CONTACT_INFO.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 hover:text-[#F97316] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#F97316]" />
            <span>{CONTACT_INFO.email}</span>
          </a>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
            <span>{CONTACT_INFO.location}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};
