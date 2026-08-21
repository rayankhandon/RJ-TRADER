import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#06182F] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Newsletter / CTA Strip Above Main Footer */}
        <AnimatedSection>
          <div className="bg-[#0B2545] border border-white/15 rounded-2xl p-7 sm:p-9 lg:p-10 mb-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Text Block */}
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <h3 className="text-base sm:text-lg lg:text-xl font-black uppercase tracking-tight text-[#F97316] flex items-center justify-center lg:justify-start gap-2.5 font-sans">
                <div className="w-8 h-8 rounded-lg bg-[#F97316]/20 border border-[#F97316]/40 flex items-center justify-center text-[#F97316] shrink-0 animate-pulse">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <span>GET WHOLESALE DEALS &amp; CATALOG UPDATES</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#B8C4D9] font-normal leading-relaxed">
                Subscribe to receive bulk pricing alerts, new engine oil arrivals, and spare parts stock updates directly in your inbox.
              </p>
            </div>

            {/* Right Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto shrink-0"
            >
              <div className="relative w-full sm:w-80 lg:w-96">
                <Mail className="w-4 h-4 text-white/50 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your business email..."
                  className="w-full bg-[#1A2942] border-[1.5px] border-white/25 rounded-xl pl-11 pr-4 py-[14px] text-xs sm:text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#F97316] hover:bg-[#EA580C] hover:scale-[1.03] active:scale-95 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 py-[14px] rounded-xl transition-all duration-300 shrink-0 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </AnimatedSection>

        {/* 2. Main 3-Column Footer Layout with Top-Aligned Headings across Quick Links, Products, and Contact Us */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14 mb-16">
          
          {/* Left Column: Brand Info Content */}
          <div className="w-full lg:w-[35%] space-y-6 lg:pr-4">
            {/* Logo & Tagline Group */}
            <div className="space-y-2">
              <div>
                <Logo size="footer" />
              </div>
              <p className="text-xs sm:text-[13px] font-bold text-[#F97316] uppercase tracking-wider font-sans">
                Engine Oil &amp; Genuine Spare Parts Wholesale
              </p>
            </div>

            {/* Company Description */}
            <p className="text-sm sm:text-[14px] text-gray-300/90 leading-relaxed font-normal">
              RJ Traders is Pakistan&apos;s trusted B2B wholesale supplier of genuine engine oils, oil filters, brake pads, suspension parts, and heavy fleet lubricants.
            </p>

            {/* Subtle Location Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Location: <strong className="text-white font-semibold">Sadiqabad, Punjab, Pakistan</strong></span>
              </div>
            </div>
          </div>

          {/* Right Navigation & Contact Columns Container (Top-Aligned Baseline for Headings) */}
          <div className="w-full lg:w-[62%] flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-14">
            
            {/* Middle Column: Quick Links & Products */}
            <div className="w-full md:w-[60%] flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-12">
              {/* Sub-Column 1: Quick Links */}
              <div className="space-y-4 flex-1">
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-black uppercase tracking-wider text-white font-sans">
                    QUICK LINKS
                  </h4>
                  <div className="w-8 h-0.5 bg-[#F97316] rounded-full" />
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-300 font-normal">
                  <li>
                    <Link href="/" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?category=engine-oil" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Engine Oil
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?category=oil-filters" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Truck Spare Parts
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Blog &amp; Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Sub-Column 2: Products */}
              <div className="space-y-4 flex-1">
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-black uppercase tracking-wider text-white font-sans">
                    PRODUCTS
                  </h4>
                  <div className="w-8 h-0.5 bg-[#F97316] rounded-full" />
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-300 font-normal">
                  <li>
                    <Link href="/products?category=engine-oil" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Engine Oils
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?category=grease" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Grease &amp; Lubricants
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?category=oil-filters" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Oil Filters
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?category=brake-parts" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Brake Pads &amp; Discs
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?category=suspension" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Suspension Parts
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?category=belts-hoses" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Belts &amp; Hoses
                    </Link>
                  </li>
                  <li>
                    <Link href="/products?category=electrical" className="hover:text-[#F97316] hover:translate-x-1 transition-all duration-200 inline-block">
                      Electrical Parts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contact Us */}
            <div className="w-full md:w-[35%] space-y-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-black uppercase tracking-wider text-white font-sans">
                  CONTACT US
                </h4>
                <div className="w-8 h-0.5 bg-[#F97316] rounded-full" />
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-300 font-normal">
                <li className="flex items-center gap-3">
                  <div className="w-7.5 h-7.5 rounded-full bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Sadiqabad, Punjab, Pakistan</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7.5 h-7.5 rounded-full bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+92 321 1234567</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7.5 h-7.5 rounded-full bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@rjtraders.pk</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <div className="w-7.5 h-7.5 rounded-full bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>

              {/* Minimal Outlined Social Controls */}
              <div className="pt-3 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8.5 h-8.5 rounded-full border border-white/15 bg-white/5 hover:border-[#F97316] hover:bg-[#F97316] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8.5 h-8.5 rounded-full border border-white/15 bg-white/5 hover:border-[#F97316] hover:bg-[#F97316] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8.5 h-8.5 rounded-full border border-white/15 bg-white/5 hover:border-[#F97316] hover:bg-[#F97316] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/923211234567"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-8.5 h-8.5 rounded-full border border-white/15 bg-white/5 hover:border-[#25D366] hover:bg-[#25D366] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.34-1.492C8.016 23.473 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.877 0-3.64-.5-5.163-1.374l-.37-.212-3.832.901.916-3.731-.237-.384C2.395 15.65 1.8 13.882 1.8 12c0-5.624 4.576-10.2 10.2-10.2S22.2 6.376 22.2 12 17.624 22 12 22z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* 3. Bottom Bar with Noticeably Larger Typography */}
        <div className="pt-8 pb-4 border-t border-white/10 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F97316]/50 to-transparent" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-300/90 gap-4">
            <div>
              © 2025 RJ Traders. All rights reserved.
            </div>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="hover:text-[#F97316] font-medium transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms" className="hover:text-[#F97316] font-medium transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
