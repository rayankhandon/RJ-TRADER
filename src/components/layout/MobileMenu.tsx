"use client";

import React, { useState } from "react";
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-xs bg-[#06182F] text-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto border-r border-gray-800">
        {/* Drawer Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#0B2545]">
          <Logo light />
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-white/10 text-gray-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CTA Banner inside drawer */}
        <div className="p-4 bg-[#F97316]/10 border-b border-gray-800">
          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal();
            }}
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs uppercase tracking-widest py-2.5 px-4 rounded-md shadow-md flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>REQUEST A QUOTE</span>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="p-4 space-y-1 flex-1">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-1 mb-1">
            Menu Navigation
          </div>

          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() =>
                      setExpandedNav(expandedNav === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-gray-200 hover:bg-white/10"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform ${
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
                          className="block px-3 py-2 text-xs text-gray-300 hover:text-[#F97316] hover:bg-white/5 rounded-md font-medium"
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
                  className="flex items-center justify-between px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                >
                  <span>{cat.name}</span>
                  <ArrowRight className="w-3 h-3 text-gray-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Footer inside Drawer */}
        <div className="p-4 bg-[#081C38] border-t border-gray-800 space-y-2 text-xs text-gray-300">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="flex items-center gap-2 hover:text-[#F97316]"
          >
            <Phone className="w-3.5 h-3.5 text-[#F97316]" />
            <span>{CONTACT_INFO.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 hover:text-[#F97316]"
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
};
