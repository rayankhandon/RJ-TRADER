import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/data/navigation";

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#06182F] text-white border-b border-white/10 py-1 sm:py-2.5 transition-colors">
      <div className="w-full max-w-[1700px] mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* ROW 1: Compact Mobile Location Bar (< md) */}
        <div className="flex md:hidden items-center justify-center h-[26px] w-full text-[10.5px] font-medium text-gray-200">
          <div className="flex items-center justify-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#F97316] shrink-0" />
            <span>{CONTACT_INFO.location}</span>
          </div>
        </div>

        {/* Desktop View Layout (>= md) - 100% UNTOUCHED */}
        <div className="hidden md:flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Left Side: Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-gray-200 hover:text-[#F97316] transition-colors font-medium text-xs"
              title="Call RJ Traders"
            >
              <Phone className="w-3.5 h-3.5 text-[#F97316]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 text-gray-200 hover:text-[#F97316] transition-colors font-medium text-xs"
              title="Email RJ Traders"
            >
              <Mail className="w-3.5 h-3.5 text-[#F97316]" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>

          {/* Center: Announcement Bar */}
          <div className="hidden md:flex items-center text-xs font-semibold text-gray-200 tracking-wide">
            <span>Genuine Engine Oil • Truck Spare Parts • Reliable Service</span>
          </div>

          {/* Right Side: Location */}
          <div className="flex items-center gap-2 text-gray-300 font-medium text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
            <span>{CONTACT_INFO.location}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
