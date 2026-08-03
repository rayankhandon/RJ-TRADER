import React from "react";
import { Building, Truck, ShieldCheck, Headphones } from "lucide-react";

export const StatsBar: React.FC = () => {
  const trustStatements = [
    {
      icon: Building,
      title: "WHOLESALE",
      desc: "BUSINESS SUPPLY",
    },
    {
      icon: Truck,
      title: "PAKISTAN",
      desc: "NATIONWIDE COVERAGE",
    },
    {
      icon: ShieldCheck,
      title: "B2B",
      desc: "BUSINESS FOCUSED",
    },
    {
      icon: Headphones,
      title: "PACKAGING",
      desc: "PROFESSIONAL SOLUTIONS",
    },
  ];

  return (
    <section className="w-full bg-[#06182F] text-white py-8 border-b border-navy-900">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {trustStatements.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#0B2545]/60 border border-white/10 flex flex-col items-center justify-center space-y-1.5 hover:border-[#F97316]/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#F97316]/15 border border-[#F97316]/40 flex items-center justify-center text-[#F97316] mb-1">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#F97316] font-sans tracking-tight uppercase">
                  {st.title}
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-white">
                  {st.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
