"use client";

import React from "react";
import { Check, Clock, Users, Package, Award, MapPin, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface PackagingCtaBannerProps {
  onOpenQuoteModal: () => void;
}

export const PackagingCtaBanner: React.FC<PackagingCtaBannerProps> = ({ onOpenQuoteModal }) => {
  const points = [
    "100% Genuine Products",
    "Wholesale Tier Discounts",
    "Express Nationwide Shipping",
    "Dedicated B2B Support",
  ];

  const trustBadges = [
    { icon: Users, text: "500+ Customers Served" },
    { icon: Package, text: "10,000+ Products Available" },
    { icon: Award, text: "Genuine Brands: Shell, Mobil, Total, Delo, Liqui Moly" },
    { icon: MapPin, text: "Based in Sadiqabad, Punjab, Pakistan" },
  ];

  return (
    <section className="w-full bg-[#F5F6F8] py-12 lg:py-16">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Contained Card Banner with Warehouse Background Photo & Gradient Overlay */}
          <div className="relative rounded-[20px] overflow-hidden border border-white/10 py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-14 shadow-[0_20px_40px_rgba(0,0,0,0.2)] bg-[#0A1A2F]">
            
            {/* Background Warehouse Photo */}
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
              alt="Engine oils & spare parts warehouse"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30 rounded-[20px]"
            />

            {/* Dark Overlay Gradient */}
            <div
              className="absolute inset-0 z-0 pointer-events-none rounded-[20px]"
              style={{
                background: "linear-gradient(120deg, rgba(10,20,40,0.96) 0%, rgba(10,20,40,0.88) 60%, rgba(10,20,40,0.80) 100%)",
              }}
            />

            {/* Glowing Ambient Accent */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#ff7a1a]/15 rounded-full blur-3xl pointer-events-none z-0" />

            <div className="relative z-10">
              
              {/* Top Trust Badges / Credibility Row */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-8">
                {trustBadges.map((badge, idx) => {
                  const IconComp = badge.icon;
                  return (
                    <AnimatedSection key={idx} delayMs={idx * 80}>
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06182F]/80 border border-white/15 text-gray-200 text-[11px] sm:text-xs font-semibold backdrop-blur-xs shadow-xs">
                        <IconComp className="w-3.5 h-3.5 text-[#ff7a1a] shrink-0" />
                        <span>{badge.text}</span>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>

              {/* Two-Column Split Layout with Whitespace Separation (67% / 33%) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-stretch">
                
                {/* Left Column (67% Width) */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a1a]/20 border border-[#ff7a1a]/40 text-[#ff7a1a] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-4 backdrop-blur-xs">
                      <span>ENGINE OIL &amp; TRUCK SPARE PARTS</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-4xl lg:text-[38px] leading-tight font-black uppercase tracking-tight font-sans text-white mb-3 drop-shadow-sm">
                      Need Engine Oil or Truck Spare Parts?
                    </h2>

                    {/* Subtext */}
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-2xl">
                      Get a fast price quote for genuine engine oils, oil filters, brake parts, suspension components, and regular truck maintenance supplies.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* 4 Checklist Items with Staggered Scroll Entrance */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      {points.map((pt, idx) => (
                        <AnimatedSection key={idx} delayMs={150 + idx * 100}>
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-100">
                            <Check className="w-4 h-4 text-[#ff7a1a] shrink-0 stroke-[2.5]" />
                            <span>{pt}</span>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>

                    {/* Trust Reinforcement Line */}
                    <p className="text-[11px] sm:text-xs text-gray-300/90 font-medium italic flex items-center gap-2 leading-relaxed">
                      <Shield className="w-3.5 h-3.5 text-[#ff7a1a] shrink-0" />
                      <span>Trusted by workshops, fleet operators, and retailers across Pakistan for genuine parts and dependable service since day one.</span>
                    </p>
                  </div>
                </div>

                {/* Right Column (33% Width) - Vertically Centered with Whitespace Balance */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center text-center py-4 lg:py-0">
                  
                  <div className="flex flex-col items-center justify-center w-full my-auto">
                    {/* Response Text (No background, no border, no pill shape) */}
                    <div className="flex items-center justify-center gap-1.5 text-[13px] text-white/70 font-medium mb-3">
                      <Clock className="w-4 h-4 text-[#ff7a1a] shrink-0" />
                      <span>Fast Response Service</span>
                    </div>

                    {/* Button Container with Pulsing Radial Glow Accent */}
                    <div className="relative w-full max-w-[290px] group flex justify-center py-1">
                      {/* Ambient Loop Radial Glow behind button */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff7a1a]/30 via-[#ff7a1a]/15 to-transparent rounded-full blur-xl animate-pulse pointer-events-none" />

                      <button
                        type="button"
                        onClick={onOpenQuoteModal}
                        className="relative w-full bg-[#ff7a1a] hover:bg-[#ea6a0a] text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4.5 rounded-full shadow-[0_4px_16px_rgba(255,122,26,0.35)] hover:shadow-[0_8px_24px_rgba(255,122,26,0.5)] hover:scale-[1.05] transition-all duration-300 ease-out flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 border border-white/20 z-10"
                      >
                        <span>GET A QUOTE</span>
                        <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </div>

                    {/* Secondary supporting text below button */}
                    <p className="text-xs text-white/60 font-medium flex items-center justify-center gap-1.5 mt-3">
                      <span>⚡ Response within 24 hours</span>
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
