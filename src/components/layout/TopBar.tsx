import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/data/navigation";

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#06182F] text-white text-xs border-b border-white/10 py-2.5 transition-colors">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
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

        {/* Right Side: Location */}
        <div className="flex items-center gap-2 text-gray-300 font-medium text-xs">
          <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
          <span>{CONTACT_INFO.location}</span>
        </div>
      </div>
    </div>
  );
};
