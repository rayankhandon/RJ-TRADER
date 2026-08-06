import React from "react";
import { Package, ShieldCheck, Truck, Sparkles, Headphones, Percent } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const BenefitsBar: React.FC = () => {
  const benefits = [
    {
      num: "01",
      icon: Package,
      title: "Bulk Supply",
      desc: "Order in volume, save on every unit.",
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "Packaging Solutions",
      desc: "Custom packaging built for safety and shelf appeal.",
    },
    {
      num: "03",
      icon: Truck,
      title: "Nationwide Delivery",
      desc: "Reliable shipping to every corner of the country.",
    },
    {
      num: "04",
      icon: Sparkles,
      title: "Quality Products",
      desc: "Every item checked before it reaches you.",
    },
    {
      num: "05",
      icon: Headphones,
      title: "Business Support",
      desc: "A dedicated team that actually responds.",
    },
    {
      num: "06",
      icon: Percent,
      title: "Competitive Pricing",
      desc: "Wholesale rates without the wholesale hassle.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F6F8] border-b border-gray-200 pt-7 pb-7">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={idx} delayMs={idx * 80}>
                <div className="bg-white rounded-lg border border-gray-200/90 p-4 flex flex-col justify-between hover:border-[#F97316]/50 shadow-xs hover:shadow-md transition-all group relative overflow-hidden h-full">
                  {/* Subtle Dotted Pattern in lower portion */}
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:10px_10px] opacity-[0.12] pointer-events-none group-hover:opacity-20 transition-opacity" />

                  {/* Top Portion: Icon + Title + Accent + Desc */}
                  <div className="relative z-10 space-y-1.5">
                    {/* Soft Circular Icon Container */}
                    <div className="w-8.5 h-8.5 rounded-full bg-[#F97316]/12 border border-[#F97316]/25 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white group-hover:border-[#F97316] transition-all shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      {/* Bold Title */}
                      <h3 className="text-xs font-black text-[#06182F] uppercase tracking-tight font-sans">
                        {item.title}
                      </h3>

                      {/* Small Orange Underline Accent */}
                      <div className="w-5 h-0.5 bg-[#F97316] rounded-full my-1 group-hover:w-7 transition-all" />

                      {/* Description */}
                      <p className="text-[11px] text-gray-600 leading-snug font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Large Faded Number in Bottom-Right Corner */}
                  <span className="absolute bottom-1.5 right-2.5 text-2xl font-black font-mono text-gray-200/80 group-hover:text-[#F97316]/20 transition-colors pointer-events-none select-none z-0">
                    {item.num}
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
