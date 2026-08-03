"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, FileText, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "@/data/navigation";

interface FloatingWidgetsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenQuoteModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello RJ Traders, I am interested in wholesale pricing and packaging quotes.")}`;

  return (
    <>
      {/* Fixed Action Stack at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 bg-[#0A1A2F] text-white hover:bg-[#F97316] rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer border border-white/20 active:scale-95"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Chat Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-xl transition-all cursor-pointer active:scale-95"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="text-xs font-black uppercase tracking-wider hidden sm:inline group-hover:inline">
            WHATSAPP CHAT
          </span>
        </a>
      </div>

      {/* Sticky Bottom Bar on Mobile Screens */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#0A1A2F]/95 backdrop-blur-md border-t border-white/10 p-3 sm:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-gray-400">RJ TRADERS B2B</span>
          <span className="text-xs font-black text-white">Wholesale & Packaging</span>
        </div>
        <button
          onClick={onOpenQuoteModal}
          className="h-10 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-black uppercase tracking-wider px-5 rounded flex items-center gap-1.5 shadow-md active:scale-95"
        >
          <FileText className="w-4 h-4" />
          <span>REQUEST QUOTE</span>
        </button>
      </div>
    </>
  );
};
