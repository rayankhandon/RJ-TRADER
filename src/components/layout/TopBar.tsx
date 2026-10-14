import React from "react";
import { Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/data/navigation";

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#06182F] text-white border-b border-white/10 py-1 sm:py-2.5 transition-colors">
      <div className="w-full max-w-[1700px] mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Mobile Contact Bar (< md): Phone & Email */}
        <div className="flex md:hidden items-center justify-between sm:justify-center sm:gap-6 h-[26px] w-full text-[10.5px] sm:text-xs font-medium text-gray-200">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 text-gray-200 hover:text-[#F97316] transition-colors truncate"
            title="Call RJ Traders"
          >
            <Phone className="w-3 h-3 text-[#F97316] shrink-0" />
            <span>{CONTACT_INFO.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-1.5 text-gray-200 hover:text-[#F97316] transition-colors truncate"
            title="Email RJ Traders"
          >
            <Mail className="w-3 h-3 text-[#F97316] shrink-0" />
            <span>{CONTACT_INFO.email}</span>
          </a>
        </div>

        {/* Desktop View Layout (>= md) */}
        <div className="hidden md:flex items-center justify-between gap-4 text-xs">
          {/* Left Side: Phone */}
          <div className="flex-1 flex items-center justify-start">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-gray-200 hover:text-[#F97316] transition-colors font-medium text-xs whitespace-nowrap"
              title="Call RJ Traders"
            >
              <Phone className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Center: Announcement Bar */}
          <div className="flex items-center justify-center text-xs font-semibold text-gray-200 tracking-wide whitespace-nowrap px-2">
            <span>Genuine Engine Oil • Truck Spare Parts • Reliable Service</span>
          </div>

          {/* Right Side: Email */}
          <div className="flex-1 flex items-center justify-end">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 text-gray-200 hover:text-[#F97316] transition-colors font-medium text-xs whitespace-nowrap"
              title="Email RJ Traders"
            >
              <Mail className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
