import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
    <section className="w-full bg-[#06182F] text-white py-12 lg:py-16 relative overflow-hidden">
      {/* Real Industrial Logistics Background Image in Full Color with Plain Black Overlay */}
      <img
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
        alt="Warehouse trucks night logistics background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-[11px] font-extrabold tracking-widest uppercase">
                <span>PACKAGING & LOGISTICS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight font-sans text-white">
                Ready to Stock Up or Ship Out?
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Get a custom quote in minutes — no obligations, just straight answers.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="bg-[#F97316] hover:bg-[#EA580C] hover:scale-[1.02] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 cursor-pointer active:scale-95"
              >
                <span>Request a Quote →</span>
              </button>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
