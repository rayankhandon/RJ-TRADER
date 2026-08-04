import React from "react";
import { Package, ShieldCheck, Truck, Sparkles, Headphones, Percent } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const BenefitsBar: React.FC = () => {
  const benefits = [
    {
      icon: Package,
      title: "Bulk Supply",
      desc: "Order in volume, save on every unit.",
    },
    {
      icon: ShieldCheck,
      title: "Packaging Solutions",
      desc: "Custom packaging built for safety and shelf appeal.",
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      desc: "Reliable shipping to every corner of the country.",
    },
    {
      icon: Sparkles,
      title: "Quality Products",
      desc: "Every item checked before it reaches you.",
    },
    {
      icon: Headphones,
      title: "Business Support",
      desc: "A dedicated team that actually responds.",
    },
    {
      icon: Percent,
      title: "Competitive Pricing",
      desc: "Wholesale rates without the wholesale hassle.",
    },
  ];

  return (
    <section className="w-full bg-white border-b border-gray-200 pt-10 pb-9">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={idx} delayMs={idx * 100}>
                <div className="bg-[#F5F6F8] rounded-md border border-gray-200 p-4 flex flex-col items-start space-y-2 hover:border-[#F97316]/50 transition-colors group h-full">
                  <div className="w-8 h-8 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0 group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-black text-[#06182F] uppercase tracking-tight font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-600 leading-snug font-normal">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
