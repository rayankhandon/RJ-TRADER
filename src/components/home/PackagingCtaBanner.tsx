import React from "react";
import { Check, ArrowRight, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface PackagingCtaBannerProps {
  onOpenQuoteModal: () => void;
}

export const PackagingCtaBanner: React.FC<PackagingCtaBannerProps> = ({ onOpenQuoteModal }) => {
  const points = [
    "Professional Packaging",
    "Reliable Handling",
    "Nationwide Delivery",
    "Dedicated Business Support",
  ];

  return (
    <section className="w-full bg-[#F5F6F8] py-12 lg:py-16">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Contained Card Banner with Warehouse Background Photo & Gradient Overlay */}
          <div className="relative rounded-[20px] overflow-hidden border border-white/10 py-16 lg:py-20 px-6 sm:px-10 lg:px-16 shadow-[0_30px_60px_rgba(0,0,0,0.25)] bg-[#0A1A2F]">
            
            {/* Background Warehouse Photo */}
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
              alt="Warehouse logistics background"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-45 rounded-[20px]"
            />

            {/* Dark Overlay Gradient (Stronger on Left, Lighter on Right) */}
            <div
              className="absolute inset-0 z-0 pointer-events-none rounded-[20px]"
              style={{
                background: "linear-gradient(120deg, rgba(10,20,40,0.92) 0%, rgba(10,20,40,0.75) 60%, rgba(10,20,40,0.6) 100%)",
              }}
            />

            {/* Subtle Glowing Orange Accent Radial Gradient */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none z-0" />

            {/* Two-Column Split Layout */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (Span 8 cols on desktop): Badge, Heading, Subtext, Divider, Checklist */}
              <div className="lg:col-span-8">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-4 backdrop-blur-xs">
                  <span>PACKAGING & LOGISTICS</span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-4xl lg:text-[40px] leading-tight font-black uppercase tracking-tight font-sans text-white mb-3 drop-shadow-sm">
                  Ready to Stock Up or Ship Out?
                </h2>

                {/* Subtext */}
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-2xl">
                  Get a custom quote in minutes — no obligations, just straight answers.
                </p>

                {/* Subtle Horizontal Divider */}
                <div className="w-full border-t border-white/15 my-6" />

                {/* 4 Checklist Items Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-100">
                      <Check className="w-4 h-4 text-[#F97316] shrink-0 stroke-[2.5]" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column (Span 4 cols on desktop): Vertically Centered CTA Block */}
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center pt-4 lg:pt-0">
                
                {/* Supporting Text */}
                <div className="text-xs text-gray-300 font-medium mb-2.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Takes less than 2 minutes</span>
                </div>

                {/* Main Prominent CTA Button */}
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="w-full sm:w-auto bg-[#F97316] hover:bg-[#EA580C] hover:scale-[1.03] text-white font-extrabold text-sm uppercase tracking-wider px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-95 border border-[#F97316]/50"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
